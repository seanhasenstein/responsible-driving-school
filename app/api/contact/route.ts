export const maxDuration = 60; // This function can run for a maximum of 60 seconds

import { NextRequest, NextResponse } from 'next/server';

import { createIdNumber, formatPhoneNumber } from '@/utils';

import { ContactMessage } from '@/types';
import { connectToDb, contactMessage } from '@/db';
import { removeNonDigits } from '@/utils';
import { sendEmail } from '@/utils/mailgun';

type ContactFormBody = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  message: string | undefined;
  hpField: string | undefined;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const { name, email, phone, message, hpField }: ContactFormBody = await req.json();

    if (hpField) {
      console.warn('[contact] honeypot_triggered', { ip, userAgent });
      return NextResponse.json({ message: 'Message sent successfully.' });
    }

    if (!name || !email || !phone || !message) {
      console.warn('[contact] validation_failed', { code: 'MISSING_FIELDS', ip, userAgent });
      return NextResponse.json(
        { error: { message: 'Missing required fields.', code: 'MISSING_FIELDS' } },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const normalizedPhone = removeNonDigits(phone.trim());
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      console.warn('[contact] validation_failed', { code: 'INVALID_NAME', ip, userAgent });
      return NextResponse.json(
        { error: { message: 'Invalid name.', code: 'INVALID_NAME' } },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 254 || !EMAIL_REGEX.test(trimmedEmail)) {
      console.warn('[contact] validation_failed', { code: 'INVALID_EMAIL', ip, userAgent });
      return NextResponse.json(
        { error: { message: 'Invalid email.', code: 'INVALID_EMAIL' } },
        { status: 400 }
      );
    }

    if (normalizedPhone.length !== 10) {
      console.warn('[contact] validation_failed', { code: 'INVALID_PHONE', ip, userAgent });
      return NextResponse.json(
        { error: { message: 'Invalid phone number.', code: 'INVALID_PHONE' } },
        { status: 400 }
      );
    }

    const wordCount = trimmedMessage.split(/\s+/).filter(Boolean).length;

    if (wordCount < 2 || trimmedMessage.length > 2000) {
      console.warn('[contact] validation_failed', { code: 'INVALID_MESSAGE', ip, userAgent });
      return NextResponse.json(
        { error: { message: 'Invalid message.', code: 'INVALID_MESSAGE' } },
        { status: 400 }
      );
    }

    if (
      !process.env.CONTACT_FORM_TO ||
      !process.env.CONTACT_FORM_BCC ||
      !process.env.CONTACT_FORM_FROM
    ) {
      return NextResponse.json(
        { error: { message: 'Missing required .env variables.', code: 'MISSING_ENV_VARS' } },
        { status: 500 }
      );
    }

    const newMessageInput: ContactMessage = {
      name: trimmedName,
      email: trimmedEmail,
      phone: normalizedPhone,
      message: trimmedMessage
    };

    const db = await connectToDb();
    await contactMessage.createContactMessage(db, newMessageInput);

    const id = createIdNumber();

    await sendEmail({
      to: process.env.CONTACT_FORM_TO,
      bcc: process.env.CONTACT_FORM_BCC,
      from: process.env.CONTACT_FORM_FROM,
      replyTo: newMessageInput.email,
      subject: `Contact Form Submission: ${newMessageInput.name} [#${id}]`,
      text: `Contact Form Submission [#${id}]\n\nName: ${newMessageInput.name}\nEmail: ${
        newMessageInput.email
      }\nPhone: ${formatPhoneNumber(newMessageInput.phone)}\n\nMessage:\n${newMessageInput.message}`
    });

    console.log('[contact] message_sent', { id });

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        error: {
          message: 'An unexpected error occurred. Please try again.',
          code: 'API_ROUTE_ERROR'
        }
      },
      { status: 500 }
    );
  }
}

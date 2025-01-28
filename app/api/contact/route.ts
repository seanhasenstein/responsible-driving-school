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
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message }: ContactFormBody = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: { message: 'Missing required fields.', code: 'MISSING_FIELDS' } },
        { status: 404 }
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
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: removeNonDigits(phone.trim()),
      message: message.trim()
    };

    const db = await connectToDb();
    await contactMessage.createContactMessage(db, newMessageInput);

    const id = createIdNumber();

    const sendRes = await sendEmail({
      to: process.env.CONTACT_FORM_TO,
      bcc: process.env.CONTACT_FORM_BCC,
      from: process.env.CONTACT_FORM_FROM,
      replyTo: newMessageInput.email,
      subject: `Contact Form Submission: ${newMessageInput.name} [#${id}]`,
      text: `Contact Form Submission [#${id}]\n\nName: ${newMessageInput.name}\nEmail: ${
        newMessageInput.email
      }\nPhone: ${formatPhoneNumber(newMessageInput.phone)}\n\nMessage:\n${newMessageInput.message}`
    });

    console.log(`Contact form email sent [${id}]`);
    console.log(sendRes);

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : 'Unknown error occurred',
          code: 'API_ROUTE_ERROR'
        }
      },
      { status: 500 }
    );
  }
}

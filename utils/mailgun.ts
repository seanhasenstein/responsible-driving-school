import * as dotenv from 'dotenv';
import fetch, { FormData } from 'node-fetch';

import { mailgunAuthToken } from '../constants/mailgun';

dotenv.config();

interface SendEmailInput {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
  bcc?: string;
  replyTo?: string;
  attachment?: string;
}

export async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
  bcc,
  replyTo,
  attachment
}: SendEmailInput) {
  const form = new FormData();
  const endpoint = `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`;

  form.append('to', to);
  form.append('from', from);
  form.append('subject', subject);
  form.append('text', text);

  if (html) form.append('html', html);
  if (bcc) form.append('bcc', bcc);
  if (replyTo) form.append('h:Reply-To', replyTo);
  if (attachment) form.append('attachment', attachment);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: form,
    headers: {
      Authorization: mailgunAuthToken
    }
  });

  const data = await response.json();

  return data;
}

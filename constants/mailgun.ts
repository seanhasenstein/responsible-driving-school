export function getMailgunAuthToken(): string {
  const key = process.env.MAILGUN_API_KEY;
  if (!key) {
    throw new Error('MAILGUN_API_KEY is not set');
  }
  return `Basic ${Buffer.from(`api:${key}`).toString('base64')}`;
}

export function getMailgunDomain(): string {
  const domain = process.env.MAILGUN_DOMAIN;
  if (!domain) {
    throw new Error('MAILGUN_DOMAIN is not set');
  }
  return domain;
}

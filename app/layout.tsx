import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Responsible Driving School | Certified Drivers Education in Sheboygan County',
  description:
    "One of Sheboygan County's to driver education programs, with 25+ years of online drivers education instruction and behind-the-wheel training."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>{children}</body>
    </html>
  );
}

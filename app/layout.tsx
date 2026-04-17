import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

const siteUrl = 'https://www.driveresponsible.com';
const siteName = 'Responsible Driving School';
const title = 'Responsible Driving School | Certified Drivers Education in Sheboygan County';
const description =
  "One of Sheboygan County's top driver education programs, with 25+ years of online drivers education instruction and behind-the-wheel training.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['DrivingSchool', 'LocalBusiness'],
  name: 'Responsible Driving School LLC',
  description,
  url: siteUrl,
  telephone: '+1-920-629-5959',
  email: 'al.rdsllc@gmail.com',
  image: `${siteUrl}/logo.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '525 N 6th Street',
    addressLocality: 'Oostburg',
    addressRegion: 'WI',
    postalCode: '53070',
    addressCountry: 'US'
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Sheboygan County, Wisconsin'
  },
  sameAs: [
    'https://www.google.com/maps/place/Responsible+Driving+School+LLC/data=!4m2!3m1!1s0x0:0xda35e4c1e81bcfaa'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

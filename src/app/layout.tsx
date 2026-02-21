import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Nido Scuola Jacarandà | Asilo Nido Bilingue Milano — Reggio Approach",
  description:
    "Nido Scuola Jacarandà: asilo nido e scuola dell'infanzia bilingue a Milano. Educazione ispirata al Reggio Approach per bambini da 6 mesi a 6 anni. 2700 mq di spazi dedicati in Corso Sempione.",
  keywords: [
    "asilo nido Milano",
    "scuola Montessori Milano",
    "Reggio Approach",
    "nido bilingue Milano",
    "scuola infanzia bilingue",
    "Jacarandà Milano",
    "asilo Corso Sempione",
    "nido Reggio Emilia Milano",
  ],
  authors: [{ name: "Nido Scuola Jacarandà" }],
  openGraph: {
    title: "Nido Scuola Jacarandà | Dove ogni bambino fiorisce",
    description:
      "Asilo nido e scuola dell'infanzia bilingue a Milano. Educazione ispirata al Reggio Approach, 2700 mq di spazi dedicati, piscine, atelier e giardini.",
    url: "https://www.nidoscuolajacaranda.com",
    siteName: "Nido Scuola Jacarandà",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.nidoscuolajacaranda.com/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nido Scuola Jacarandà - Asilo Nido Bilingue Milano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nido Scuola Jacarandà | Asilo Nido Bilingue Milano",
    description:
      "Educazione ispirata al Reggio Approach per bambini da 6 mesi a 6 anni a Milano.",
    images: ["https://www.nidoscuolajacaranda.com/assets/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nidoscuolajacaranda.com",
    languages: {
      "it": "https://www.nidoscuolajacaranda.com",
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.nidoscuolajacaranda.com/#organization",
  name: "Nido Scuola Jacarandà",
  alternateName: "Jacarandà Milano",
  description: "Asilo nido e scuola dell'infanzia bilingue a Milano con approccio educativo Reggio Approach per bambini da 6 mesi a 6 anni",
  url: "https://www.nidoscuolajacaranda.com",
  logo: "https://www.nidoscuolajacaranda.com/assets/jacaranda-logo-original.jpg",
  image: "https://www.nidoscuolajacaranda.com/assets/jacaranda-logo-original.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corso Sempione, 34/2",
    addressLocality: "Milano",
    addressRegion: "Lombardia",
    postalCode: "20154",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.4773",
    longitude: "9.1715",
  },
  telephone: "+39 02 36697450",
  email: "info@nidoscuolajacaranda.com",
  priceRange: "€€€",
  areaServed: {
    "@type": "City",
    name: "Milano",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/nidoscuolajacaranda",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="geo.region" content="IT-MI" />
        <meta name="geo.placename" content="Milano" />
        <meta name="geo.position" content="45.4773;9.1715" />
        <meta name="ICBM" content="45.4773, 9.1715" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}

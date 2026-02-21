import type { Metadata } from "next";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Nido Scuola Jacarandà | Asilo Nido Bilingue Milano",
    description:
      "Educazione ispirata al Reggio Approach per bambini da 6 mesi a 6 anni a Milano.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      "it-IT": "/",
    },
  },
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
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}

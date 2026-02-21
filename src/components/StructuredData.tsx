export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    name: "Nido Scuola Jacarandà",
    alternateName: "Jacarandà Asilo Nido Bilingue Milano",
    description:
      "Asilo nido e scuola dell'infanzia bilingue a Milano. Educazione ispirata al Reggio Approach per bambini da 6 mesi a 6 anni.",
    url: "https://www.nidoscuolajacaranda.com",
    telephone: "+390236697450",
    email: "info@nidoscuolajacaranda.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corso Sempione, 34/2",
      addressLocality: "Milano",
      addressRegion: "MI",
      postalCode: "20154",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4773,
      longitude: 9.1715,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30",
    },
    priceRange: "€€€",
    image: "https://www.nidoscuolajacaranda.com/assets/atrio.jpg",
    areaServed: {
      "@type": "City",
      name: "Milano",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
    },
    foundingDate: "2018",
    keywords:
      "asilo nido bilingue, scuola infanzia Milano, Reggio Approach, educazione bilingue, nido Milano",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

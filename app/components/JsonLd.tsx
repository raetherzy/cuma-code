export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CumaCode",
    description:
      "Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack. Harga: terserah kamu.",
    url: "https://cumacode.id",
    slogan: "#BayarCumaCuma",
    areaServed: "ID",
    priceRange: "Pay What You Want",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

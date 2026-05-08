const siteUrl = "https://www.enfilatcreacions.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/avis-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/politica-privacitat`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

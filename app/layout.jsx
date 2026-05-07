import "./globals.css";

const brandName = "Enfila't Creacions";
const description =
  "Descobreix el catàleg en PDF d'Enfila't Creacions i demana informació per WhatsApp o Instagram.";

export const metadata = {
  title: `${brandName} | Catàleg`,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${brandName} | Catàleg`,
    description,
    type: "website",
    locale: "es_ES",
    siteName: brandName,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  );
}

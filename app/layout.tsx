import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KWAMYA | Agence Web Digital & Développement d'Applications au Cameroun",
  description: "KWAMYA est une agence web digital premium basée au Cameroun, spécialisée dans la création de sites web, d'applications mobiles, l'optimisation SEO, le UI/UX design, la maintenance web et le consulting digital pour les entreprises africaines.",
  keywords: [
    "agence web Cameroun", 
    "développement web Afrique", 
    "création site internet Yaoundé", 
    "agence digitale Cameroun", 
    "développement application mobile Cameroun", 
    "SEO Afrique", 
    "UI/UX design Cameroun", 
    "maintenance site web",
    "consulting digital Afrique", 
    "webdesign professionnel Cameroun",
    "agence numérique Yaoundé",
    "création site e-commerce Cameroun",
    "référencement web africain",
    "solutions digitales entreprises Cameroun",
    "développeur web Afrique centrale",
    "transformation digitale Cameroun"
  ],
  generator: "Next.js",
  applicationName: "KWAMYA",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "KWAMYA" }],
  creator: "KWAMYA",
  publisher: "KWAMYA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kwamya.flashinfos237.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KWAMYA | Votre Partenaire Digital au Cameroun",
    description: "Agence web premium offrant des services de création de sites web, applications mobiles, SEO, UI/UX design et consulting digital pour propulser votre entreprise en ligne.",
    url: "https://kwamya.flashinfos237.com",
    siteName: "KWAMYA",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://kwamya.flashinfos237.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "KWAMYA - Agence Web Digital au Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KWAMYA | Agence Web Digital au Cameroun",
    description: "Création de sites web, d'applications, SEO et solutions digitales complètes pour entreprises africaines.",
    images: ["https://kwamya.com/logo.svg"],
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.svg", sizes: "16x16", type: "image/svg" },
      { url: "/logo.svg", sizes: "32x32", type: "image/svg" },
    ],
    apple: [{ url: "/logo.svg", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://kwamya.flashinfos237.com" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KWAMYA",
              "description": "Agence web digital basée au Cameroun offrant des services de création de sites web, d'applications mobiles, d'optimisation SEO, de UI/UX design, de maintenance web et de consulting digital.",
              "url": "https://kwamya.flashinfos237.com",
              "logo": "https://kwamya.flashinfos237.com/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CM",
                "addressLocality": "Yaoundé",
                "addressRegion": "Centre"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.848",
                "longitude": "11.502"
              },
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "telephone": "+237-650-601-520",
              // "sameAs": [
              //   "https://www.facebook.com/kwamya",
              //   "https://www.instagram.com/kwamya",
              //   "https://www.linkedin.com/company/kwamya",
              //   "https://twitter.com/kwamya"
              // ],
              "priceRange": "$$",
              "servesCuisine": "Digital Services",
              "areaServed": ["Cameroun", "Afrique Centrale", "Afrique"]
            })
          }}
        />

        {/* Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Création de Site Web",
                  "description": "Développement de sites web professionnels, responsives et optimisés pour les entreprises camerounaises et africaines."
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Création d'Applications Mobiles",
                  "description": "Conception et développement d'applications mobiles natives et hybrides pour iOS et Android."
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "Optimisation SEO",
                  "description": "Services de référencement naturel pour améliorer la visibilité de votre entreprise en ligne."
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "UI/UX Design",
                  "description": "Création d'interfaces utilisateur intuitives et d'expériences utilisateur engageantes pour web et mobile."
                },
                {
                  "@type": "Service",
                  "position": 5,
                  "name": "Maintenance Web",
                  "description": "Services de maintenance régulière, mises à jour et support technique pour sites web et applications."
                },
                {
                  "@type": "Service",
                  "position": 6,
                  "name": "Consulting Digital",
                  "description": "Conseils stratégiques et accompagnement pour la transformation numérique des entreprises africaines."
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://noegonzalez.dev"),
  title: {
    default: "Noé González Mendoza | Senior Software Engineer | Full Stack, React & Next.js",
    template: "%s | Noé González Mendoza",
  },
  description:
    "Senior Software Engineer with 10+ years of experience building enterprise applications, SaaS platforms, business systems, and modern web solutions with React, Next.js, and Node.js. Remote from Managua, Nicaragua.",
  alternates: {
    canonical: "https://noegonzalez.dev/",
  },
  keywords: [
    "Noé González Mendoza",
    "Senior Software Engineer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Architecture",
    "Enterprise Applications",
    "SaaS Architecture",
    "Multi-Tenant Systems",
    "RBAC",
    "SQL Server",
    "PostgreSQL",
    "Nicaragua",
    "Remote Software Engineer",
  ],
  authors: [{ name: "Noé González Mendoza", url: "https://noegonzalez.dev" }],
  creator: "Noé González Mendoza",
  openGraph: {
    title: "Noé González Mendoza | Senior Software Engineer",
    description:
      "Senior Software Engineer with 10+ years of experience in Full Stack development, React, Next.js, Node.js, enterprise systems, and SaaS architectures.",
    url: "https://noegonzalez.dev/",
    siteName: "Noé González Mendoza | Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://noegonzalez.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Noé González Mendoza | Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noé González Mendoza | Senior Software Engineer",
    description:
      "Senior Software Engineer with 10+ years of experience in Full Stack development, React, Next.js, Node.js, enterprise systems, and SaaS architectures.",
    images: ["https://noegonzalez.dev/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noé González Mendoza",
  url: "https://noegonzalez.dev/",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 10+ years of experience specialized in Full Stack web development, React, Next.js, Node.js, enterprise systems, and multi-tenant SaaS architectures.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Managua",
    addressCountry: "Nicaragua",
  },
  sameAs: ["https://www.linkedin.com/in/ingnoegonzalez/"],
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "SQL Server",
    "PostgreSQL",
    "Prisma ORM",
    "REST APIs",
    "SaaS Architecture",
    "Multi-Tenant Systems",
    "Role-Based Access Control (RBAC)",
    "Enterprise Applications",
    "Database Design",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Noé González Mendoza | Senior Software Engineer",
  url: "https://noegonzalez.dev/",
  description:
    "Senior Software Engineer specializing in Full Stack web development, React, Next.js, Node.js, enterprise applications, and multi-tenant SaaS platforms.",
  publisher: {
    "@type": "Person",
    name: "Noé González Mendoza",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-13P4TBDEJH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13P4TBDEJH');
          `}
        </Script>

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

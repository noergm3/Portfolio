import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "Noé González Mendoza | Senior Frontend Engineer",
    template: "%s | Noé González Mendoza",
  },
  description:
    "Senior Frontend Engineer specialized in React, Next.js and JavaScript. Building enterprise applications, SaaS platforms and modern web solutions with 10+ years of experience.",
  keywords: [
    "Noé González Mendoza",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "SaaS Architecture",
    "Enterprise Systems",
    "Full Stack",
    "SQL Server",
    "PostgreSQL",
  ],
  authors: [{ name: "Noé González Mendoza", url: "https://noegonzalez.dev" }],
  creator: "Noé González Mendoza",
  openGraph: {
    title: "Noé González Mendoza | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialized in React, Next.js, and enterprise SaaS architectures with 10+ years of experience.",
    url: "https://noegonzalez.dev",
    siteName: "Noé González Mendoza Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noé González Mendoza | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialized in React, Next.js and enterprise SaaS architectures.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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

        {children}
      </body>
    </html>
  );
}

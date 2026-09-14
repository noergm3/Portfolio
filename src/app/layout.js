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
    default: "Ing. Noé González | Ingeniero de Software & Full Stack Developer",
    template: "%s | Ing. Noé González",
  },
  description:
    "Portafolio profesional de Noé González, Ingeniero de Software con más de 10 años de experiencia en desarrollo web, arquitecturas escalables, React, Next.js, Node.js y SQL Server.",
  keywords: [
    "Noé González",
    "Ingeniero de Software",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "SQL Server",
    "Portafolio Desarrollador",
    "Web Developer",
  ],
  authors: [{ name: "Noé González", url: "https://noegonzalez.dev" }],
  creator: "Noé González",
  openGraph: {
    title: "Ing. Noé González | Ingeniero de Software & Full Stack Developer",
    description:
      "Portafolio profesional con más de 10 años de experiencia en desarrollo de sistemas, aplicaciones web modernas y bases de datos transaccionales.",
    url: "https://noegonzalez.dev",
    siteName: "Portafolio de Noé González",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Noé González | Ingeniero de Software & Full Stack Developer",
    description:
      "Portafolio profesional con más de 10 años de experiencia en desarrollo web y sistemas.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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

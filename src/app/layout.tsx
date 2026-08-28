import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { getBusinessInfo } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessInfo = getBusinessInfo();

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: businessInfo.name,
  description: `Professional pressure washing services in Portland, OR. ${businessInfo.tagline}`,
  openGraph: {
    title: businessInfo.name,
    description: `Professional pressure washing services in Portland, OR. ${businessInfo.tagline}`,
    url: businessInfo.website,
    siteName: businessInfo.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: businessInfo.name,
    description: `Professional pressure washing services in Portland, OR. ${businessInfo.tagline}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    url: businessInfo.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
    },
    areaServed: businessInfo.serviceAreas,
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="print:hidden">
          <Navigation businessInfo={businessInfo} />
        </div>
        <main className="flex-grow">{children}</main>
        <div className="print:hidden">
          <Footer businessInfo={businessInfo} />
        </div>
        <LeadCaptureModal formspreeId={businessInfo.formspreeId} />
      </body>
    </html>
  );
}

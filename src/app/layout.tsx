import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { getBusinessInfo, getServices } from "@/lib/content";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessInfo = getBusinessInfo();

const siteDescription = `Pressure washing in Portland, Beaverton, Tigard, Hillsboro & Lake Oswego, OR. House washing, driveways, patios, siding & vehicles. ${businessInfo.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: {
    default: `Pressure Washing in Portland & Beaverton, OR | ${businessInfo.name}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: businessInfo.name,
    description: siteDescription,
    url: businessInfo.website,
    siteName: businessInfo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/portfolio/patio-scrubbing.webp",
        width: 1200,
        height: 1600,
        alt: "Strickland Pressure Washing cleaning a flagstone patio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.name,
    description: siteDescription,
    images: ["/images/portfolio/patio-scrubbing.webp"],
  },
  verification: {
    google: "your-google-code",

    other: {
      "msvalidate.01": "856E6C405A1E79A472041A85A1C6DBFE  ",
    },
  },
};

// "8:00 AM" -> "08:00"
function to24h(time: string) {
  const [, h, m, ampm] = time.match(/(\d+):(\d+)\s*(AM|PM)/i) ?? [];
  if (!h) return null;
  const hour = (Number(h) % 12) + (ampm.toUpperCase() === "PM" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${m}`;
}

function openingHours(days: string[], range: string) {
  const [opens, closes] = range.split("-").map((t) => to24h(t.trim()));
  if (!opens || !closes) return [];
  return [{ "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
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
    areaServed: businessInfo.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, OR`,
    })),
    sameAs: Object.values(businessInfo.social),
    image: `${businessInfo.website}/images/portfolio/patio-scrubbing.webp`,
    logo: `${businessInfo.website}/images/logo/stricklandPressure.jpg`,
    openingHoursSpecification: [
      ...openingHours(
        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        businessInfo.hours.weekday,
      ),
      ...openingHours(["Saturday"], businessInfo.hours.saturday),
      ...openingHours(["Sunday"], businessInfo.hours.sunday),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pressure Washing Services",
      itemListElement: getServices().map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title },
      })),
    },
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
        <LeadCaptureModal
          formspreeId={businessInfo.formspreeId}
          turnstileSiteKey={businessInfo.turnstileSiteKey}
        />
      </body>
    </html>
  );
}

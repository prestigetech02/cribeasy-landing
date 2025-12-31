import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CribEasy - Community-Driven Real Estate Platform",
    template: "%s | CribEasy",
  },
  description: "Find verified rental listings, connect with neighbors, and discover your perfect neighborhood home. CribEasy connects renters, agents, and residents through trusted listings and community engagement.",
  keywords: ["real estate", "rental listings", "neighborhood", "community", "verified listings", "renters", "agents", "landlords", "property search"],
  authors: [{ name: "CribEasy" }],
  creator: "CribEasy",
  publisher: "CribEasy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cribeasy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CribEasy",
    title: "CribEasy - Community-Driven Real Estate Platform",
    description: "Find verified rental listings, connect with neighbors, and discover your perfect neighborhood home. CribEasy connects renters, agents, and residents through trusted listings and community engagement.",
    images: [
      {
        url: "/images/cribeasy-logo.jpg",
        width: 1200,
        height: 630,
        alt: "CribEasy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CribEasy - Community-Driven Real Estate Platform",
    description: "Find verified rental listings, connect with neighbors, and discover your perfect neighborhood home.",
    images: ["/images/cribeasy-logo.jpg"],
    creator: "@cribeasy",
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
  icons: {
    icon: "/images/cribeasy-logo.jpg",
    shortcut: "/images/cribeasy-logo.jpg",
    apple: "/images/cribeasy-logo.jpg",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    yandex: process.env.YANDEX_VERIFICATION_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`} style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>{children}</body>
    </html>
  );
}


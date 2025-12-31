import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CribEasy - Community-Driven Real Estate Platform",
  description: "Find verified rental listings, connect with neighbors, and discover your perfect neighborhood home. CribEasy connects renters, agents, and residents through trusted listings and community engagement.",
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


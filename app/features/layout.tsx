import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features",
  description: "Discover all the features that make CribEasy the leading community-driven real estate platform - from verified listings to neighborhood insights and community engagement.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


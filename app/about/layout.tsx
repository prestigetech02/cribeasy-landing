import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CribEasy - a community-driven real estate platform connecting renters, agents, and residents through verified listings and trusted community connections.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Choose the perfect plan for your needs. Free forever for renters, flexible premium plans for agents and landlords, and commission-based pricing for service providers.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


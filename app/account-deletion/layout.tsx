import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account & Data Deletion Request – CribEasy",
  description: "Request deletion of your CribEasy account and associated personal data. Submit your account deletion request through our secure form.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccountDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

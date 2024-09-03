import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Ticket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import { Rubik } from "next/font/google";
import { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tickets Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}

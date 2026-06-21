import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand | Pet Adoption",
  description:
    "Find your new best friend. Browse adoptable pets and learn how to bring one home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}

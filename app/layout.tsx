import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Subsets for the font
  weight: ["400", "500", "600", "700"], // Font weights you want to include
  display: "swap", // Optional: avoids a flash of invisible text
});

export const metadata: Metadata = {
  title: "Nawavar",
  description: "Leading Digital Innovation Agency in Kabul, Afghanistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}

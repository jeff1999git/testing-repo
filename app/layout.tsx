import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formula 1 | Engineering Beyond Speed",
  description:
    "Discover the pinnacle of motorsport engineering. Explore the aerodynamics, power units, and advanced technology behind the world's fastest racing machines.",
  keywords: ["Formula 1", "F1", "motorsport", "engineering", "aerodynamics", "Ferrari"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#050505] text-[#f0f0f0] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

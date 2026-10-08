import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* PinNote feedback widget. Its server runs on localhost, so it's only on for local dev:
            PINNOTE_ENABLED=true in .env.development.local */}
        {process.env.PINNOTE_ENABLED === "true" && (
          <Script
            src="http://localhost:3000/embed.js"
            data-site="pn_a3vk8hIhxED9oOTh6xbnyY2R"
            strategy="afterInteractive"
            async
          />
        )}
      </body>
    </html>
  );
}

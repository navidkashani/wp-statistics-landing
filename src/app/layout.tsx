import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WP Statistics - Privacy-Friendly Analytics for WordPress",
  description:
    "The most popular privacy-friendly analytics plugin for WordPress. Know your visitors without compromising their privacy. GDPR compliant, no cookies required.",
  keywords: [
    "WordPress analytics",
    "WP Statistics",
    "privacy analytics",
    "GDPR compliant",
    "website statistics",
    "WordPress plugin",
  ],
  openGraph: {
    title: "WP Statistics - Privacy-Friendly Analytics for WordPress",
    description:
      "Know your visitors without compromising their privacy. The #1 privacy-focused analytics for WordPress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulila — Menopause Care That Actually Works",
  description: "Doctor-prescribed hormone therapy delivered to your door. Join 50,000+ women who chose to feel like themselves again.",
  keywords: ["menopause", "hormone therapy", "HRT", "women's health", "telehealth"],
  authors: [{ name: "Tulila Health" }],
  openGraph: {
    title: "Tulila — Menopause Care That Actually Works",
    description: "Doctor-prescribed hormone therapy delivered to your door. Join 50,000+ women who chose to feel like themselves again.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}// Force complete deployment Wed Apr  8 15:52:45 PDT 2026

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
  metadataBase: new URL("https://mntr.space"),
  title: "Mantra Manan Saraswat — Product, Strategy & Growth",
  description:
    "Perpetually Work-in-Progress. Product Manager building agentic AI for US healthcare at 100ms — 5 years across product, growth, sales and strategy.",
  openGraph: {
    title: "Mantra Manan Saraswat",
    description:
      "Product, Strategy & Growth · AI, B2B · Building agentic AI for US healthcare at 100ms.",
    url: "https://mntr.space",
    siteName: "mntr.space",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantra Manan Saraswat",
    description: "Product, Strategy & Growth · AI, B2B.",
    creator: "@mntr_space",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}

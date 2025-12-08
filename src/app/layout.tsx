import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Bryan Nelson - Lead Front End Engineer",
  description:
    "Lead Front End Engineer with 14+ years of experience specializing in React, TypeScript, and modern web technologies. Based in France, working remotely.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Bryan Nelson - Lead Front End Engineer",
    description:
      "Lead Front End Engineer with 14+ years of experience specializing in React, TypeScript, and modern web technologies. Based in France, working remotely.",
    url: "https://portfolio-phi-umber-56.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://portfolio-phi-umber-56.vercel.app/me.jpg",
        width: 200,
        height: 200,
        alt: "Bryan Nelson - Lead Front End Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://portfolio-phi-umber-56.vercel.app/",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#111827" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white font-sans`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;

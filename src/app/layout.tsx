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
  title: "Bryan Nelson - Staff Front End Engineer",
  description:
    "Staff Front End Engineer with 14+ years of experience specializing in React, TypeScript, and modern web technologies. Based in France, working remotely.",
  openGraph: {
    title: "Bryan Nelson - Staff Front End Engineer",
    description:
      "Staff Front End Engineer with 14+ years of experience specializing in React, TypeScript, and modern web technologies. Based in France, working remotely.",
    url: "https://portfolio-phi-umber-56.vercel.app/",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
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

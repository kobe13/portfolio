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
  title: "Bryan Nelson - Staff Front End Engineer",
  description:
    "Staff Front End Engineer with 14+ years of experience specializing in React, TypeScript, and modern web technologies. Based in France, working remotely.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import Nav from "@/components/Nav";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const neco = localFont({
  src: "fonts/Neco-Variable.woff2",
  display: "swap",
  variable: "--font-neco",
});

export const metadata: Metadata = {
  title: "Elliott's Pizza",
  description: "Welcome to Elliott's Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/e4cef1fffb.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} ${neco.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const codystar = localFont({
  variable: "--font-codystar",
  display: "swap",
  src: [
    {
      path: "../public/Codystar-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Codystar-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "CyberOne - NFT Raffle Platform",
  description:
    "Win exclusive NFTs through our secure blockchain-powered raffle platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${codystar.variable} antialiased`}
        suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

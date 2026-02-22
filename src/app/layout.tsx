import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google"; // Luxury Serif
import "./globals.css";
import { cn } from "@/lib/utils";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Marketing & Automation for Local Service Businesses — 20–30 Appointments/Month",
  description: "We build done-for-you AI marketing and follow-up systems that generate 20–30 qualified appointments per month for local service businesses — without you lifting a finger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          playfair.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground"
        )}
      >
        <CustomCursor />
        <TubelightNavbar />
        <main className="mx-auto w-full max-w-[1200px] px-6 pt-24 md:pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}

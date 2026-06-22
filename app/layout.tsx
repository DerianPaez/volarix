import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://volarix.com"),

  title: {
    default: "Volarix | Vuelos, Visas y Trámites Internacionales",
    template: "%s | Volarix"
  },
  description: "Gestionamos vuelos, visas y trámites internacionales de forma rápida, segura y personalizada. Viaja sin complicaciones con Volarix.",
  keywords: ["agencia de viajes", "visas", "vuelos", "trámites internacionales", "viajes internacionales", "asesoría migratoria", "Volarix"],
  authors: { 
    name: "Volarix",
  },
  robots: {
    index: true, 
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://volarix.com",
    siteName: "Volarix",
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth selection:bg-teal-500 selection:text-white`}
    >
      <body className="min-h-screen flex flex-col bg-white text-brand-navy overflow-x-hidden">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

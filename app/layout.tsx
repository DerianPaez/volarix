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
  title: "Volarix | Viajar debería sentirse sencillo",
  description: "Planifica, reserva y gestiona tu próximo viaje de lujo sin complicaciones. La experiencia de viaje inteligente completa con soporte premium 24/7.",
  keywords: ["viajes", "turismo de lujo", "reservas de vuelos", "hoteles exclusivos", "itinerario digital"],
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

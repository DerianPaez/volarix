import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutCTA } from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Volarix",
  description: "Descubre la historia, misión, valores y el equipo de expertos detrás de Volarix. Redefinimos los viajes de lujo haciéndolos más sencillos, personalizados y memorables.",
  keywords: ["sobre volarix", "equipo volarix", "viajes de lujo a medida", "historia volarix", "turismo exclusivo"],
};

const SobreNosotrosPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </>
  );
};

export default SobreNosotrosPage;

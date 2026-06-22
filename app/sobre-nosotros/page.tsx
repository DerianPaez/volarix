import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutCTA } from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia de Volarix, nuestra misión, visión y compromiso para ayudarte a gestionar vuelos, visas y trámites internacionales de forma rápida y segura.",
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

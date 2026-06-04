import React from "react";
import { FaBolt, FaGlobe, FaTicket } from "react-icons/fa6";

export type HeroFeature = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "amber" | "teal" | "rose";
};

export const heroFeatures: HeroFeature[] = [
  {
    label: "Asesor en menos de 60 segundos",
    icon: FaBolt,
    color: "amber",
  },
  {
    label: "Tu vuelo confirmado en menos de 5 minutos",
    icon: FaGlobe,
    color: "teal",
  },
  {
    label: "Cita para visa en menos de 1 semana",
    icon: FaTicket,
    color: "rose",
  },
];

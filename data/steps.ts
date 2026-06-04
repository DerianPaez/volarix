import React from "react";
import { FaCompass, FaPaperPlane } from "react-icons/fa6";
import { FiSliders, FiShield } from "react-icons/fi";

export type StepItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const steps: StepItem[] = [
  {
    id: "01",
    title: "Escríbenos",
    description:
      "Un asesor responde en menos de 60 segundos para conocer tu caso y ayudarte a comenzar de inmediato.",
    icon: FaCompass,
  },
  {
    id: "02",
    title: "Evaluamos",
    description:
      "Revisamos tus necesidades y te presentamos las mejores alternativas según tu destino, presupuesto o trámite requerido.",
    icon: FiSliders,
  },
  {
    id: "03",
    title: "Gestionamos",
    description:
      "Procesamos tu reserva, cita o documentación de forma rápida y segura para acelerar todo el proceso.",
    icon: FiShield,
  },
  {
    id: "04",
    title: "Disfruta viaje",
    description:
      "Recibe la confirmación y toda la información necesaria para disfrutar de tu viaje con total confianza.",
    icon: FaPaperPlane,
  },
];

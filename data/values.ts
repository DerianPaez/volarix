import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { HiOutlineRocketLaunch, HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi2";

export interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    icon: BsLightningChargeFill,
    title: "Rapidez",
    description: "Entendemos que el tiempo es valioso. Por eso trabajamos para ofrecer respuestas rápidas, procesos ágiles y resultados en el menor tiempo posible.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Cercanía",
    description: "Cada cliente recibe atención personalizada y acompañamiento durante todo el proceso, desde la primera consulta hasta el viaje.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Confianza",
    description: "Actuamos con transparencia y responsabilidad para que nuestros clientes tomen decisiones con total seguridad.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Innovación",
    description: "Utilizamos herramientas digitales y procesos optimizados para simplificar la gestión de vuelos, visas y trámites internacionales.",
  },
];

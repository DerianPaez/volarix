import React from "react";
import { BsPassport } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa6";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdOutlineTravelExplore } from "react-icons/md";

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const services: ServiceItem[] = [
  {
    title: "Vuelos nacionales e internacionales",
    description:
      "Encuentra y reserva tu vuelo en cuestión de minutos. Comparamos opciones, gestionamos la reserva y te enviamos toda la información necesaria para que continúes tu viaje sin demoras.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=400&h=300",
    icon: FaPlaneDeparture,
  },
  {
    title: "Asesoramiento de visas",
    description:
      "Gestionamos citas para visas, formularios y documentación requerida de forma ágil. Nuestro objetivo es ayudarte a iniciar tu proceso lo antes posible y sin complicaciones.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=400&h=300",
    icon: BsPassport,
  },
  {
    title: "Paquetes turísticos",
    description:
      "Organizamos vuelos, hospedaje y servicios adicionales en una sola gestión. Recibe una propuesta completa adaptada a tu presupuesto y lista para reservar.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400&h=300",
    icon: MdOutlineTravelExplore,
  },
  {
    title: "Asistencia migratoria",
    description:
      "Recibe orientación durante cada etapa de tu trámite migratorio. Nuestro equipo te acompaña con información clara y seguimiento para evitar errores y retrasos.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400&h=300",
    icon: HiOutlineShieldCheck,
  },
];

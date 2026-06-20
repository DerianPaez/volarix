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
    image: "/flights.jpg",
    icon: FaPlaneDeparture,
  },
  {
    title: "Asesoramiento de visas",
    description:
      "Gestionamos citas para visas, formularios y documentación requerida de forma ágil. Nuestro objetivo es ayudarte a iniciar tu proceso lo antes posible y sin complicaciones.",
    image: "/visa.png",
    icon: BsPassport,
  },
  {
    title: "Paquetes turísticos",
    description:
      "Organizamos vuelos, hospedaje y servicios adicionales en una sola gestión. Recibe una propuesta completa adaptada a tu presupuesto y lista para reservar.",
    image: "/tour_packages.jpg",
    icon: MdOutlineTravelExplore,
  },
  {
    title: "Asistencia migratoria",
    description:
      "Recibe orientación durante cada etapa de tu trámite migratorio. Nuestro equipo te acompaña con información clara y seguimiento para evitar errores y retrasos.",
    image: "/immigration_assistance.png",
    icon: HiOutlineShieldCheck,
  },
];

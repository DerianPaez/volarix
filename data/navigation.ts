import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export type NavLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Pasos", href: "/#pasos" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto", href: "/#contacto" },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Compañía",
    links: [
      { label: "Sobre Nosotros", href: "/sobre-nosotros" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Pasos", href: "/#pasos" },
      { label: "Testimonios", href: "/#testimonios" },
    ],
  },
  {
    title: "Destinos",
    links: [
      { label: "Europa", href: "" },
      { label: "Asia y Pacífico", href: "" },
      { label: "América Latina", href: "" },
      { label: "África y Oriente", href: "" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Hablar con un asesor", href: "#" },
      { label: "Contacto", href: "/#contacto" },
      { label: "Términos de Servicio", href: "/terminos-de-servicio" },
      { label: "Privacidad", href: "/politica-de-privacidad" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    label: "Tiktok",
    icon: FaTiktok,
    href: "#",
  },
];

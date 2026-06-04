import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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
      { label: "Carreras", href: "#" },
      { label: "Blog de Viajes", href: "#" },
      { label: "Prensa", href: "#" },
    ],
  },
  {
    title: "Destinos",
    links: [
      { label: "Europa", href: "#" },
      { label: "Asia y Pacífico", href: "#" },
      { label: "América Latina", href: "#" },
      { label: "África y Oriente", href: "#" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Centro de Ayuda", href: "#" },
      { label: "Contacto", href: "#contacto" },
      { label: "Términos de Servicio", href: "#" },
      { label: "Privacidad", href: "#" },
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
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
];

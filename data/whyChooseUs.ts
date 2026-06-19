export type WhyChooseUsItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: "glass" | "solid" | "teal" | "orange" | "pink";
  image: string;
  imageAlt: string;
  reverse: boolean;
  whatsappMessage?: string;
};

export const whyChooseUsList: WhyChooseUsItem[] = [
  {
    id: "01",
    tag: "GESTIÓN INTEGRAL",
    title: "Nosotros gestionamos todo por ti",
    description:
      "Desde la reserva de vuelos hasta la gestión de citas para visas, nos encargamos de cada paso para que ahorres tiempo. Centralizamos todo el proceso con atención personalizada y seguimiento constante.",
    badge: "Soporte 24/7",
    badgeVariant: "teal",
    image: "/orchid_flower.png",
    imageAlt: "Flor de orquídea exótica",
    reverse: false,
    whatsappMessage: "Hola Volarix! Me gustaría obtener más información sobre su servicio de gestión integral de viajes y visados.",
  },
  {
    id: "02",
    tag: "DIGITALIZACIÓN TOTAL",
    title: "Menos trámites, más viajes",
    description:
      "Olvídate de procesos complicados y largas búsquedas. Simplificamos cada gestión con herramientas digitales y atención rápida para que dediques menos tiempo a trámites y más a viajar.",
    badge: "100% Digital",
    badgeVariant: "orange",
    image: "/sunset_ocean.png",
    imageAlt: "Puesta de sol en el océano",
    reverse: true,
    whatsappMessage: "Hola Volarix! Me interesa saber cómo funciona su proceso de digitalización total para simplificar mis trámites de viaje.",
  },
  {
    id: "03",
    tag: "RESPALDO PREMIUM",
    title: "Viaja con total tranquilidad",
    description:
      "Te acompañamos antes, durante y después de tu viaje para que siempre tengas el respaldo que necesitas. Recibe información clara, atención personalizada y seguimiento continuo en cada etapa del proceso.",
    badge: "Garantizado",
    badgeVariant: "pink",
    image: "/waterfall_rocks.png",
    imageAlt: "Cascada majestuosa en la naturaleza",
    reverse: false,
    whatsappMessage: "Hola Volarix! Quiero conocer más detalles sobre el soporte premium y el respaldo de viaje 24/7 que ofrecen.",
  },
];

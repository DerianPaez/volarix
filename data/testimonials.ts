export type ReviewItem = {
  stars: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export const reviews: ReviewItem[] = [
  {
    stars: 5,
    quote:
      "El viaje a Suiza fue increíble. Volarix se encargó de cada detalle, desde el hotel de montaña hasta los pases de tren privado. Volveremos a reservar sin dudarlo.",
    name: "Carlos Mendoza",
    role: "Viajero Frecuente",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    stars: 5,
    quote:
      "Excelente servicio al cliente. Tuvimos un retraso en Japón y el soporte global de Volarix resolvió todo en menos de 15 minutos, reprogramando vuelos y traslados.",
    name: "Sofía Pérez",
    role: "Fotógrafa de Viajes",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    stars: 5,
    quote:
      "La comodidad de tener todo el itinerario de viaje digitalizado es insuperable. Sin papeleos físicos, sin llamadas estresantes, solo puro disfrute. Altamente recomendados.",
    name: "Luis Guerrero",
    role: "Empresario",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
  },
];

export const stats: StatItem[] = [
  { value: "2,500+", label: "Viajeros Atendidos" },
  { value: "150+", label: "Trámites procesados cada mes" },
  { value: "99%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Atención disponible" },
];

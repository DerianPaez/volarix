import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FiAward, FiHeart, FiCpu, FiGlobe } from "react-icons/fi";

type ValueCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => (
  <li className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200/60 group list-none">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light-teal text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 mb-6">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="font-outfit text-lg font-bold text-brand-navy tracking-tight mb-3">
      {title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
  </li>
);

export const AboutValues: React.FC = () => {
  const values = [
    {
      icon: FiAward,
      title: "Excelencia Sin Concesiones",
      description: "Cuidamos cada detalle milimétrico de tu itinerario para garantizar un viaje fluido y sin sobresaltos.",
    },
    {
      icon: FiHeart,
      title: "Enfoque Personalizado",
      description: "No creemos en plantillas genéricas. Cada itinerario se diseña de cero escuchando tus gustos e intereses.",
    },
    {
      icon: FiCpu,
      title: "Simplicidad Tecnológica",
      description: "Fusionamos la última tecnología digital con el toque humano para que tengas el control de tu viaje en un clic.",
    },
    {
      icon: FiGlobe,
      title: "Sostenibilidad Activa",
      description: "Apoyamos el desarrollo de las comunidades locales y promovemos prácticas que respetan nuestro planeta.",
    },
  ];

  return (
    <section id="valores" className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="VALORES CORE"
          titleNormal="Los pilares de"
          titleGradient="nuestro servicio"
          theme="light"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 p-0 m-0">
          {values.map((val, idx) => (
            <ValueCard
              key={idx}
              icon={val.icon}
              title={val.title}
              description={val.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

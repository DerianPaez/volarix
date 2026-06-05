import React from "react";
import { FiTarget, FiEye } from "react-icons/fi";
import { AboutCard } from "@/components/ui/AboutCard";

export const AboutMission: React.FC = () => {
  return (
    <section id="mision-vision" className="py-20 md:py-28 bg-slate-50/50 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <AboutCard
            title="Nuestra Misión"
            description="Facilitar el acceso a vuelos, visas y trámites internacionales mediante procesos rápidos, atención personalizada y soluciones digitales que ahorren tiempo a nuestros clientes."
            icon={FiTarget}
          />

          <AboutCard
            title="Nuestra Visión"
            description="Convertirnos en la agencia de referencia en Latinoamérica para la gestión rápida de viajes y trámites migratorios, combinando tecnología, eficiencia y atención humana."
            icon={FiEye}
          />
        </div>
      </div>
    </section>
  );
};


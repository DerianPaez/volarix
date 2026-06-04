import React from "react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-[#08121E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="Nuestros servicios"
          titleNormal="Una experiencia"
          titleGradient="de viaje completa"
          theme="dark"
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 list-none p-0 m-0">
          {services.map((item, index) => (
            <li key={index}>
              <ServiceCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

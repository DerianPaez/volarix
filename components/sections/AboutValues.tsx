import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AboutCard } from "@/components/ui/AboutCard";
import { values } from "@/data/values";

export const AboutValues: React.FC = () => {
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
            <AboutCard
              key={idx}
              as="li"
              size="sm"
              icon={val.icon}
              title={val.title}
              description={val.description}
              className="list-none"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};



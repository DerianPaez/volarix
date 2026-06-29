import React from "react";
import { Button } from "@/components/ui/Button";
import { steps } from "@/data/steps";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "@/components/ui/StepCard";
import { CONTACT_INFO } from "@/data/contact";

export const Steps: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encodeURIComponent(
    "Hola Volarix! Me gustaría comenzar mi viaje y recibir asesoramiento."
  )}`;

  return (
    <section id="pasos" className="py-20 md:py-28 lg:py-36 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="Cómo funciona"
          titleNormal="Pasos simples"
          titleGradient="hacia tu viaje"
          theme="light"
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 list-none p-0 m-0">
          {steps.map((item, idx) => (
            <li key={item.id}>
              <StepCard item={item} showConnectingLine={idx < 3} />
            </li>
          ))}
        </ol>

        <div className="flex justify-center mt-14 md:mt-20">
          <Button 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary" 
            showArrow
          >
            Comenzar viaje
          </Button>
        </div>

      </div>
    </section>
  );
};

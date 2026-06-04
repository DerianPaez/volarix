import React from "react";
import { Button } from "@/components/ui/Button";

export const AboutCTA: React.FC = () => {
  return (
    <section id="sobre-nosotros-cta" className="relative py-24 bg-[#08121E] overflow-hidden text-center border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[120px]" />
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="font-outfit text-3xl font-extrabold text-white tracking-tight sm:text-4.5xl leading-tight">
          ¿Listo para diseñar tu
          <br />
          <span className="bg-linear-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
            próxima experiencia vip?
          </span>
        </h2>
        <p className="max-w-lg mx-auto text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
          Ponte en contacto con nuestro equipo de consultores expertos hoy mismo. Diseñamos viajes memorables completamente a tu medida.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/#contacto" variant="secondary" showArrow className="shadow-lg shadow-brand-teal/10">
            Planificar mi viaje
          </Button>
        </div>
      </div>
    </section>
  );
};

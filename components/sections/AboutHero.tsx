import React from "react";

export const AboutHero: React.FC = () => {
  return (
    <section id="sobre-nosotros-hero" className="relative py-24 md:py-32 bg-brand-navy overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-brand-teal/10 blur-[130px]" />
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
          CONOCE NUESTRO ORIGEN
        </span>
        <h1 className="font-outfit text-4xl font-extrabold text-white tracking-tight sm:text-6xl mt-3 leading-tight max-w-4xl mx-auto">
          Redefiniendo el viaje de
          <br />
          <span className="bg-linear-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
            lujo y confort
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mt-6 leading-relaxed">
          En Volarix creemos que viajar no es solo llegar a un destino, sino disfrutar de cada instante del camino con absoluta tranquilidad y sofisticación.
        </p>
      </div>
    </section>
  );
};

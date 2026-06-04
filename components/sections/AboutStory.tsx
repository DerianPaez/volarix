import React from "react";
import Image from "next/image";

export const AboutStory: React.FC = () => {
  return (
    <section id="historia" className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[320px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-100 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Colaboración equipo Volarix"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 550px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/20 to-transparent" />
            </div>
            {/* Decorative absolute element */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block h-28 w-28 rounded-2xl bg-brand-light-teal border border-brand-teal/20 -z-10 animate-float" />
          </div>

          {/* Right Column: Text context */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              NUESTRA HISTORIA
            </span>
            <h2 className="font-outfit text-3xl font-extrabold text-brand-navy tracking-tight sm:text-4.5xl mt-3 leading-tight">
              Cómo nació el
              <br />
              <span className="bg-linear-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
                concepto Volarix
              </span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-6 leading-relaxed">
              Volarix nació en 2022 de la frustración compartida de un grupo de viajeros frecuentes. Nos dimos cuenta de que planificar viajes exclusivos seguía estando lleno de fricciones: múltiples correos electrónicos, falta de flexibilidad, tarifas ocultas y soporte impersonal ante imprevistos en ruta.
            </p>
            <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed">
              Decidimos crear una solución combinando el conocimiento de curadores expertos en destinos de lujo con una plataforma tecnológica integrada. El resultado es un servicio que automatiza la logística pesada, asegurando itinerarios únicos, tarifas exclusivas y conserjería personalizada 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

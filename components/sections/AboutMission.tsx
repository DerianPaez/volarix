import React from "react";
import { FiTarget, FiEye } from "react-icons/fi";

export const AboutMission: React.FC = () => {
  return (
    <section id="mision-vision" className="py-20 md:py-28 bg-slate-50/50 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="sr-only">Nuestra Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-white border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light-teal text-brand-teal mb-6">
              <FiTarget className="h-5.5 w-5.5" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-brand-navy tracking-tight mb-4">
              Nuestra Misión
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Empoderar a viajeros exigentes ofreciendo soluciones integrales de planificación y soporte que transformen el estrés logístico en un viaje placentero y completamente adaptado a su estilo de vida.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-white border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light-teal text-brand-teal mb-6">
              <FiEye className="h-5.5 w-5.5" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-brand-navy tracking-tight mb-4">
              Nuestra Visión
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Ser la plataforma de referencia global en el turismo vip, reconocida por nuestra excelencia operativa, el toque humano personalizado y nuestra capacidad para crear experiencias inolvidables con cero complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

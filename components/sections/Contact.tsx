"use client";

import React from "react";
import { FiPhone, FiMail, FiClock, FiCheck } from "react-icons/fi";
import { ContactCard } from "@/components/ui/ContactCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { highlights } from "@/data/cta";
import { CONTACT_INFO } from "@/data/contact";

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-[#08121E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-fade-in">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                Empieza hoy
              </span>
            </div>

            <h2 className="font-outfit text-4xl font-extrabold text-white tracking-tight sm:text-5.5xl leading-tight">
              Tu próximo destino
              <br />
              <span className="bg-linear-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
                comienza aquí
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mt-6 leading-relaxed max-w-xl">
              Habla ahora con uno de nuestros asesores y recibe atención inmediata para vuelos, visas y trámites migratorios. Gestionamos cada paso de forma rápida, segura y online para ayudarte a ahorrar tiempo y obtener resultados en el menor tiempo posible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-max">
              <ContactCard
                icon={FiPhone}
                label="Llámanos"
                value={CONTACT_INFO.phone.display}
              />
              <ContactCard
                icon={FiMail}
                label="Escríbenos"
                value={CONTACT_INFO.email}
              />
              <ContactCard
                icon={FiClock}
                label="Soporte VIP"
                value="Conserjería y asistencia activa 24/7"
                className="sm:col-span-2"
              />
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/5 max-w-5xl mx-auto w-full">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
              <FiCheck className="h-4.5 w-4.5 text-brand-cyan shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

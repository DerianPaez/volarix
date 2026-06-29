import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoAirplane } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { FeatureIndicator } from "@/components/ui/FeatureIndicator";
import { heroFeatures } from "@/data/hero";
import { CONTACT_INFO } from "@/data/contact";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="grid gap-4">
            <div className="mx-auto lg:mx-0 w-fit inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50/30 px-4 py-3 text-slate-500 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Atención inmediata por whatsapp
              </span>
              <HiSparkles className="h-3.5 w-3.5 text-brand-teal ml-0.5" />
            </div>

            <div className="mx-auto lg:mx-0">
              <h1 className="text-center lg:text-left font-outfit text-6xl sm:text-7.5xl lg:text-[90px] font-extrabold tracking-tight text-brand-navy leading-[1.05]">
                Viajar
                <br />
                sin
                <br />
                <span className="relative inline-block pb-1 bg-linear-to-r from-teal-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  perder
                  <span className="absolute bottom-1.5 left-0 h-1.5 w-[85%] rounded bg-teal-200/50 -z-10" />
                </span>
                <br />
                tiempo
              </h1>
            </div>

            <p className="text-center lg:text-left lg:max-w-xl text-lg lg:text-2xl leading-relaxed text-slate-500">
              Gestionamos vuelos, visas y trámites <span className="font-bold text-brand-navy">de forma rápida</span>, segura y 100% online.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 justify-center lg:justify-start">
              <Link
                href={CONTACT_INFO.phone.whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-brand-navy rounded-2xl hover:bg-brand-navy/95 transition-all duration-300 shadow-md shadow-brand-navy/15 cursor-pointer active:scale-95 group relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-1000 after:ease-in-out after:-skew-x-12"
              >
                <FaWhatsapp className="h-5.5 w-5.5 text-emerald-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10" />
                <span className="relative z-10">Hablar con un asesor</span>
              </Link>

              <Link
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-brand-navy border border-slate-200 bg-white rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 cursor-pointer active:scale-95 group relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-linear-to-r after:from-transparent after:via-slate-100 after:to-transparent after:transition-transform after:duration-1000 after:ease-in-out after:-skew-x-12"
              >
                <FiPhone className="h-4.5 w-4.5 text-slate-500 transform transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                <span className="relative z-10">Cotizar ahora</span>
              </Link>
            </div>

            <div className="pt-8 grid gap-4 grid-cols-1 md:grid-cols-3 mx-auto lg:mx-0">
              {heroFeatures.map((item) => (
                <FeatureIndicator
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  color={item.color}
                />
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end lg:pr-8">
            <div className="relative w-full max-w-[390px] sm:max-w-[430px] aspect-9/11">
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-xl bg-slate-100 border-4 border-white animate-float">
                <Image
                  src="/hero_plane_wing.png"
                  alt="Vista del ala del avión en el aire"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 390px, 430px"
                />
              </div>

              <div className="absolute top-[28%] -left-6 sm:-left-12 z-20">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-brand-navy/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 text-white shadow-md shadow-teal-500/10">
                    <IoAirplane className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Destinos
                    </p>
                    <p className="text-lg font-black text-brand-navy leading-none mt-1.5">
                      150+
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20%] -right-4 sm:-right-8 z-20">
                <div className="flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-brand-navy/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/10">
                    <HiSparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-brand-navy leading-none">
                      Soporte Premium
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1.5 leading-none">
                      24/7 Disponible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full hidden lg:flex justify-center pt-4">
        <div className="flex h-11 w-6.5 items-start justify-center rounded-full border-2 border-slate-300 p-1.5 hover:border-brand-teal transition-colors">
          <span className="h-2 w-1 rounded-full bg-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

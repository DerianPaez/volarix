"use client";

import React, { useActionState, useEffect, useRef } from "react";
import {  FiChevronDown, FiLoader } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa6";
import { FormState } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction, isPending] = useActionState<FormState, FormData>(submitContactForm, { success: false, message: "" })

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-955/40 p-8 md:p-10 backdrop-blur-md shadow-2xl">
        <form ref={formRef} action={formAction} className="space-y-6">
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
          />

          <div>
            <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm"
            />

            {state.errors?.name?.[0] && (
              <p className="mt-2 text-xs text-rose-500">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="ejemplo@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm"
            />

            {state.errors?.email?.[0] && (
              <p className="mt-2 text-xs text-rose-500">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="0945875698"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm"
            />

            {state.errors?.phone?.[0] && (
              <p className="mt-2 text-xs text-rose-500">
                {state.errors.phone[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="destination" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Destino de Interés
            </label>
            <div className="relative">
              <select
                id="destination"
                name="destination"
                className="w-full bg-slate-950 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-slate-600">Selecciona un destino</option>
                <option value="europa">Europa</option>
                <option value="asia">Asia y Pacífico</option>
                <option value="latam">América Latina</option>
                <option value="africa">África y Oriente Medio</option>
                <option value="otro">Otro / A Medida</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none h-4 w-4" />
            </div>

            {state.errors?.destination?.[0] && (
              <p className="mt-2 text-xs text-rose-500">
                {state.errors.destination[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Detalles del viaje (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos más sobre las fechas, duración o preferencias de tu viaje exclusivo..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm min-h-[100px] resize-none"
            />

            {state.errors?.message?.[0] && (
              <p className="mt-2 text-xs text-rose-500">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {state.success && (
            <div
              key={state.message}
              className="animate-fade-out-5s rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3"
            >
              <p className="text-sm text-green-400">
                {state.message}
              </p>
            </div>
          )}

          {state.message && !state.success && (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3">
              <p className="text-sm text-rose-400">
                {state.message}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 bg-linear-to-r from-brand-teal to-brand-cyan text-[#08121E] font-bold rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-teal/20 text-sm disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-1000 after:ease-in-out after:-skew-x-12"
          >
            {isPending ? (
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiLoader className="animate-spin h-4 w-4" />
                <span>Procesando solicitud...</span>
              </span>
            ) : (
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaPaperPlane className="h-3.5 w-3.5 -rotate-12 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6" />
                <span>Solicitar Información</span>
              </span>
            )}
          </button>
        </form>
    </div>
  );
};

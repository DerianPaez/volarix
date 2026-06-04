"use client";

import React, { useState } from "react";
import { FiCheck, FiChevronDown, FiLoader } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa6";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.destination) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    // Simulate premium API experience
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        destination: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-955/40 p-8 md:p-10 backdrop-blur-md shadow-2xl">
      {status === "success" ? (
        <div className="flex flex-col items-center text-center py-10 animate-fade-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-6 shadow-lg shadow-brand-cyan/5">
            <FiCheck className="h-8 w-8" />
          </div>
          <h3 className="font-outfit text-2xl font-bold text-white mb-3">
            ¡Solicitud Recibida!
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Tu asesor de viajes experto se pondrá en contacto contigo en las próximas 24 horas para comenzar a diseñar tu itinerario de lujo a medida.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-xs font-semibold text-brand-cyan hover:text-white transition-colors duration-200 underline underline-offset-4 cursor-pointer"
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej. Derian Páez"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm"
            />
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Ej. derian@volarix.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label htmlFor="destination" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Destino de Interés
            </label>
            <div className="relative">
              <select
                id="destination"
                name="destination"
                required
                value={formData.destination}
                onChange={handleChange}
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
          </div>

          <div>
            <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Detalles del viaje (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos más sobre las fechas, duración o preferencias de tu viaje exclusivo..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all duration-300 text-sm min-h-[100px] resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-rose-500 text-xs font-semibold">
              Por favor, rellena todos los campos requeridos.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-linear-to-r from-brand-teal to-brand-cyan text-[#08121E] font-bold rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-teal/20 text-sm disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-1000 after:ease-in-out after:-skew-x-12"
          >
            {status === "loading" ? (
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
      )}
    </div>
  );
};

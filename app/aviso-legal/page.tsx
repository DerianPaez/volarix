import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiUser, 
  FiCompass, 
  FiEye, 
  FiFolder, 
  FiAlertTriangle, 
  FiExternalLink, 
  FiBookOpen, 
  FiMail, 
  FiPhone 
} from "react-icons/fi";
import { LegalCard } from "@/components/ui/LegalCard";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Consulta el Aviso Legal de Volarix. Conoce la información sobre la titularidad del sitio web, condiciones de uso, propiedad intelectual, limitación de responsabilidad y legislación aplicable.",
};

const AvisoLegalPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 md:pb-28">
      <section className="relative py-20 md:py-28 bg-brand-navy overflow-hidden text-center">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Información de Titularidad
          </span>
          <h1 className="font-outfit text-4xl font-extrabold text-white tracking-tight sm:text-6xl mt-3 leading-tight max-w-4xl mx-auto">
            Aviso Legal
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mt-6 leading-relaxed">
            En cumplimiento con las normativas internacionales de transparencia, presentamos la información legal relativa a este sitio web.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 -mt-10 relative z-10">
        <div className="grid gap-8">
          
          <LegalCard 
            icon={<FiUser className="h-6 w-6" />} 
            title="1. Titular del sitio web"
            description="El titular y responsable de este sitio web es Volarix."
          >
            <ul className="space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li><strong>Dirección:</strong> Quito, Ecuador</li>
              <li><strong>Correo electrónico:</strong> viajes@volarix.com</li>
              <li><strong>Teléfono / WhatsApp:</strong> +34 900 123 456</li>
            </ul>
          </LegalCard>

          <LegalCard 
            icon={<FiCompass className="h-6 w-6" />} 
            title="2. Actividad principal"
            description="Volarix se dedica a la gestión de reservas de vuelos, asesoramiento personalizado para trámites de visas internacionales y la organización de paquetes turísticos exclusivos. Todos nuestros servicios se coordinan y formalizan de manera directa con un asesor asignado a través de canales externos (WhatsApp, correo electrónico o llamadas telefónicas)."
          />

          <LegalCard 
            icon={<FiEye className="h-6 w-6" />} 
            title="3. Condiciones de uso del sitio web"
            description="El acceso, navegación y uso de este sitio web implica la aceptación expresa de las siguientes condiciones:"
          >
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>El contenido de esta web tiene un carácter exclusivamente informativo y promocional.</li>
              <li>No se realizan transacciones comerciales ni cobros directos a través del sitio web.</li>
              <li>Los precios y tarifas mostrados son referenciales y pueden variar según disponibilidad de proveedores o cambios en tasas externas.</li>
              <li>Nos reservamos el derecho de modificar, actualizar o eliminar el contenido de esta web en cualquier momento y sin previo aviso.</li>
            </ul>
          </LegalCard>

          <LegalCard 
            icon={<FiFolder className="h-6 w-6" />} 
            title="4. Propiedad intelectual"
            description="Todos los textos, imágenes, logotipos, elementos gráficos, código fuente y diseños de este sitio web son propiedad exclusiva de Volarix o se utilizan bajo las licencias correspondientes. Queda estrictamente prohibida la reproducción, distribución, transformación o comunicación pública, total o parcial, de cualquiera de estos contenidos sin la autorización expresa y por escrito de sus titulares."
          />

          <LegalCard 
            icon={<FiAlertTriangle className="h-6 w-6" />} 
            title="5. Exclusión de responsabilidad"
            description="Volarix no se hace responsable por:"
          >
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Eventuales errores u omisiones en la información publicada (si bien trabajamos continuamente para mantener los datos precisos y actualizados).</li>
              <li>Problemas técnicos, indisponibilidad temporal del sitio o fallos de conexión ajenos a nuestro control.</li>
              <li>Decisiones de viaje o acciones tomadas por los usuarios basadas únicamente en el contenido de esta web (siempre recomendamos y requerimos una asesoría personalizada y confirmación final con uno de nuestros asesores).</li>
            </ul>
          </LegalCard>

          <LegalCard 
            icon={<FiExternalLink className="h-6 w-6" />} 
            title="6. Enlaces externos"
            description="Este sitio web puede contener enlaces de hipervínculo a páginas web de terceros (como aerolíneas oficiales, portales de embajadas o ministerios de relaciones exteriores). Volarix no ejerce ningún tipo de control ni supervisión sobre dichos sitios y no asume responsabilidad alguna por el contenido, políticas de privacidad o términos de uso de estas plataformas externas."
          />

          <LegalCard 
            icon={<FiBookOpen className="h-6 w-6" />} 
            title="7. Legislación aplicable y jurisdicción"
            description="Este Aviso Legal se rige e interpreta en su totalidad de conformidad con las leyes vigentes de la República del Ecuador. Cualquier controversia, conflicto o reclamación relacionada con el uso de este sitio web o la interpretación de sus condiciones será sometida exclusivamente a la jurisdicción y competencia de los tribunales de la ciudad de Quito, Ecuador."
          />

          <div className="bg-linear-to-r from-brand-navy to-brand-dark-blue rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brand-teal/10 blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="font-outfit text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                8. Contacto e información legal
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Para cualquier consulta, reclamo, aclaración o asunto relacionado con el aviso legal de este sitio web, por favor comunícate a través de nuestros canales:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <Link 
                  href="mailto:viajes@volarix.com" 
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/20 text-brand-cyan">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Correo Electrónico</span>
                    <span className="text-sm md:text-base font-semibold text-white">viajes@volarix.com</span>
                  </div>
                </Link>

                <Link 
                  href="https://wa.me/34900123456" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/20 text-brand-teal">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp Directo</span>
                    <span className="text-sm md:text-base font-semibold text-white">+34 900 123 456</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AvisoLegalPage;

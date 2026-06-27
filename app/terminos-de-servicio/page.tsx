import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiGlobe, 
  FiDollarSign, 
  FiCreditCard, 
  FiRefreshCw, 
  FiUserCheck, 
  FiShield, 
  FiMail, 
  FiPhone 
} from "react-icons/fi";
import { LegalCard } from "@/components/ui/LegalCard";

export const metadata: Metadata = {
  title: "Términos de Servicio | Volarix",
  description: "Conoce las condiciones, cotizaciones, políticas de cancelación y responsabilidades bajo las cuales prestamos nuestros servicios en Volarix.",
  keywords: ["terminos de servicio", "condiciones de servicio", "cotizaciones volarix", "viajes exclusivos", "volarix"],
};

const TerminosServicioPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 md:pb-28">
      <section className="relative py-20 md:py-28 bg-brand-navy overflow-hidden text-center">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Condiciones de Uso
          </span>
          <h1 className="font-outfit text-4xl font-extrabold text-white tracking-tight sm:text-6xl mt-3 leading-tight max-w-4xl mx-auto">
            Términos de Servicio
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mt-6 leading-relaxed">
            Te invitamos a leer detenidamente los términos y condiciones que rigen los servicios de asesoramiento y gestión de viajes ofrecidos por Volarix.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 -mt-10 relative z-10">
        <div className="grid gap-8">
          
          <LegalCard 
            icon={<FiGlobe className="h-6 w-6" />} 
            title="1. Nuestro servicio"
            description={
              <>
                Volarix ofrece la asesoría y gestión de vuelos, visas y trámites internacionales. <strong className="text-brand-navy">Importante:</strong> no somos una aerolínea ni una entidad migratoria oficial. Actuamos exclusivamente como intermediarios profesionales y asesores expertos para facilitarte y simplificar tu experiencia de viaje.
              </>
            }
          />

          <LegalCard 
            icon={<FiDollarSign className="h-6 w-6" />} 
            title="2. Cotizaciones y Tarifas"
            description="Todos los precios y tarifas mostrados en las cotizaciones iniciales son referenciales y de carácter informativo. Están sujetos a cambios por fluctuaciones de las aerolíneas, impuestos estatales, tasas aeroportuarias o aranceles de las entidades migratorias oficiales. Una vez confirmada y congelada la cotización por parte de los proveedores, te informaremos el monto final exacto a pagar antes de proceder al cobro."
          />

          <LegalCard 
            icon={<FiCreditCard className="h-6 w-6" />} 
            title="3. Modalidad de Pagos"
            description="Por tu seguridad, no realizamos cobros ni solicitamos datos financieros directamente en este sitio web. Todas las transacciones económicas y pagos se coordinan de forma privada y directa con tu asesor personal a través de WhatsApp, transferencia bancaria u otro método acordado previamente de mutuo acuerdo."
          />

          <LegalCard 
            icon={<FiRefreshCw className="h-6 w-6" />} 
            title="4. Cancelaciones y reembolsos"
            description="Las solicitudes de cancelación y reembolso están sujetas a las siguientes condiciones:"
          >
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Las políticas de cancelación, cambio de fecha y reembolso dependen en su totalidad de cada aerolínea, hotel o entidad emisora de la visa, rigiéndose por sus propios términos y condiciones comerciales.</li>
              <li><strong>Honorarios de gestión:</strong> Los cobros realizados por concepto de asesoría y gestión por parte de Volarix no son reembolsables bajo ninguna circunstancia una vez que se ha iniciado formalmente el trámite de reserva o solicitud de visado.</li>
              <li>Te informaremos detalladamente de las condiciones y penalizaciones aplicables antes de proceder a la confirmación y pago de tu viaje.</li>
            </ul>
          </LegalCard>

          <LegalCard 
            icon={<FiUserCheck className="h-6 w-6" />} 
            title="5. Responsabilidad del cliente"
            description="Como cliente y viajero, eres el único responsable de:"
          >
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Proporcionar información correcta, verídica y actualizada (nombres exactos según documento, fechas de viaje y pasaporte con vigencia mínima requerida).</li>
              <li>Asegurarte de cumplir y contar con todos los requisitos sanitarios y migratorios del país destino o tránsito (visas de turismo/estudios, vacunas obligatorias, formularios de salud, etc.).</li>
            </ul>
          </LegalCard>

          <LegalCard 
            icon={<FiShield className="h-6 w-6" />} 
            title="6. Límites de nuestra responsabilidad"
            description="En Volarix gestionamos cada proceso con el máximo profesionalismo y diligencia. Sin embargo, no asumimos responsabilidad alguna por:"
          >
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Rechazos, demoras o negativas en la aprobación de visados por parte de los consulados o autoridades migratorias oficiales.</li>
              <li>Cancelaciones, sobreventas (*overbooking*) o retrasos de vuelos por causas climatológicas, huelgas o problemas operativos de la aerolínea.</li>
              <li>Retrasos o problemas derivados de la entrega tardía o incorrecta de documentación por parte del cliente.</li>
            </ul>
          </LegalCard>

          <div className="bg-linear-to-r from-brand-navy to-brand-dark-blue rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brand-teal/10 blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="font-outfit text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                7. Dudas, Reclamos y Soporte
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Si tienes alguna consulta sobre nuestros términos de servicio, deseas iniciar un reclamo o requieres soporte personalizado de un asesor, puedes ponerte en contacto directamente por nuestros canales:
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

export default TerminosServicioPage;

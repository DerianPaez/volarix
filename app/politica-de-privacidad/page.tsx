import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiShield, 
  FiDatabase, 
  FiInbox, 
  FiCreditCard, 
  FiShare2, 
  FiCheckSquare, 
  FiLock, 
  FiMail, 
  FiPhone 
} from "react-icons/fi";
import { LegalCard } from "@/components/ui/LegalCard";

export const metadata: Metadata = {
  title: "Política de Privacidad | Volarix",
  description: "Conoce cómo recopilamos, usamos y protegemos tus datos personales en Volarix. Transparencia, seguridad y total confidencialidad en tus viajes.",
  keywords: ["politica de privacidad", "privacidad volarix", "proteccion de datos", "viajes de lujo", "seguridad volarix"],
};

const PoliticaPrivacidadPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 md:pb-28">
      <section className="relative py-20 md:py-28 bg-[#0A192F] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-teal/15 blur-[120px]" />
        <div className="absolute top-12 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-brand-cyan/10 blur-[100px]" />
        
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Transparencia y Seguridad
          </span>
          <h1 className="font-outfit text-4xl font-extrabold text-white tracking-tight sm:text-6xl mt-3 leading-tight max-w-4xl mx-auto">
            Política de Privacidad
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mt-6 leading-relaxed">
            En Volarix nos tomamos muy en serio la protección de tu información personal. Aquí te explicamos de forma clara y sencilla cómo manejamos tus datos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 -mt-10 relative z-10">
        <div className="grid gap-8">
          
          <LegalCard icon={<FiShield className="h-6 w-6" />} title="1. Responsable del Tratamiento">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Volarix es responsable del tratamiento de tus datos personales, garantizando que su recopilación y uso se realicen bajo los más estrictos estándares de confidencialidad y conforme a la normativa vigente.
            </p>
          </LegalCard>

          <LegalCard icon={<FiDatabase className="h-6 w-6" />} title="2. Qué datos recopilamos y por qué">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Recopilamos únicamente la información necesaria para brindarte la mejor experiencia de viaje personalizada.
            </p>
            
            <div className="overflow-x-auto border border-slate-100 rounded-2xl mt-4">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 font-bold text-brand-navy w-1/3">Datos</th>
                    <th className="p-4 font-bold text-brand-navy w-2/3">¿Por qué?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Nombre, correo y teléfono</td>
                    <td className="p-4 text-slate-600">Para contactarte, enviarte cotizaciones personalizadas y darte un seguimiento constante.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Datos de pasaporte o identificación</td>
                    <td className="p-4 text-slate-600">Para gestionar tus reservas de vuelos y trámites de visas (únicamente cuando nos los proporcionas voluntariamente).</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Información del viaje</td>
                    <td className="p-4 text-slate-600">Destinos de interés, preferencias y fechas del viaje para cotizar y organizar tu experiencia a medida.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-brand-teal/5 border border-brand-teal/10 p-4 mt-2">
              <p className="text-slate-700 text-sm md:text-base font-medium">
                <strong className="text-brand-teal">Importante:</strong> No recopilamos automáticamente datos de navegación (IP, cookies, ubicación) porque nuestro sitio web no utiliza sistemas de rastreo, analítica ni publicidad comportamental.
              </p>
            </div>
          </LegalCard>

          <LegalCard icon={<FiInbox className="h-6 w-6" />} title="3. Cómo recopilamos tus datos">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Obtenemos tu información exclusivamente a través de interacciones directas e intencionadas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Cuando nos escribes directamente por WhatsApp, a través de nuestro correo electrónico o al enviar el formulario de contacto de la web.</li>
              <li>Cuando nos proporcionas detalles necesarios para realizar una cotización de viaje o tramitar un visado.</li>
            </ul>
          </LegalCard>

          <LegalCard icon={<FiCreditCard className="h-6 w-6" />} title="4. No usamos pasarelas de pago en el sitio web">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Para tu máxima seguridad, no procesamos cobros de forma automatizada en esta plataforma. Todas las transacciones económicas y métodos de pago se coordinan directamente de forma privada con tu asesor exclusivo. No deberás ingresar datos de tarjetas de crédito o débito en nuestra página web.
            </p>
          </LegalCard>

          <LegalCard icon={<FiShare2 className="h-6 w-6" />} title="5. Con quién compartimos tus datos">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Compartimos tu información únicamente cuando es estrictamente necesario para operar tu viaje y gestionar tus reservas con los proveedores finales:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li><strong>Aerolíneas:</strong> Para emitir y confirmar tus reservas de vuelos.</li>
              <li><strong>Entidades migratorias o consulados:</strong> Para llevar a cabo el trámite y gestión de tu visado.</li>
            </ul>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-2">
              <strong className="text-brand-navy">Garantía comercial:</strong> Bajo ninguna circunstancia vendemos, alquilamos ni compartimos tus datos con terceros con fines comerciales o de publicidad.
            </p>
          </LegalCard>

          <LegalCard icon={<FiCheckSquare className="h-6 w-6" />} title="6. Tus derechos">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Como titular de tus datos personales, puedes solicitar en cualquier momento:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-base md:text-lg leading-relaxed">
              <li>Saber con precisión qué datos personales almacenamos sobre ti.</li>
              <li>Corregir, actualizar o rectificar tu información.</li>
              <li>Eliminar de manera definitiva tus datos personales de todos nuestros registros de clientes.</li>
            </ul>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-2">
              Para ejercer cualquiera de estos derechos, solo debes ponerte en contacto con nosotros escribiéndonos por correo o WhatsApp.
            </p>
          </LegalCard>

          <LegalCard icon={<FiLock className="h-6 w-6" />} title="7. Seguridad de la información">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Protegemos tu información personal implementando medidas organizativas y de acceso limitado (los datos solo están al alcance del personal directamente encargado de la gestión de tu viaje y se transmiten por canales privados y seguros). Debido a que no recopilamos ni almacenamos datos de pago o información sumamente sensible en nuestro servidor web, el riesgo de filtraciones es mínimo.
            </p>
          </LegalCard>

          <div className="bg-linear-to-r from-brand-navy to-brand-dark-blue rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brand-teal/10 blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="font-outfit text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                8. Contacto e inquietudes
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Si deseas ejercer tus derechos de acceso, rectificación o eliminación de datos, o si tienes alguna inquietud sobre nuestra política de privacidad, no dudes en comunicarte:
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

export default PoliticaPrivacidadPage;

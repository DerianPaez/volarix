import React from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";
import { footerLinks, socialLinks } from "@/data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 md:pb-16">
          <div className="md:col-span-4 flex flex-col space-y-5">
            <Link href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white shadow-md shadow-brand-navy/10 group-hover:scale-105 transition-transform duration-300">
                <FaPaperPlane className="h-3.5 w-3.5 text-brand-cyan -rotate-12" />
              </div>
              <span className="font-outfit text-2xl font-bold tracking-tight text-brand-navy">
                volarix
              </span>
            </Link>
            <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-xs">
              Tu aliado para vuelos, visas y trámites internacionales. Atención rápida, asesoría personalizada y gestión eficiente en un solo lugar.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-100 hover:bg-brand-navy hover:text-white text-slate-500 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <h4 className="font-outfit text-xs lg:text-lg font-bold uppercase tracking-widest text-brand-navy">
                  {col.title}
                </h4>
                <ul className="flex flex-col space-y-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-slate-500 hover:text-brand-teal text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} Volarix. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-600 transition-colors text-sm">Aviso Legal</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

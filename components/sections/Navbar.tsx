"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-10">
        <Link href="" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white shadow-md shadow-brand-navy/10 group-hover:scale-105 transition-transform duration-300">
            <FaPaperPlane className="h-3.5 w-3.5 text-brand-cyan -rotate-12" />
            <div className="absolute -inset-0.5 rounded-full border border-brand-teal/30 group-hover:border-brand-teal group-hover:scale-110 transition-all duration-300" />
          </div>
          <span className="font-outfit text-2xl font-bold tracking-tight text-brand-navy">
            volarix
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-slate-600 hover:text-brand-teal text-sm transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-teal hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contacto" variant="primary" className="px-6 py-2.5 text-sm">
            Reservar
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-50 border border-slate-100 md:hidden text-brand-navy cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4 animate-fade-in absolute top-20 left-0 w-full shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-semibold text-slate-700 hover:text-brand-teal text-base py-1.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#contacto"
            variant="primary"
            className="w-full py-3 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Reservar
          </Button>
        </div>
      )}
    </header>
  );
};

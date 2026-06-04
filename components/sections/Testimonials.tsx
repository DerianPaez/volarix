"use client";

import React from "react";
import { reviews, stats } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="Testimonios"
          titleNormal="Cientos de viajeros"
          titleGradient="ahorran tiempo con nosotros"
          theme="light"
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-32 list-none p-0 m-0">
          {reviews.map((item, idx) => (
            <li key={idx}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>

        <div className="rounded-[32px] bg-slate-50/50 border border-slate-100 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-y-0 divide-x-0 sm:divide-x sm:divide-slate-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-2 first:pl-0 sm:px-4 md:px-6"
              >
                <span className="font-outfit text-4.5xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
                  <span className="bg-linear-to-r from-brand-navy via-brand-navy to-brand-teal/80 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

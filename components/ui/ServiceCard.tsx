import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";

type ServiceCardProps = {
  item: ServiceItem;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[400px] group transition-all duration-500 hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-teal/5">
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
          sizes="(max-w-768px) 100vw, 550px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#08121E]/90 via-[#08121E]/30 to-transparent" />
      </div>

      <div className="relative z-10 flex justify-end">
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#08121E] border border-white/10 text-white transition-all duration-350 shadow-md group-hover:rotate-6 group-hover:scale-105 group-hover:border-white/20">
          <item.icon className="h-6 w-6" />
        </div>
      </div>

      <div className="relative z-10 mt-auto flex flex-col items-start text-left">
        <h3 className="font-outfit text-2xl font-bold text-white tracking-tight md:text-4xl mt-4">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mt-2 group-hover:text-slate-300 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </article>
  );
};

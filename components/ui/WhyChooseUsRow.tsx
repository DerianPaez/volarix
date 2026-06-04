import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Badge } from "@/components/ui/Badge";
import { WhyChooseUsItem } from "@/data/whyChooseUs";

type WhyChooseUsRowProps = {
  item: WhyChooseUsItem;
};

export const WhyChooseUsRow: React.FC<WhyChooseUsRowProps> = ({ item }) => {
  return (
    <li
      className={`flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 ${
        item.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className="relative w-full flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-[420px] group">
          <div className={`absolute inset-0 bg-brand-cyan w-full h-full rounded-[32px] group-hover:rotate-0 transition-all duration-300 ease-out ${item.reverse ? "-rotate-4" : "rotate-4"}`} />

          <div className="relative mx-auto lg:mx-0 w-full max-w-[420px] aspect-4/5 rounded-[32px] overflow-hidden">        
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 420px"
            />

            <div className="absolute top-6 right-6">
              <Badge variant={item.badgeVariant} className="px-4 py-2 text-xs font-bold shadow-lg shadow-black/5 animate-pulse-subtle">
                {item.badge}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <span className="font-outfit text-7xl md:text-8xl font-black tracking-tighter text-slate-200 select-none leading-none">
          {item.id}
        </span>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
            {item.tag}
          </span>
          <h3 className="font-outfit text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy sm:text-3.5xl leading-tight">
            {item.title}
          </h3>
        </div>

        <p className="w-full text-slate-600 text-base md:text-lg">
          {item.description}
        </p>

        <div>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors group cursor-pointer"
          >
            <span>Saber más</span>
            <FaArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </li>
  );
};

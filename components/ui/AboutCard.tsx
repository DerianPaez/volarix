import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md";
  className?: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  icon: Icon,
  size = "md",
  className = "",
}) => {
  const isSmall = size === "sm";

  return (
    <article
      className={`flex flex-col items-start text-left rounded-3xl bg-white border border-slate-100/80 shadow-sm hover:shadow-md hover:border-slate-200/60 hover:-translate-y-1 transition-all duration-300 group ${
        isSmall ? "p-8" : "p-8 md:p-10"
      } ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light-teal text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:rotate-6 transition-all duration-300 mb-6">
        <Icon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3
        className={`font-outfit font-bold text-brand-navy tracking-tight ${
          isSmall ? "text-lg mb-3" : "text-xl mb-4"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-slate-500 leading-relaxed ${
          isSmall ? "text-sm" : "text-sm md:text-base"
        }`}
      >
        {description}
      </p>
    </article>
  );
};



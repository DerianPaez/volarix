import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "teal" | "orange" | "pink";
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "glass",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-semibold tracking-wide shadow-sm transition-all duration-300";

  const variants = {
    glass:
      "bg-white/80 backdrop-blur-md border border-white/50 text-brand-navy shadow-md shadow-brand-navy/5",
    solid:
      "bg-slate-100 text-slate-800 border border-slate-200/50",
    teal:
      "bg-emerald-50 text-emerald-700 border border-emerald-100",
    orange:
      "bg-amber-50 text-amber-700 border border-amber-100",
    pink:
      "bg-rose-50 text-rose-700 border border-rose-100",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

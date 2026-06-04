import React from "react";

type ContactCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  className?: string;
};

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  label,
  value,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors duration-300 ${className}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-cyan shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-white text-wrap">{value}</p>
      </div>
    </div>
  );
};

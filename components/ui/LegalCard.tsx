import React from "react";

type LegalCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export const LegalCard: React.FC<LegalCardProps> = ({ icon, title, description, children }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-100/70 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="space-y-3 w-full">
          <h2 className="font-outfit text-xl md:text-2xl font-bold text-brand-navy tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

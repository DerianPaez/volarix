import React from "react";

type SectionHeaderProps = {
  badge: string;
  titleNormal: string;
  titleGradient: string;
  theme?: "light" | "dark";
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  titleNormal,
  titleGradient,
  theme = "light",
  className = "mb-16 md:mb-24",
}) => {
  const isLight = theme === "light";

  const badgeColorClass = isLight ? "text-brand-teal" : "text-brand-cyan";
  const titleColorClass = isLight ? "text-brand-navy" : "text-white";

  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <span className={`text-xs font-bold uppercase tracking-widest ${badgeColorClass}`}>
        {badge}
      </span>
      <h2 className={`font-outfit text-3xl font-extrabold ${titleColorClass} tracking-tight sm:text-5xl mt-3 leading-tight`}>
        {titleNormal}
        <br />
        <span className="bg-linear-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
          {titleGradient}
        </span>
      </h2>
    </div>
  );
};

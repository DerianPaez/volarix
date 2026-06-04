import React from "react";

type FeatureIndicatorProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "amber" | "teal" | "rose";
};

export const FeatureIndicator: React.FC<FeatureIndicatorProps> = ({
  label,
  icon: Icon,
  color,
}) => {
  const colorClasses = {
    amber: "bg-amber-500 shadow-amber-500/10",
    teal: "bg-teal-500 shadow-teal-500/10",
    rose: "bg-rose-500 shadow-rose-500/10",
  };

  return (
    <div className="flex items-center gap-2.5">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${colorClasses[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-xs font-bold text-slate-500">
        {label}
      </span>
    </div>
  );
};

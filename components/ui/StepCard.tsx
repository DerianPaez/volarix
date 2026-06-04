import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { StepItem } from "@/data/steps";

type StepCardProps = {
  item: StepItem;
  showConnectingLine?: boolean;
};

export const StepCard: React.FC<StepCardProps> = ({ item, showConnectingLine = false }) => {
  return (
    <div className="relative rounded-3xl border border-slate-100 bg-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand-cyan hover:-translate-y-1 transition-all duration-300 group">
      <div>
        <div className="flex justify-between items-center mb-8">
          <span className="font-outfit text-6xl font-extrabold text-slate-200 group-hover:text-slate-300 transition-colors duration-300">
            {item.id}
          </span>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light-teal text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:rotate-6 transition-all duration-300">
            <item.icon className={item.id === "04" ? "h-5 w-5 -rotate-12" : "h-5.5 w-5.5"} />
          </div>
        </div>

        <h3 className="font-outfit text-lg lg:text-3xl font-bold text-brand-navy tracking-tight mb-3">
          {item.title}
        </h3>

        <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
          {item.description}
        </p>
      </div>

      {showConnectingLine && (
        <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-slate-300">
          <FiChevronRight className="h-5 w-5" />
        </div>
      )}
    </div>
  );
};

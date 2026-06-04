import React from "react";
import { whyChooseUsList } from "@/data/whyChooseUs";
import { WhyChooseUsRow } from "@/components/ui/WhyChooseUsRow";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="grid gap-20 md:gap-28 mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          badge="por qué elegirnos"
          titleNormal="Diseñado para"
          titleGradient="quienes valoran su tiempo"
          theme="light"
          className="mx-auto"
        />

        <ul className="grid gap-24 md:gap-36 list-none p-0 m-0">
          {whyChooseUsList.map((item) => (
            <WhyChooseUsRow key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

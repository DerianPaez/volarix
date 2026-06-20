import React from "react";
import { FiUser } from "react-icons/fi";
import { StarRating } from "@/components/ui/StarRating";
import { ReviewItem } from "@/data/testimonials";

type TestimonialCardProps = {
  item: ReviewItem;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <figure className="rounded-3xl border border-slate-100 bg-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand-cyan hover:-translate-y-1 transition-all duration-300 relative group h-full">
      <div>
        <div className="absolute top-6 right-8 text-brand-teal group-hover:rotate-6 transition duration-300">
          <svg
            className="h-7 w-7 transform -scale-x-100"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <StarRating rating={item.stars} className="mb-6" />

        <blockquote className="text-slate-600 italic text-sm lg:text-lg leading-relaxed mb-8 relative">
          <p>{item.quote}</p>
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-4.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light-teal text-brand-teal border border-brand-teal/10 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
          <FiUser className="h-5 w-5" />
        </div>
        <div>
          <span className="font-outfit text-sm lg:text-xl font-bold text-brand-navy block">
            {item.name}
          </span>
          <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
            {item.role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

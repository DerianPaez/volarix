import React from "react";
import { FaStar } from "react-icons/fa6";

type StarRatingProps = {
  rating?: number;
  maxStars?: number;
  className?: string;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxStars = 5,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-1 text-amber-400 ${className}`}
      aria-label={`Calificación: ${rating} de ${maxStars} estrellas`}
    >
      <span className="sr-only">{`Calificación: ${rating} de ${maxStars} estrellas`}</span>
      {Array.from({ length: maxStars }).map((_, i) => (
        <FaStar
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

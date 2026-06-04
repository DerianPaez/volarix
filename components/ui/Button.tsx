import React from "react";
import Link from "next/link";
import { FaPlay, FaArrowRight } from "react-icons/fa6";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "text";
  showArrow?: boolean;
  showPlay?: boolean;
  href?: string;
  children: React.ReactNode;
};

export type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  showArrow = false,
  showPlay = false,
  href,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 active:scale-[0.98] text-base cursor-pointer group";

  const variants = {
    primary:
      "bg-brand-navy text-white hover:bg-brand-navy/95 shadow-md shadow-brand-navy/10 px-8 py-3.5",
    secondary:
      "bg-brand-teal text-white hover:bg-brand-teal/95 shadow-md shadow-brand-teal/10 px-8 py-3.5",
    outline:
      "border border-slate-200 bg-white text-brand-navy hover:bg-slate-50 hover:border-slate-300 px-8 py-3.5",
    text: "text-brand-navy hover:text-brand-teal px-4 py-2",
  };

  const isText = variant === "text";
  const shimmerClasses = !isText
    ? "relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-1000 after:ease-in-out after:-skew-x-12"
    : "";

  const combinedClassName = `${baseClasses} ${variants[variant]} ${shimmerClasses} ${className}`;

  const content = (
    <>
      {showPlay && (
        <span className="mr-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
          <FaPlay className="h-2.5 w-2.5 translate-x-[0.5px]" />
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <FaArrowRight className="ml-2 h-3.5 w-3.5 transform transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-0.5 group-hover:scale-110 relative z-10" />
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isInternal) {
      return (
        <Link href={href} className={combinedClassName} {...anchorProps}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {content}
    </button>
  );
};

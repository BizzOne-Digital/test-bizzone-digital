import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";
const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-dark",
  outline: "border-2 border-brand/70 bg-white text-brand hover:bg-lavender",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return <a className={buttonClass(variant, className)} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return <button type={type} className={buttonClass(variant, className)} {...props} />;
}

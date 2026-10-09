import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";

type Common = { id: string; label: string; error?: string };

const fieldClass =
  "mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors duration-150 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function Wrapper({ id, label, error, children }: Common & { children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function InputField({ id, label, error, ...props }: Common & ComponentPropsWithoutRef<"input">) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass} ${error ? "border-red-500" : "border-line"}`}
        {...props}
      />
    </Wrapper>
  );
}

export function TextareaField({ id, label, error, ...props }: Common & ComponentPropsWithRef<"textarea">) {
  return (
    <Wrapper id={id} label={label} error={error}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass} min-h-28 resize-y ${error ? "border-red-500" : "border-line"}`}
        {...props}
      />
    </Wrapper>
  );
}

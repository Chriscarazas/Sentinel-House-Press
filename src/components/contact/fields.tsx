import type { ReactNode } from "react";

const inputClass =
  "mt-2 w-full border border-press-black/25 bg-paper px-4 py-3 font-sans text-press-black placeholder:text-pencil focus-visible:border-oxblood";

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-mono text-xs uppercase tracking-[0.15em] text-press-black/70">
        {label}
        {required && <span className="text-oxblood"> *</span>}
      </label>
      {children}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={4} className={inputClass} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={inputClass} />;
}

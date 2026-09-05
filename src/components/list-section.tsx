import { useId, type ReactNode } from "react";

const variantStyles = {
  primary: "text-primary",
  underlined:
    "inline-block text-foreground underline decoration-primary decoration-2 underline-offset-8",
} as const;

interface ListSectionProps {
  title: string;
  variant?: keyof typeof variantStyles;
  children: ReactNode;
}

export function ListSection({ title, variant = "primary", children }: ListSectionProps) {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <h2
        id={headingId}
        className={`text-xl font-semibold tracking-tight md:text-2xl ${variantStyles[variant]}`}
      >
        {title}
      </h2>
      <div className="mt-6 divide-y divide-border">{children}</div>
    </section>
  );
}

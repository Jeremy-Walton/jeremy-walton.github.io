import { useIcon } from "@/lib/icon-context";
import { cn } from "@/lib/utils";

interface ListRowProps {
  href: string;
  title: string;
  leading?: string;
  source?: string;
  description?: string;
}

export function ListRow({ href, title, leading, source, description }: ListRowProps) {
  const ArrowIcon = useIcon("arrow-up-right");
  const indent = leading ? "pl-[1.875rem]" : "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block py-7 first:pt-0 focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {leading && <span className="font-mono text-xs text-primary">{leading}</span>}
          <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary">
            {title}
          </h3>
          {source && <span className="font-mono text-sm text-muted-foreground">— {source}</span>}
        </div>
        <ArrowIcon
          size={16}
          strokeWidth={1.5}
          className="mt-1 shrink-0 text-muted-foreground transition-[transform,color] duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        />
      </div>
      {description && (
        <p className={cn("mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground", indent)}>
          {description}
        </p>
      )}
    </a>
  );
}

import { useIcon } from "@/lib/icon-context";
import type { ReadingItem } from "@/data/types";
import reading from "@/data/reading.json";

function ReadingRow({ item }: { item: ReadingItem }) {
  const ArrowIcon = useIcon("arrow-up-right");
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-border py-6 first:pt-0 last:border-none focus-visible:outline-none"
    >
      <div className="flex flex-wrap items-baseline gap-x-2">
        <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary">
          {item.title}
        </h3>
        <ArrowIcon
          size={14}
          strokeWidth={1.5}
          className="text-muted-foreground transition-[transform,color] duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        />
        <span className="text-sm text-muted-foreground">— {item.source}</span>
      </div>
      {item.note && (
        <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
          {item.note}
        </p>
      )}
    </a>
  );
}

export function ReadingList() {
  return (
    <section aria-labelledby="reading-heading" className="mt-24 mb-24 md:mt-32 md:mb-32">
      <h2 id="reading-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
        Reading List
      </h2>
      <div className="mt-6">
        {(reading as ReadingItem[]).map((item) => (
          <ReadingRow key={item.url} item={item} />
        ))}
      </div>
    </section>
  );
}

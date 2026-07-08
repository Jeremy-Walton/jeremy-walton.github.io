import { Fragment } from "react";
import { useIcon } from "@/lib/icon-context";
import { Badge, type BadgeColor } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Category, ReadingItem } from "@/data/types";
import reading from "@/data/reading.json";

const categoryColor: Record<Category, BadgeColor> = {
  UI: "blue",
  AI: "green",
  CSS: "purple",
  Rails: "red",
};

function ReadingRow({ item }: { item: ReadingItem }) {
  const ArrowIcon = useIcon("arrow-up-right");

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block py-6 first:pt-0 focus-visible:outline-none"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <Badge color={categoryColor[item.category]}>{item.category}</Badge>
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
    <section aria-labelledby="reading-heading" className="mt-[clamp(6rem,5rem+3vw,8rem)] mb-[clamp(6rem,5rem+3vw,8rem)]">
      <h2 id="reading-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
        Reading List
      </h2>
      <div className="mt-6">
        {(reading as ReadingItem[]).map((item, index) => (
          <Fragment key={item.url}>
            {index > 0 && <Separator />}
            <ReadingRow item={item} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

import { useIcon } from "@/lib/icon-context";
import type { ReadingItem } from "@/data/types";
import reading from "@/data/reading.json";

// Full-palette category tags: three distinct hues, each with real semantic
// meaning (kind of source), not decoration.
type Category = "Article" | "Repo" | "Guide";

const categoryStyle: Record<Category, string> = {
  Article: "bg-[oklch(0.93_0.045_248)] text-[oklch(0.34_0.09_248)] dark:bg-[oklch(0.30_0.06_248)] dark:text-[oklch(0.82_0.08_248)]",
  Guide: "bg-[oklch(0.92_0.05_70)] text-[oklch(0.38_0.10_60)] dark:bg-[oklch(0.30_0.06_65)] dark:text-[oklch(0.82_0.09_70)]",
  Repo: "bg-[oklch(0.93_0.045_340)] text-[oklch(0.40_0.10_340)] dark:bg-[oklch(0.30_0.06_340)] dark:text-[oklch(0.82_0.08_340)]",
};

function categoryFor(source: string): Category {
  if (source.toLowerCase().includes("github")) return "Repo";
  if (source === "Code with Jason") return "Guide";
  return "Article";
}

function Tag({ category }: { category: Category }) {
  return (
    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide ${categoryStyle[category]}`}>
      {category}
    </span>
  );
}

function ReadingRow({ item }: { item: ReadingItem }) {
  const ArrowIcon = useIcon("arrow-up-right");
  const category = categoryFor(item.source);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-border py-6 first:pt-0 last:border-none focus-visible:outline-none"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <Tag category={category} />
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
        {(reading as ReadingItem[]).map((item) => (
          <ReadingRow key={item.url} item={item} />
        ))}
      </div>
    </section>
  );
}

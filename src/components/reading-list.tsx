import { Fragment } from "react";
import { ListRow } from "@/components/list-row";
import { Separator } from "@/components/ui/separator";
import type { ReadingItem } from "@/data/types";
import reading from "@/data/reading.json";

export function ReadingList() {
  return (
    <section aria-labelledby="reading-heading">
      <h2
        id="reading-heading"
        className="inline-block text-xl font-semibold tracking-tight text-foreground underline decoration-primary decoration-2 underline-offset-8 md:text-2xl"
      >
        What I&apos;m reading
      </h2>
      <div className="mt-6">
        {(reading as ReadingItem[]).map((item, index) => (
          <Fragment key={item.url}>
            {index > 0 && <Separator />}
            <ListRow href={item.url} title={item.title} source={item.source} description={item.note} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

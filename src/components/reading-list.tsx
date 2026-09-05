import { ListRow } from "@/components/list-row";
import { ListSection } from "@/components/list-section";
import type { ReadingItem } from "@/data/types";
import reading from "@/data/reading.json";

export function ReadingList() {
  return (
    <ListSection title="What I'm reading" variant="underlined">
      {(reading as ReadingItem[]).map((item) => (
        <ListRow
          key={item.url}
          href={item.url}
          title={item.title}
          source={item.source}
          description={item.note}
        />
      ))}
    </ListSection>
  );
}

export interface Project {
  title: string;
  description: string;
  url: string;
}

export type Category = "UI" | "AI" | "CSS" | "Rails";

export interface ReadingItem {
  title: string;
  url: string;
  source: string;
  note?: string;
  category: Category;
}

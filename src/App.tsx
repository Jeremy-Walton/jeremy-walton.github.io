import { IntroSection } from "@/components/intro-section";
import { ListRow } from "./components/list-row";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { ListSection } from "./components/list-section";

import type { Project, ReadingItem } from "@/data/types";
import projects from "@/data/projects.json";
import reading from "@/data/reading.json";

function ProjectList() {
  return (
    <ListSection title="What I'm working on">
      {(projects as Project[]).map((project, index) => (
        <ListRow
          key={project.title}
          href={project.url}
          leading={String(index + 1).padStart(2, "0")}
          title={project.title}
          source={project.source}
          description={project.description}
        />
      ))}
    </ListSection>
  );
}

function ReadingList() {
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

function App() {
  return (
    <div className="min-h-dvh">
      <div className="fixed top-5 right-5 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main>
        <section className="bg-background">
          <div className="page-width py-[clamp(5rem,4rem+3vw,7rem)]">
            <IntroSection />
          </div>
        </section>
        <section className="bg-card">
          <div className="page-width grid gap-16 py-[clamp(4rem,3rem+3vw,6rem)] lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            <ProjectList />
            <ReadingList />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;

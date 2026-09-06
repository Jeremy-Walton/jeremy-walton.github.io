import { IntroSection } from "@/components/intro-section";
import { ListRow } from "@/components/list-row";
import { ListSection } from "@/components/list-section";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

import type { Project, ReadingItem } from "@/data/types";
import projects from "@/data/projects.json";
import reading from "@/data/reading.json";

import styles from "./App.module.css";

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
    <ListSection title="What I'm reading" underlined>
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
    <div className={styles["page"]}>
      <div className={styles["page__toggle"]}>
        <ThemeToggle />
      </div>
      <main>
        <section className={`${styles["band"]} ${styles["band--hero"]}`}>
          <div className={styles["band__inner"]}>
            <IntroSection />
          </div>
        </section>
        <section className={`${styles["band"]} ${styles["band--work"]}`}>
          <div className={styles["band__inner"]}>
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

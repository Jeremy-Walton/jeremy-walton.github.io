import { ListRow } from "@/components/list-row";
import { ListSection } from "@/components/list-section";
import type { Project } from "@/data/types";
import projects from "@/data/projects.json";

export function ProjectList() {
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

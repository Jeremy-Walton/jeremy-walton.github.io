import { Fragment } from "react";
import { ListRow } from "@/components/list-row";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data/types";
import projects from "@/data/projects.json";

export function ProjectList() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-xl font-semibold tracking-tight text-primary md:text-2xl"
      >
        What I&apos;m working on
      </h2>
      <div className="mt-6">
        {(projects as Project[]).map((project, index) => (
          <Fragment key={project.title}>
            {index > 0 && <Separator />}
            <ListRow
              href={project.url}
              leading={String(index + 1).padStart(2, "0")}
              title={project.title}
              source={project.source}
              description={project.description}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

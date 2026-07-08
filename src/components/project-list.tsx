import { useIcon } from "@/lib/icon-context";
import type { Project } from "@/data/types";
import projects from "@/data/projects.json";

function ProjectRow({ project }: { project: Project }) {
  const ArrowIcon = useIcon("arrow-up-right");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start justify-between gap-6 border-b border-border py-6 first:pt-0 last:border-none focus-visible:outline-none"
    >
      <div>
        <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary">
          {project.title}
        </h3>
        <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
      <ArrowIcon
        size={18}
        strokeWidth={1.5}
        className="mt-1 shrink-0 text-muted-foreground transition-[transform,color] duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
      />
    </a>
  );
}

export function ProjectList() {
  return (
    <section aria-labelledby="projects-heading" className="mt-24 md:mt-32">
      <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
        Projects
      </h2>
      <div className="mt-6">
        {(projects as Project[]).map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

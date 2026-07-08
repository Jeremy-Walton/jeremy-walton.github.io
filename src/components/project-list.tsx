import { useIcon } from "@/lib/icon-context";
import type { Project } from "@/data/types";
import projects from "@/data/projects.json";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ArrowIcon = useIcon("arrow-up-right");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start gap-4 border-b border-border py-6 first:pt-0 last:border-none focus-visible:outline-none"
    >
      <span className="mt-0.5 font-mono text-xs text-primary">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary">
            {project.title}
          </h3>
          <ArrowIcon
            size={18}
            strokeWidth={1.5}
            className="mt-1 shrink-0 text-muted-foreground transition-[transform,color] duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          />
        </div>
        <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
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
        {(projects as Project[]).map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

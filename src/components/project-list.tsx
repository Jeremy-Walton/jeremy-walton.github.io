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
      className="group flex flex-col gap-1.5 border-b border-border py-7 first:pt-0 last:border-none focus-visible:outline-none md:flex-row md:items-center md:gap-6"
    >
      <div className="flex items-start justify-between gap-4 md:contents">
        <div className="flex items-start gap-4 md:contents">
          <span className="mt-0.5 font-mono text-xs text-primary md:mt-0 md:w-6 md:shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary md:w-44 md:shrink-0">
            {project.title}
          </h3>
        </div>
        <ArrowIcon
          size={18}
          strokeWidth={1.5}
          className="mt-1 shrink-0 text-muted-foreground transition-[transform,color] duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary md:order-last md:mt-0"
        />
      </div>
      <p className="max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground md:max-w-none md:flex-1">
        {project.description}
      </p>
    </a>
  );
}

export function ProjectList() {
  return (
    <section aria-labelledby="projects-heading" className="mt-[clamp(6rem,5rem+3vw,8rem)]">
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

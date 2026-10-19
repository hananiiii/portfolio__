import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { textLinkClass } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

function NavLink({
  project,
  label,
  align,
}: {
  project: Project;
  label: string;
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block border-t-2 border-line pt-4 transition-colors hover:border-accent ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      <span className="text-sm text-muted">{label}</span>
      <span className="mt-1 block font-serif text-xl text-navy-900 group-hover:text-accent">
        {project.title}
      </span>
    </Link>
  );
}

export function ProjectNav({
  previous,
  next,
}: {
  previous?: Project;
  next?: Project;
}) {
  return (
    <nav aria-label="Project navigation" className="mt-8 border-t border-line">
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            {previous ? <NavLink project={previous} label="Previous project" align="left" /> : null}
          </div>
          <div>
            {next ? <NavLink project={next} label="Next project" align="right" /> : null}
          </div>
        </div>
        <p className="mt-8 text-sm">
          <Link href="/projects" className={textLinkClass}>
            Back to all projects
          </Link>
        </p>
      </Container>
    </nav>
  );
}
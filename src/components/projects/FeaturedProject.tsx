import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

/** Wide presentation for the featured project. */
export function FeaturedProject({ project }: { project: Project }) {
  const { title, summary, tags, highlight, image, slug } = project;

  return (
    <article className="flex flex-col gap-8 border border-line p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-12">
      <div className="min-w-0 lg:flex-[11_1_0%]">
        <h3 className="text-3xl sm:text-4xl">{title}</h3>
        {highlight ? (
          <p className="mt-2 text-sm font-medium text-accent">{highlight}</p>
        ) : null}
        <p className="mt-4 text-lg leading-relaxed">{summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics and technologies">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ButtonLink href={`/projects/${slug}`}>
            View project<span className="sr-only"> for {title}</span>
          </ButtonLink>
        </div>
      </div>
      {image ? <ProjectImage image={image} className="lg:min-w-0 lg:flex-[10_1_0%]" /> : null}
    </article>
  );
}

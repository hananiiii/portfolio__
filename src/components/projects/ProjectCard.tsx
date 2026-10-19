import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { textLinkClass } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, tags, highlight, role, placeholder, slug, repoUrl } =
    project;

  return (
    <article
      className={`flex h-full flex-col border bg-white p-5 transition-colors ${
        placeholder
          ? "border-dashed border-line"
          : "border-line hover:border-navy-700"
      }`}
    >
      <h3 className="text-xl">{title}</h3>
      {placeholder ? (
        <p className="mt-1 text-sm font-medium text-accent">Placeholder entry</p>
      ) : null}
      <p className="mt-2 leading-relaxed text-ink">{summary}</p>

      {highlight || role ? (
        <p className="mt-3 text-sm font-medium text-navy-900">
          {[role, highlight].filter(Boolean).join(". ")}
        </p>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {tags.slice(0, 5).map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-5 text-sm">
        {placeholder ? (
          <span className="text-muted">Details to be added</span>
        ) : (
          <>
            <Link href={`/projects/${slug}`} className={textLinkClass}>
              View project<span className="sr-only"> for {title}</span>
            </Link>
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
              >
                Source code
                <span className="sr-only"> for {title} on GitHub (opens in a new tab)</span>
              </a>
            ) : null}
          </>
        )}
      </div>
    </article>
  );
}

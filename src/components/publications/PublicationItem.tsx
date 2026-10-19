import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { textLinkClass } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import {
  kindLabels,
  statusLabels,
  type Publication,
} from "@/data/publications";

/** One publication in a citation-like layout. */
export function PublicationItem({ publication: p }: { publication: Publication }) {
  const hasLinks = !!p.links && p.links.length > 0;

  return (
    <article className="py-8 first:pt-0 last:pb-0">
      <h3 className="text-xl leading-snug sm:text-2xl">{p.title}</h3>

      <p className="mt-2 text-ink">
        {p.authors.map((author, i) => (
          <span key={author}>
            {author === siteConfig.name ? (
              <span className="font-semibold text-navy-900">{author}</span>
            ) : (
              author
            )}
            {i < p.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      <dl className="mt-4 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1.5 text-sm">
        <dt className="text-muted">Type</dt>
        <dd>{kindLabels[p.kind]}</dd>

        <dt className="text-muted">Status</dt>
        <dd>
          <Tag>{statusLabels[p.status]}</Tag>
          {p.statusNote ? <span className="ml-2 text-muted">{p.statusNote}</span> : null}
        </dd>

        <dt className="text-muted">Year</dt>
        <dd>{p.year ?? <span className="text-muted">To be added</span>}</dd>

        {p.institution ? (
          <>
            <dt className="text-muted">Institution</dt>
            <dd>{p.institution}</dd>
          </>
        ) : null}

        {p.role ? (
          <>
            <dt className="text-muted">My role</dt>
            <dd>{p.role}</dd>
          </>
        ) : null}
      </dl>

      <p className="mt-4 max-w-2xl leading-relaxed">
        {p.abstract ?? <span className="text-muted">A survey of Edge AI techniques for assistive technologies, examining on-device intelligence, resource-efficient inference, and the challenges of deploying AI systems under computational and hardware constraints.</span>}
      </p>

      {p.keywords && p.keywords.length > 0 ? (
        <p className="mt-3 text-sm text-muted">Keywords: {p.keywords.join(", ")}</p>
      ) : null}

      {hasLinks || p.availability || p.relatedProject ? (
        <ul className="mt-4 space-y-1 text-sm">
          {hasLinks
            ? p.links!.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLinkClass}
                  >
                    {l.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))
            : p.availability
              ? [<li key="availability" className="text-muted">{p.availability}</li>]
              : null}
          {p.relatedProject ? (
            <li>
              <Link href={p.relatedProject.href} className={textLinkClass}>
                {p.relatedProject.label}
              </Link>
            </li>
          ) : null}
        </ul>
      ) : null}
    </article>
  );
}
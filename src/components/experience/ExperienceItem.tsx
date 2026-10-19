import Link from "next/link";
import { textLinkClass } from "@/components/ui/Button";
import type { ExperienceEntry } from "@/data/experience";

/** One role, achievement, or activity. Only the fields you provide are shown. */
export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const meta = [entry.organization, entry.location, entry.period].filter(Boolean).join(", ");

  return (
    <article className="py-6 first:pt-0 last:pb-0">
      <h3 className="text-xl">{entry.title}</h3>
      {meta ? <p className="mt-1 text-sm text-muted">{meta}</p> : null}

      {entry.summary ? (
        <p className="mt-3 max-w-2xl leading-relaxed">{entry.summary}</p>
      ) : null}

      {entry.details && entry.details.length > 0 ? (
        <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-6 marker:text-muted">
          {entry.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : null}

      {entry.items && entry.items.length > 0 ? (
        <ul className="mt-4 max-w-2xl space-y-4">
          {entry.items.map((item) => (
            <li key={item.title}>
              <p className="font-medium text-navy-900">{item.title}</p>
              {item.description ? (
                <p className="text-sm text-muted">{item.description}</p>
              ) : null}
              <p className="mt-0.5 text-sm">
                <Link href={item.href} className={textLinkClass}>
                  {item.linkLabel}
                  <span className="sr-only">: {item.title}</span>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.links && entry.links.length > 0 ? (
        <p className="mt-3 text-sm">
          {entry.links.map((l, i) => (
            <span key={l.href}>
              <Link href={l.href} className={textLinkClass}>
                {l.label}
              </Link>
              {i < entry.links!.length - 1 ? "  " : ""}
            </span>
          ))}
        </p>
      ) : null}

      {entry.placeholderNote ? (
        <p className="mt-4 max-w-2xl border border-dashed border-line px-4 py-3 text-sm text-muted">
          {entry.placeholderNote}
        </p>
      ) : null}
    </article>
  );
}
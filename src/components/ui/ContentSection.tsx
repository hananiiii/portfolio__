import type { ReactNode } from "react";

type ContentSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  /** Optional full-width content (e.g. a large figure) shown under the text. */
  after?: ReactNode;
};

/**
 * Text-led page section: heading in a left column, content on the right,
 * with a thin divider between consecutive sections. Place inside a Container.
 */
export function ContentSection({ id, title, children, after }: ContentSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="grid gap-6 border-t border-line py-12 first:border-t-0 sm:py-16 lg:grid-cols-[1fr_2fr] lg:gap-16"
    >
      <h2 id={id} className="text-xl sm:text-2xl lg:pt-1">
        {title}
      </h2>
      <div className="max-w-2xl">{children}</div>
      {after ? <div className="lg:col-span-2">{after}</div> : null}
    </section>
  );
}
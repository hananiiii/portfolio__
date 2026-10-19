import type { ReactNode } from "react";

/** A titled page section that works as a scroll target for the section nav. */
export function ExperienceSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-12 border-t border-line py-10 first:border-t-0 first:pt-0 lg:scroll-mt-0"
    >
      <h2 id={`${id}-title`} className="mb-6 text-2xl sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
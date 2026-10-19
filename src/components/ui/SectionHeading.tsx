import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: ReactNode;
  id?: string;
};

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-8 border-b border-line pb-4">
      <h2 id={id} className="text-2xl sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-muted">{description}</p>
      ) : null}
    </div>
  );
}

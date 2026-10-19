import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
};

/** Title block shared by every inner page. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <h1 className="max-w-3xl text-3xl sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
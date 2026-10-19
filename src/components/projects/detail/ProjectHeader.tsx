import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ProjectHeader({
  title,
  subtitle,
  highlight,
}: {
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-10 sm:py-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden />
          All projects
        </Link>
        <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl font-serif text-xl text-navy-700">{subtitle}</p>
        ) : null}
        {highlight ? (
          <p className="mt-4 text-sm font-medium text-accent">{highlight}</p>
        ) : null}
      </Container>
    </header>
  );
}
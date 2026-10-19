import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContentSection } from "@/components/ui/ContentSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { PublicationItem } from "@/components/publications/PublicationItem";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research manuscripts and theses by Hanane Lachoub on assistive technologies, computer vision, and efficient intelligent systems.",
};

export default function PublicationsPage() {
  const manuscripts = publications.filter((p) => p.kind === "manuscript");
  const theses = publications.filter((p) => p.kind !== "manuscript");

  return (
    <>
      <PageHeader
        title="Publications"
        description="Research manuscripts and academic work exploring assistive technologies, computer vision, and efficient intelligent systems."
      />

      <Container>
        {manuscripts.length > 0 ? (
          <ContentSection id="manuscripts" title="Research manuscripts">
            <p className="mb-8 text-muted">
              Work submitted for peer review. Each entry shows its current status.
            </p>
            <div className="divide-y divide-line">
              {manuscripts.map((p) => (
                <PublicationItem key={p.slug} publication={p} />
              ))}
            </div>
          </ContentSection>
        ) : null}

        {theses.length > 0 ? (
          <ContentSection id="theses" title="Theses">
            <p className="mb-8 text-muted">
              Degree theses at ESI-SBA. These are academic works assessed by the
              institution, not peer-reviewed publications.
            </p>
            <div className="divide-y divide-line">
              {theses.map((p) => (
                <PublicationItem key={p.slug} publication={p} />
              ))}
            </div>
          </ContentSection>
        ) : null}
      </Container>
    </>
  );
}
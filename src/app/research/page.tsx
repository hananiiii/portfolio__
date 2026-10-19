import type { Metadata } from "next";
import Link from "next/link";
import { textLinkClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentSection } from "@/components/ui/ContentSection";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  futureDirections,
  practiceItems,
  researchInterests,
  researchQuestions,
} from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests of Hanane Lachoub: multimodal AI, sensor fusion, edge AI, IoT and embedded systems, adaptive inference, and edge–cloud collaboration.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Efficient Intelligence for the Real World"
        description="Exploring how intelligent systems can combine multimodal information, adapt to context, and operate efficiently under real-world computational and hardware constraints."
      />

      <Container>
        <ContentSection id="vision" title="Research vision">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Building an intelligent system involves more than maximizing model
              accuracy. Real deployments also have to account for latency,
              memory, energy consumption, hardware limitations, sensing
              pipelines, uncertainty, privacy, and how computation is
              distributed between edge devices and cloud systems.
            </p>
            <p>
              This is my developing research vision. It describes the questions
              I want to investigate, not problems I have already solved.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="interests" title="Research interests">
          <div className="space-y-5 leading-relaxed">
            {researchInterests.map((interest) => (
              <div key={interest.title}>
                <h3 className="inline text-lg">{interest.title}. </h3>
                <span>{interest.description}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* <ContentSection id="questions" title="Research questions">
          <p className="mb-6 text-muted">
            Provisional questions I am interested in investigating. They are
            open questions, not established results.
          </p>
          <ol className="list-decimal space-y-5 pl-7 font-serif text-xl leading-snug text-navy-900 marker:font-sans marker:text-base marker:text-muted">
            {researchQuestions.map((question) => (
              <li key={question} className="pl-1">
                {question}
              </li>
            ))}
          </ol>
        </ContentSection> */}

        <ContentSection id="practice" title="Research through practice">
          <p className="mb-6 text-lg leading-relaxed">
            My academic work so far gives me practical foundations for further
            research.
          </p>
          <div className="space-y-6 leading-relaxed">
            {practiceItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm text-muted">{item.kind}</p>
                <p className="mt-1">
                  {item.description}
                  {item.href ? (
                    <>
                      {" "}
                      <Link href={item.href} className={textLinkClass}>
                        More on the Projects page
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection id="future" title="Future research directions">
          <p className="mb-5 text-lg leading-relaxed">
            Directions I would like to explore. I have not fixed on a specific
            algorithm or methodology; these are areas of interest.
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-muted">
            {futureDirections.map((direction) => (
              <li key={direction.title}>
                <span className="font-medium text-navy-900">
                  {direction.title}.
                </span>{" "}
                {direction.description}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            See also my{" "}
            <Link href="/projects" className={textLinkClass}>
              projects
            </Link>{" "}
            and{" "}
              <Link href="/contact" className={textLinkClass}>
                Contact me
            </Link>
            .
          </p>
        </ContentSection>
      </Container>
    </>
  );
}

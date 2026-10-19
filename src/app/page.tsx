import Link from "next/link";
import { Portrait } from "@/components/home/Portrait";
import { ButtonLink, textLinkClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { ExperienceContent } from "@/components/experience/ExperienceContent";

const exploreLinks = [
  {
    href: "/research",
    title: "Research",
    description: "The questions I am working toward and why they matter.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Systems I have built, starting with NoorTech.",
  },
  {
    href: "/publications",
    title: "Publications",
    description: "Papers and manuscripts, with their current status.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Get in touch about doctoral research and collaboration.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="border-b border-line">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl sm:text-6xl">
              Hanane Lachoub
            </h1>
            <p className="mt-4 font-serif text-xl text-navy-700 sm:text-2xl">
              Computer Science Engineer | Aspiring Researcher
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              I hold both a Master’s Degree in Computer Science and an
              Engineering Degree in Computer Science from the Higher School of
              Computer Science (ESI-SBA), Algeria, with a CGPA of 3.85/4.00.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/research">Read my research interests</ButtonLink>
              <a
                href={siteConfig.contact.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-line bg-white px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
              >
                View CV
              </a>
              <a
                href={siteConfig.contact.cvFile}
                download
                className="inline-flex items-center justify-center gap-2 border border-line bg-white px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="w-48 sm:w-60 lg:w-72">
            <Portrait />
          </div>
        </Container>
      </section>

      {/* Story */}
      <section aria-labelledby="story-title">
        <Container className="pt-16 sm:pt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 id="story-title" className="text-2xl sm:text-3xl">
              From an idea to a research direction
            </h2>

            <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
              <p>
                My journey toward research began with an idea: to build
                technology that could make a meaningful difference in
                people&rsquo;s lives. About two years ago, I envisioned
                NoorTech, an AI-powered assistive system for visually impaired
                people. Pursuing this idea taught me the commitment required to
                turn an initial vision into a working system and encouraged me
                to look beyond implementation toward the deeper challenges of
                intelligent computing.
              </p>
              <p>
                I am interested in how intelligent systems can combine
                multimodal information, understand context, and adapt their
                behavior while operating under real-world computational and
                hardware constraints. My research interests span multimodal AI,
                context-aware computing, sensor fusion, Edge AI, IoT and
                embedded systems, efficient and resource-constrained AI,
                adaptive inference, hardware-aware optimization, pipelined
                sensing and encoding, computation offloading, and Human–AI
                Interaction.
              </p>
              <p>
                I hope to explore how these areas can come together to build
                intelligent systems that are not only capable, but also
                efficient, adaptive, and responsive to real-world needs.{" "}
                <Link href="/research" className={textLinkClass}>
                  Read more about my research
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section aria-label="Education, experience, and skills">
        <Container className="pt-16 sm:pt-20">
          <ExperienceContent />
        </Container>
      </section>

      {/* Explore */}
      <section aria-labelledby="explore-title">
        <Container className="pt-16 sm:pt-20">
          <SectionHeading title="Explore" id="explore-title" />
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block border-t-2 border-line pt-4 transition-colors hover:border-accent"
                >
                  <h3 className="text-xl group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-title">
        <Container className="pt-16 sm:pt-20">
          <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="max-w-xl">
              <h2 id="contact-title" className="text-2xl">
                Get in touch
              </h2>
              <p className="mt-2 text-muted">
                I would be glad to hear from researchers and supervisors about
                research opportunities and collaboration.
              </p>
            </div>
            <Link href="/contact" className={textLinkClass}>Contact me</Link>
          </div>
        </Container>
      </section>
    </>
  );
}

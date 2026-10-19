import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContentSection } from "@/components/ui/ContentSection";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink, textLinkClass } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import {
  statusLabels,
  type ProjectDetail,
} from "@/data/project-details";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Figure } from "./Figure";
import { PlaceholderNote } from "./PlaceholderNote";
import { ProjectHeader } from "./ProjectHeader";

/**
 * Renders any project from its overview data plus optional detail content.
 * Sections appear only when their data exists.
 */
export function ProjectDetailView({
  project,
  detail,
}: {
  project: Project;
  detail: ProjectDetail;
}) {
  // Sensible defaults so projects without a detail entry still get a page.
  const overview = detail.overview ?? [project.summary];
  const technologies =
    detail.technologies ?? [{ group: "Technologies", items: project.tags }];
  const links =
    detail.links ??
    [
      ...(project.repoUrl
        ? [{ label: "Source code on GitHub", href: project.repoUrl, kind: "repository" as const }]
        : []),
      ...(project.dataset
        ? [{ label: project.dataset.name, href: project.dataset.url, kind: "dataset" as const }]
        : []),
    ];
  const achievements =
    detail.outcomes?.achievements ?? (project.highlight ? [project.highlight] : []);
  const results = detail.outcomes?.results ?? [];
  const showOutcomes =
    achievements.length > 0 ||
    results.length > 0 ||
    detail.outcomes?.statusNote ||
    detail.outcomes?.placeholder;
  // Hide repeated "to be confirmed" tags until component statuses differ.
  const showComponentStatus =
    !!detail.architecture?.components &&
    !detail.architecture.components.every((comp) => comp.status === "unconfirmed");
  const c = detail.contributions;
  const hasContributionItems =
    !!c && ((c.implemented?.length ?? 0) + (c.inProgress?.length ?? 0) + (c.planned?.length ?? 0) > 0);

  return (
    <>
      <ProjectHeader
        title={project.title}
        subtitle={detail.subtitle}
        highlight={project.highlight}
      />

      {detail.heroFigure ? (
        <Container className="pt-10">
          <Figure figure={detail.heroFigure} wide priority />
        </Container>
      ) : null}

      {detail.demoVideo ? (
        <Container className="pt-8">
          <figure>
            {detail.demoVideo.src ? (
              <video
                src={detail.demoVideo.src}
                controls
                preload="metadata"
                aria-label={detail.demoVideo.title}
                className="aspect-video w-full border border-line bg-black"
              />
            ) : (
              <div role="img" aria-label={`${detail.demoVideo.title} placeholder`} className="flex aspect-video w-full items-center justify-center border border-dashed border-line bg-surface p-6 text-center text-muted">
                <span>{detail.demoVideo.title} · video file to be added</span>
              </div>
            )}
            <figcaption className="mt-2 text-sm text-muted">{detail.demoVideo.caption}</figcaption>
          </figure>
        </Container>
      ) : null}

      {detail.quickFacts?.length ? (
        <Container className="pt-8">
          <dl className="grid gap-4 border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium text-navy-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      ) : null}

      {detail.heroActions?.length ? (
        <Container className="flex flex-wrap gap-3 pt-6">
          {detail.heroActions.map((action) => (
            <ButtonLink key={action.label} href={action.href} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </Container>
      ) : null}

      <Container>
        <ContentSection
          id="overview"
          title="Project overview"
          after={
            detail.figures && detail.figures.length > 0 ? (
              <div className={`grid gap-6 sm:grid-cols-2 ${detail.figures.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                {detail.figures.map((f) => (
                  <Figure key={f.caption} figure={f} fit="contain" />
                ))}
              </div>
            ) : null
          }
        >
          <div className="space-y-4 text-lg leading-relaxed">
            {overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </ContentSection>

        {detail.problem ? (
          <ContentSection id="problem" title="Problem and motivation">
            <div className="space-y-4 text-lg leading-relaxed">
              {detail.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </ContentSection>
        ) : null}

        {detail.architecture ? (
          <ContentSection id="architecture" title="System architecture">
            {detail.architecture.intro ? <p className="text-lg leading-relaxed">{detail.architecture.intro}</p> : null}
            <div className="mt-6 space-y-8">
              {detail.architecture.diagram.kind === "image" ? (
                <Figure figure={detail.architecture.diagram.figure} wide fit="contain" />
              ) : (
                <ArchitectureDiagram stages={detail.architecture.diagram.stages} caption={detail.architecture.diagram.caption} />
              )}
              {detail.architecture.figures?.map((figure) => (
                <Figure key={figure.caption} figure={figure} wide fit="contain" />
              ))}
              {detail.architecture.components ? (
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {detail.architecture.components.map((comp) => (
                    <li key={comp.name} className="border-t border-line py-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg">{comp.name}</h3>
                        {showComponentStatus ? <Tag>{statusLabels[comp.status]}</Tag> : null}
                      </div>
                      <p className="mt-1 text-sm text-muted">{comp.description}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </ContentSection>
        ) : null}

        {detail.approach ? (
          <ContentSection id="approach" title="Technical approach">
            {detail.approach.intro ? (
              <p className="mb-5 text-lg leading-relaxed">{detail.approach.intro}</p>
            ) : null}
            <div className="space-y-5 leading-relaxed">
              {detail.approach.items.map((item) => (
                <div key={item.title}>
                  <h3 className="inline text-lg">{item.title}. </h3>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            {detail.approach.note ? (
              <div className="mt-6">
                {detail.approach.placeholder ? (
                  <PlaceholderNote>{detail.approach.note}</PlaceholderNote>
                ) : (
                  <p className="text-muted">{detail.approach.note}</p>
                )}
              </div>
            ) : null}
          </ContentSection>
        ) : null}

        {detail.extraSections?.map((section) => (
          <ContentSection key={section.id} id={section.id} title={section.title}>
            <div className="space-y-4 text-lg leading-relaxed">
              {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {section.items ? (
                <ul className="list-disc space-y-1 pl-6 marker:text-muted">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
              {section.tables?.map((table) => (
                <div key={table.caption} className="overflow-x-auto rounded-lg border border-line">
                  <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                    <caption className="sr-only">{table.caption}</caption>
                    <thead className="bg-surface text-navy-900">
                      <tr>{table.headers.map((header) => <th key={header} scope="col" className="border-b border-line px-4 py-3 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr key={`${table.caption}-${rowIndex}`} className="border-b border-line last:border-b-0">
                          {row.map((cell, cellIndex) => cellIndex === 0
                            ? <th key={`${rowIndex}-${cellIndex}`} scope="row" className="px-4 py-3 font-medium text-navy-900">{cell}</th>
                            : <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </ContentSection>
        ))}

        {c ? (
          <ContentSection id="contributions" title="My contributions">
            {hasContributionItems ? (
              <div className="space-y-6">
                {(
                  [
                    ["Implemented", c.implemented],
                    ["In progress", c.inProgress],
                    ["Planned", c.planned],
                  ] as const
                ).map(([label, items]) =>
                  items && items.length > 0 ? (
                    <div key={label}>
                      <h3 className="text-lg">{label}</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-muted">
                        {items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null
                )}
              </div>
            ) : null}
            {c.note ? (
              <div className={hasContributionItems ? "mt-6" : ""}>
                {c.placeholder ? (
                  <PlaceholderNote>{c.note}</PlaceholderNote>
                ) : (
                  <p className="text-muted">{c.note}</p>
                )}
              </div>
            ) : null}
          </ContentSection>
        ) : null}

        {technologies.length > 0 ? (
          <ContentSection id="technologies" title="Technologies">
            <div className="space-y-5">
              {technologies.map((group) => (
                <div key={group.group}>
                  <h3 className="text-base">{group.group}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ContentSection>
        ) : null}

        {showOutcomes ? (
          <ContentSection id="outcomes" title="Outcomes and current status">
            <div className="space-y-6">
              {achievements.length > 0 ? (
                <div>
                  <h3 className="text-lg">Achievements</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-muted">
                    {achievements.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              ) : null}
              {results.length > 0 ? (
                <div>
                  <h3 className="text-lg">Evaluation results</h3>
                  <dl className="mt-2 divide-y divide-line border-y border-line">
                    {results.map((r) => (
                      <div key={r.label} className="grid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:gap-6">
                        <dt>
                          {r.label}
                          {r.context ? (
                            <span className="block text-sm text-muted">{r.context}</span>
                          ) : null}
                        </dt>
                        <dd className="font-serif text-xl text-navy-900">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
              {detail.outcomes?.statusNote ? (
                <p className="leading-relaxed">{detail.outcomes.statusNote}</p>
              ) : null}
              {detail.outcomes?.placeholder ? (
                <PlaceholderNote>
                  The current implementation status and evaluation results will be added
                  once confirmed. No performance figures are reported here.
                </PlaceholderNote>
              ) : null}
            </div>
          </ContentSection>
        ) : null}

        {detail.related && detail.related.length > 0 ? (
          <ContentSection id="related" title="Related research and publications">
            <ul className="space-y-6">
              {detail.related.map((item) => (
                <li key={item.title}>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-muted">
                    {item.kind}
                    {item.status ? `. ${item.status}` : ""}
                  </p>
                  {item.description ? <p className="mt-1">{item.description}</p> : null}
                  {item.href ? (
                    <p className="mt-1 text-sm">
                      <Link href={item.href} className={textLinkClass}>
                        View
                        <span className="sr-only">: {item.title}</span>
                      </Link>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </ContentSection>
        ) : null}

        <ContentSection id="links" title="Links">
          {links.length > 0 ? (
            <ul className="space-y-2">
              {links.map((l) => (
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
              ))}
            </ul>
          ) : (
            <PlaceholderNote>
              Repository, demo, companion application, and paper links will be added here
              when they are verified and public.
            </PlaceholderNote>
          )}
        </ContentSection>
      </Container>
    </>
  );
}

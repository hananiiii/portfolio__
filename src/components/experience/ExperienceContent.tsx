import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { textLinkClass } from "@/components/ui/Button";
import { SectionNav } from "@/components/experience/SectionNav";
import { achievements, education, languages, leadership, professionalExperience, skillGroups } from "@/data/experience";
import Link from "next/link";
import { Award } from "lucide-react";

const sections = [
  { id: "education", label: "Education" },
  { id: "experience-work", label: "Experience" },
  ...(achievements.length ? [{ id: "achievements", label: "Achievements" }] : []),
  ...(leadership.length ? [{ id: "leadership", label: "Leadership" }] : []),
  { id: "skills", label: "Technical skills" },
  { id: "languages", label: "Languages" },
];

export function ExperienceContent() {
  return (
    <div id="experience" className="scroll-mt-24 grid grid-cols-[minmax(0,1fr)] border-t border-line pt-12 sm:pt-16 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
      <SectionNav items={sections} />
      <div className="min-w-0 pt-8 lg:pt-0">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl">Experience</h2>
        <p className="mt-3 leading-relaxed text-muted">My academic training, professional work, research practice, and technical experience in computer science.</p>
      </div>
      <ExperienceSection id="education" title="Education">
        <article>
          <h3 className="text-xl">{education.institution}</h3>
          <p className="mt-1 text-sm text-muted">{education.location}</p>
          <dl className="mt-4 grid max-w-2xl grid-cols-[7.5rem_1fr] gap-x-4 gap-y-2">
            <dt className="text-muted">Degrees</dt><dd>{education.degrees.join(" · ")}</dd>
            <dt className="text-muted">Specialization</dt><dd>{education.specialization}</dd>
            <dt className="text-muted">CGPA</dt><dd>{education.cgpa}</dd>
          </dl>
          <h4 className="mt-6 font-semibold text-navy-900">About the institution</h4>
          <p className="mt-2 max-w-2xl leading-relaxed">{education.about}</p>
        </article>
        <article className="mt-8 border-t border-line pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Secondary School · Baccalaureate</p>
          <h3 className="mt-2 text-xl">{education.secondary.institution}</h3>
          <p className="mt-1 text-sm text-muted">{education.secondary.location}</p>
          <p className="mt-3">{education.secondary.qualification}</p>
          <p className="mt-1 font-semibold text-navy-900">Final average: {education.secondary.average}</p>
        </article>
      </ExperienceSection>
      <ExperienceSection id="experience-work" title="Professional and research experience">
        <div className="divide-y divide-line">{professionalExperience.map((entry) => <ExperienceItem key={entry.id} entry={entry} />)}</div>
      </ExperienceSection>
      {achievements.length ? <ExperienceSection id="achievements" title="Achievements and awards"><div className="space-y-4">{achievements.map((entry) => <article key={entry.id} className="rounded-xl border border-line bg-white p-5 sm:p-6"><div className="flex gap-4"><span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-navy-900"><Award size={20} aria-hidden="true" /></span><div className="min-w-0 flex-1"><p className="text-xs font-semibold uppercase tracking-wide text-muted">{entry.period ? `${entry.period} · ` : ""}{entry.organization}</p><h3 className="mt-1 text-xl">{entry.title}</h3>{entry.awardTrack ? <p className="mt-2 font-medium text-navy-900">{entry.awardTrack}</p> : null}{entry.awardAmount ? <p className="mt-3 text-2xl font-semibold tracking-tight text-navy-900">{entry.awardAmount}</p> : null}{entry.awardCaption ? <p className="text-sm text-muted">{entry.awardCaption}</p> : null}<p className="mt-4 leading-relaxed">{entry.summary}</p>{entry.awardMetrics?.length ? <p className="mt-4 border-t border-line pt-3 text-sm text-muted">{entry.awardMetrics.join(" · ")}</p> : null}{entry.links?.map((link) => <p key={link.href} className="mt-3 text-sm"><Link href={link.href} className={textLinkClass}>{link.label}</Link></p>)}</div></div></article>)}</div></ExperienceSection> : null}
      {leadership.length ? <ExperienceSection id="leadership" title="Leadership and activities"><div className="divide-y divide-line">{leadership.map((entry) => <ExperienceItem key={entry.id} entry={entry} />)}</div></ExperienceSection> : null}
      <ExperienceSection id="skills" title="Technical skills">
        <dl className="divide-y divide-line border-y border-line">{skillGroups.map((group) => <div key={group.group} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"><dt className="font-serif text-lg text-navy-900">{group.group}</dt><dd>{group.items.join(", ")}</dd></div>)}</dl>
      </ExperienceSection>
      <ExperienceSection id="languages" title="Languages">
        <dl className="divide-y divide-line border-y border-line">{languages.map((language) => <div key={language.name} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"><dt className="font-serif text-lg text-navy-900">{language.name}</dt><dd>{language.level ?? <span className="text-muted">Intermediate</span>}{language.evidence ? <span className="block text-sm text-muted">{language.certificateUrl ? <a href={language.certificateUrl} target="_blank" rel="noopener noreferrer" className={textLinkClass}>{language.evidence}<span className="sr-only"> (opens in a new tab)</span></a> : language.evidence}</span> : null}</dd></div>)}</dl>
      </ExperienceSection>
      <p className="border-t border-line pt-8">For research opportunities or collaboration, <Link href="/contact" className={textLinkClass}>get in touch</Link>.</p>
      </div>
    </div>
  );
}

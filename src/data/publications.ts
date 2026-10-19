/**
 * Publications page content.
 *
 * HOW TO UPDATE
 * - Change `status` when a manuscript moves on ("under-review" -> "accepted" -> "published").
 *   Only use "published" once it really is, and then add its venue and link.
 * - Add `links` ONLY for URLs that are real and permitted to share.
 * - Never add a journal name, DOI, volume, or dates that are not confirmed.
 */

export type PublicationKind = "manuscript" | "master-thesis" | "engineering-thesis";

export type PublicationStatus = "under-review" | "accepted" | "published" | "thesis";

export const kindLabels: Record<PublicationKind, string> = {
  manuscript: "Research manuscript",
  "master-thesis": "Master’s thesis",
  "engineering-thesis": "Engineering thesis",
};

export const statusLabels: Record<PublicationStatus, string> = {
  "under-review": "Submitted, Under review",
  accepted: "Accepted",
  published: "Published",
  thesis: "Academic thesis",
};

export type Publication = {
  slug: string;
  title: string;
  authors: string[];
  kind: PublicationKind;
  status: PublicationStatus;
  /** Short clarification shown next to the status. */
  statusNote?: string;
  /** Leave out if not confirmed; the page shows "to be added". */
  year?: string;
  /** Your role, e.g. "First author and corresponding author". */
  role?: string;
  institution?: string;
  abstract?: string;
  keywords?: string[];
  /** Real, permitted links only (PDF, publisher page, repository record). */
  links?: { label: string; href: string }[];
  /** Shown when there are no links, e.g. "Not yet publicly available." */
  availability?: string;
  relatedProject?: { label: string; href: string };
};

export const publications: Publication[] = [
  {
    slug: "noortech-manuscript",
    title: "NoorTech: An AI-Powered Wearable Device for Visually Impaired Persons",
    authors: ["Hanane Lachoub", "Manel Baba Ahmed", "Abdelatif Rahmoun"],
    kind: "manuscript",
    status: "under-review",
    statusNote: "Not yet published.",
    // TODO: confirm this year against the submitted manuscript's metadata.
    year: "2026",
    role: "First author and corresponding author",
    abstract:
      "A manuscript about an AI-powered wearable assistive system combining computer vision, sensing, and embedded intelligence.",
    availability: "Submited and currently Under review and not yet publicly available.",
    relatedProject: { label: "NoorTech project page", href: "/projects/noortech" },
  },
  {
    slug: "edge-ai-assistive-technologies-survey",
    title: "Edge AI for Assistive Technologies: A Survey",
    authors: ["Hanane Lachoub"],
    kind: "master-thesis",
    status: "thesis",
    statusNote: "Not a published paper.",
    year: "2026",
    institution: "Higher School of Computer Science (ESI-SBA), Algeria",
    abstract:
      "A survey of Edge AI techniques for assistive technologies, examining on-device intelligence, resource-efficient inference, and the challenges of deploying AI systems under computational and hardware constraints.",
    links: [
      { label: "Master’s thesis", href: "https://drive.google.com/file/d/1ZrTA8ra2uLQBh73uoKtPVJ6flIrBgnT7/view?usp=sharing" },
    ],
  },
  {
    slug: "assistive-wearable-engineering-thesis",
    title: "AI-powered Assistive Wearable System for the Visually Impaired",
    authors: ["Hanane Lachoub"],
    kind: "engineering-thesis",
    status: "thesis",
    statusNote: "Not a published paper.",
    // year: "20XX",   // <- add when confirmed
    institution: "Higher School of Computer Science (ESI-SBA), Algeria",
    abstract:
      "Designed and developed NoorTech, an AI-powered assistive wearable integrating computer vision, ultrasonic sensing, speech technologies, and navigation to support obstacle awareness and independent mobility for people with visual impairments.",
    links: [
      { label: "Engineering thesis", href: "https://drive.google.com/file/d/1N6lPSNPu6WTA6p28r00k5V0JTLMlYL0u/view?usp=sharing" },
    ],
    // abstract: "...", // <- add a short description when ready
  },
];

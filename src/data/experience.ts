/**
 * Experience page content. Everything here is editable.
 *
 * - Leave a field out (or empty) and it simply does not show.
 * - Add dates only when verified. Nothing here is invented.
 * - The "leadership" list is empty on purpose: the section stays hidden until
 *   you add a real entry.
 * - Keep education, award, and skill details aligned with verified records.
 */

export type EntryLink = { label: string; href: string };

export type ExperienceEntry = {
  id: string;
  title: string;
  organization?: string;
  location?: string;
  /** e.g. "2023 to 2024". Only when verified. */
  period?: string;
  summary?: string;
  details?: string[];
  /** Sub-items linking to other pages instead of repeating their content. */
  items?: { title: string; description?: string; href: string; linkLabel: string }[];
  links?: EntryLink[];
  /** Visible "to be added" note shown in a dashed box. */
  placeholderNote?: string;
  awardAmount?: string;
  awardCaption?: string;
  awardMetrics?: string[];
  awardTrack?: string;
};

export const education = {
  institution: "Higher School of Computer Science — ESI-SBA",
  location: "Sidi Bel Abbès, Algeria",
  specialization: "Information Systems and Web (SIW)",
  // Verify the exact official degree titles against your diplomas.
  degrees: ["Master’s Degree in Computer Science", "Engineering Degree in Computer Science"],
  cgpa: "3.85/4.00 (15.07/20)",
  about:
    "ESI-SBA is a specialized higher education school in computer science with a selective, academically competitive admissions process based on baccalaureate results. Its rigorous engineering curriculum provided a foundation in computer science, software engineering, and intelligent systems.",
  secondary: {
    institution: "Lycée Bouazza Miloud",
    location: "Algeria · 2018–2021",
    qualification: "Algerian Baccalaureate — Scientific Stream",
    average: "17.49/20",
  },
  // period: "20XX to 20XX",      // add when verified
  // honors: "...",               // add only if officially awarded
};

export const professionalExperience: ExperienceEntry[] = [
  {
    id: "freelance-software-engineer",
    title: "Freelance Software Engineer",
    location: "Algeria · Remote",
    summary:
      "Developed software solutions from requirements analysis and architecture through implementation, including backend services, REST APIs, databases, and authentication using Python and JavaScript/TypeScript.",
  },
  {
    id: "software-engineering-intern",
    title: "Software Engineering Intern",
    organization: "Information Systems Department, Industrial Company",
    summary:
      "Analyzed cross-department information flows and documented functional requirements to support workflow and information-system design.",
  },
  {
    id: "korean-instructor",
    title: "Korean Language Instructor",
    organization: "Online · Language school collaboration",
    period: "2024–Present",
    summary:
      "Teach beginner Korean online in collaboration with another Korean teacher and a language school.",
  },
  {
    id: "research-thesis",
    title: "Research and thesis projects",
    items: [
      {
        title: "Master’s thesis: Edge AI for Assistive Technologies: A Survey",
        href: "/publications#theses",
        linkLabel: "See on the Publications page",
      },
      {
        title:
          "Engineering thesis: AI-powered Assistive Wearable System for the Visually Impaired",
        href: "/publications#theses",
        linkLabel: "See on the Publications page",
      },
      {
        title: "NoorTech",
        description: "An AI-powered wearable assistive system for visually impaired people.",
        href: "/projects/noortech",
        linkLabel: "See the project",
      },
    ],
    links: [{ label: "My research interests", href: "/research" }],
  },
];

export const achievements: ExperienceEntry[] = [
  {
    id: "protomarket",
    title: "ProtoMarket2026 Winner",
    organization: "National Innovation Challenge & Acceleration Program",
    period: "2026",
    awardAmount: "1,000,000 DZD",
    awardCaption: "Project funding awarded to NoorTech",
    summary:
      "Selected as a winning project in ProtoMarket II, a national challenge and acceleration program launched under Algeria’s Ministry of Higher Education and Scientific Research to help transform university research and student prototypes into market-ready products and startups. Among 2,110 applications, NoorTech was recognized for its potential to translate an AI-powered assistive technology concept into a practical solution and advance prototype development toward commercialization.",
    awardMetrics: ["2,110 applications", "NoorTech", "Prototype development and commercialization"],
    links: [
      { label: "NoorTech project", href: "/projects/noortech" },
       {
        label: "NoorTech 15-class dataset on Zenodo",
        href: "https://doi.org/10.5281/zenodo.21499005",
      },
       {
        label: "NoorTech GitHub Repository",
        href: "https://github.com/NoorTech-Blind-assistant",
      },
       {
        label: "NoorTech ProtoMarket Winner Announcement",
        href: "https://www.linkedin.com/posts/esisba_proud-to-celebrate-our-protomarket-2026-activity-7516509605959700480-I3ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYoxH0BF6pa--xCc2EDiB2hRLNGABZKZ_g",
}    ],
  },
  {
    id: "innovpost-hackathon",
    title: "INNOVPOST — First Place",
    organization: "Algérie Poste · INNOVPOST 2024",
    awardTrack: "AI & Computer Vision Track",
    awardCaption: "Team leader · Damaged-package detection system",
    summary:
      "Led a five-member team at INNOVPOST 2024, organized by Algérie Poste under the theme “Towards a Connected and Innovative Post.” NeuralDetect won first place in the AI and Computer Vision track.",
    awardAmount: "500,000 DA",
    awardMetrics: ["300+ student teams", "35 startups", "16 winners"],
    links: [
      { label: "Event article (French)", href: "https://www.indjazat.com/hackathon-innovpost-2024-des-idees-neuves-pour-une-poste-connectee-et-avant-gardiste/" },
      { label: "NeuralDetect source code", href: "https://github.com/AnouarAdel/NeuralDetect-Package-Damage-Detection" },
      { label: "Project details", href: "/projects/damaged-package-detection" },
    ],
  },
];

/** Leave empty to hide the section. Example entry:
 *  { id: "x", title: "Role or initiative", organization: "Where", summary: "What you did." }
 */
export const leadership: ExperienceEntry[] = [];

export const skillGroups: { group: string; items: string[] }[] = [
  {
    group: "Edge AI & Deployment",
    items: ["Raspberry Pi", "ONNX", "On-device inference", "Offline AI", "CPU-based inference", "Real-time processing", "Sensors", "MQTT", "Embedded development", "Edge AI", "Kubernetes"],
  },
  {
    group: "Computer Vision & Machine Learning",
    items: ["Python", "PyTorch", "YOLO", "CNNs", "Transfer learning", "Image segmentation", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Image classification and detection workflows"],
  },
  {
    group: "Multimodal Systems",
    items: ["Sensor fusion", "OCR", "Speech-to-text", "Text-to-speech", "Context-aware intelligent systems"],
  },
  {
    group: "Human–AI Interaction & Intelligent Systems",
    items: ["Human–AI Interaction", "Human-centered AI", "RAG", "LangChain", "LangGraph"],
  },
  {
    group: "Software Engineering",
    items: [ "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "FastAPI", "REST APIs", "MongoDB", "MySQL", "PostgreSQL", "Docker", "Git"],
  },
];

export const languages: { name: string; level?: string; evidence?: string; certificateUrl?: string }[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "C2", evidence: "Certificate", certificateUrl: "https://drive.google.com/file/d/14fRl8g_A3GXsw0iAAK9DwSLK3xYFj3Nw/view?usp=sharing" },
  { name: "Korean", level: "Intermediate (4B)", evidence: "Level 4B certificate", certificateUrl: "https://drive.google.com/file/d/1g85-J6-5tAPFkuxPF2_ADM0LPqYd28tg/view?usp=sharing" },
    { name: "French", level:"Intermediate" },
  { name: "German", level: "Beginner" },
];

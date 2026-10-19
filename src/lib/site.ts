export const siteConfig = {
  name: "Hanane Lachoub",
  title: "Computer Science Engineer | Aspiring Researcher",
  description:
    "Academic portfolio of Hanane Lachoub: research interests, projects, publications, and experience in multimodal AI, edge AI, and human–AI interaction.",
  contact: {
    email: "hananelachoub03@gmail.com",
    phone: "+213 553 76 83 49",
    linkedin: "https://www.linkedin.com/in/lachoub-hanane-8a524a28a/",
    github: "https://github.com/hananiiii",
    cvFile: "/documents/cv.pdf",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}


/**
 * Home page portrait. Leave `src` as null to show a neutral placeholder.
 * To use your own photo, put it in public/images/ (e.g. portrait.jpg,
 * ideally 4:5 portrait, about 800x1000) and set src: "/images/portrait.jpg".
 */
export const portrait: { src: string | null; alt: string } = {
  src: "/images/portrait.jpg",
  alt: "Portrait of Hanane Lachoub",
};

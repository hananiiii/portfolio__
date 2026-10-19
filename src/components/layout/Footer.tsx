import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/lib/site";
import { textLinkClass } from "@/components/ui/Button";

export function Footer() {
  const { email, phone, linkedin, github } = siteConfig.contact;

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-semibold text-navy-900">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-xs text-sm text-muted">{siteConfig.title}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-navy-900">Pages</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact">
          <h2 className="font-sans text-sm font-semibold text-navy-900">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/contact" className={textLinkClass}>Contact page</Link></li>
            {email ? <li><a href={`mailto:${email}`} className={textLinkClass}>{email}</a></li> : null}
            {phone ? <li><a href={`tel:${phone.replace(/\s/g, "")}`} className={textLinkClass}>{phone}</a></li> : null}
            {linkedin ? <li><a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">LinkedIn</a></li> : null}
            {github ? <li><a href={github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">GitHub</a></li> : null}
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-4 text-xs text-muted">
          © {siteConfig.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}

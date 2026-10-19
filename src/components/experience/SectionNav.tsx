"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type SectionNavItem = { id: string; label: string };

/**
 * In-page navigation. Sticky list on the left (desktop) and a sticky,
 * horizontally scrolling bar under the main navbar (mobile).
 * Highlights the section currently in view.
 */
export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const key = items.map((i) => i.id).join(",");

  useEffect(() => {
    const ids = key.split(",");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 -mx-5 border-b border-line bg-white px-5 sm:-mx-8 sm:px-8 lg:top-24 lg:mx-0 lg:self-start lg:border-b-0 lg:px-0"
    >
      <ul className="flex gap-6 overflow-x-auto lg:flex-col lg:gap-1">
        {items.map((item) => {
          const current = active === item.id;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                onClick={() => setActive(item.id)}
                className={`block whitespace-nowrap border-b-2 py-3 text-sm font-medium transition-colors lg:border-b-0 lg:border-l-2 lg:py-1.5 lg:pl-3 ${
                  current
                    ? "border-accent text-navy-900"
                    : "border-transparent text-muted hover:text-navy-900"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 hidden text-sm lg:block">
        <Link href="/contact" className="text-accent underline decoration-accent/40 hover:text-accent-hover">
          Contact me
        </Link>
      </p>
    </nav>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors duration-150";

const variants = {
  primary:
    "border-navy-900 bg-navy-900 text-white hover:border-accent hover:bg-accent",
  secondary:
    "border-line bg-white text-navy-900 hover:border-navy-900",
};

/** Link styled as a button. Uses a plain <a> for external and mailto links. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Inline text link style for use inside prose. */
export const textLinkClass =
  "text-accent underline decoration-accent/40 transition-colors hover:text-accent-hover hover:decoration-accent-hover";

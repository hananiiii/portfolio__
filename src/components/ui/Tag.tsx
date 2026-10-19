import type { ReactNode } from "react";

/** Small label for technologies, topics, and status. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-navy-700">
      {children}
    </span>
  );
}

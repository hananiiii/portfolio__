import type { ReactNode } from "react";

/** Visible "to be added" note, used where real content has not been supplied yet. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="border border-dashed border-line px-4 py-3 text-sm text-muted">
      {children}
    </p>
  );
}
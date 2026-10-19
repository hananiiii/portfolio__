import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureStage } from "@/data/project-details";

/**
 * Conceptual left-to-right (top-to-bottom on mobile) diagram built from data.
 * Replace with a real diagram image via `diagram: { kind: "image" }` when available.
 */
export function ArchitectureDiagram({
  stages,
  caption,
}: {
  stages: ArchitectureStage[];
  caption: string;
}) {
  return (
    <figure>
      <div className="border border-dashed border-line p-5 sm:p-6">
        <p className="mb-4 text-sm font-medium text-accent">Conceptual diagram</p>
        <ol className="flex flex-col lg:flex-row lg:items-stretch">
          {stages.map((stage, i) => (
            <li key={stage.label} className="flex flex-col lg:flex-1 lg:flex-row">
              <div className="min-w-0 flex-1 border border-line bg-white p-4">
                <h3 className="font-sans text-sm font-semibold text-navy-900">
                  {stage.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {stage.nodes.map((node) => (
                    <li
                      key={node}
                      className="border border-line bg-surface px-3 py-2 text-sm text-ink"
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </div>
              {i < stages.length - 1 ? (
                <span
                  aria-hidden
                  className="flex items-center justify-center py-2 text-muted lg:px-3 lg:py-0"
                >
                  <ArrowDown size={20} className="lg:hidden" />
                  <ArrowRight size={20} className="hidden lg:block" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
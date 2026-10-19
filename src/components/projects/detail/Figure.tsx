import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Figure as FigureData } from "@/data/project-details";

/** Captioned image. Without `src` it renders a clearly marked placeholder. */
export function Figure({
  figure,
  wide = false,
  priority = false,
  fit = "cover",
}: {
  figure: FigureData;
  wide?: boolean;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const ratio = wide ? "aspect-[2/1]" : "aspect-[16/10]";
  return (
    <figure>
      {figure.src ? (
        <Image
          src={figure.src}
          alt={figure.alt}
          width={wide ? 1600 : 1200}
          height={wide ? 800 : 750}
          priority={priority}
          sizes="(min-width: 1152px) 1088px, 100vw"
          className={`${ratio} w-full border border-line ${fit === "contain" ? "bg-white object-contain" : "object-cover"}`}
        />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder: ${figure.alt}`}
          className={`${ratio} flex w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-surface px-4 text-center text-muted`}
        >
          <ImageIcon size={28} aria-hidden />
          <span className="text-sm">{figure.placeholderLabel ?? "Image to be added"}</span>
        </div>
      )}
      <figcaption className="mt-2 text-sm text-muted">{figure.caption}</figcaption>
    </figure>
  );
}

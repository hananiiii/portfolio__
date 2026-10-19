import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

/** Real project image if supplied; otherwise a neutral, clearly marked placeholder. */
export function ProjectImage({
  image,
  className = "",
}: {
  image: Project["image"];
  className?: string;
}) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={750}
        sizes="(min-width: 1024px) 560px, 100vw"
        className={`aspect-[16/10] w-full border border-line object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border border-line bg-surface text-muted ${className}`}
    >
      <ImageIcon size={24} aria-hidden />
      <span className="text-xs">Project image to be added</span>
    </div>
  );
}
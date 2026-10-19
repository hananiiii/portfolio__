import Image from "next/image";
import { portrait } from "@/lib/site";

/** Shows the portrait set in `lib/site.ts`, or a neutral placeholder if none. */
export function Portrait() {
  if (portrait.src) {
    return (
      <Image
        src={portrait.src}
        alt={portrait.alt}
        width={800}
        height={1000}
        priority
        sizes="(min-width: 1024px) 320px, 240px"
        className="aspect-[4/5] w-full border border-line object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex aspect-[4/5] w-full items-center justify-center border border-line bg-surface"
    >
      <span className="font-serif text-6xl font-semibold text-navy-700/30">
        HL
      </span>
    </div>
  );
}
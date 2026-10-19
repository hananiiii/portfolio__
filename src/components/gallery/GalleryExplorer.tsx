"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (selected) closeRef.current?.focus();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  return (
    <>
      {items.length ? (
        <ul className="columns-2 gap-4 sm:gap-6 lg:columns-3">
          {items.map((item) => (
            <li key={item.id}>
              <article className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-md sm:mb-6">
                <button
                  type="button"
                  className="group block w-full text-left"
                  aria-label={`Open image: ${item.alt}`}
                  onClick={() => setSelected(item)}
                >
                  <GalleryImage item={item} compact />
                </button>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-dashed border-line p-8 text-center text-muted">Images will be added here.</p>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Gallery image preview"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setSelected(null);
        }}
        className="m-auto max-h-[90vh] w-[min(92vw,48rem)] max-w-none rounded-2xl border border-line bg-white p-0 text-ink shadow-2xl backdrop:bg-navy-900/70"
      >
        {selected ? (
          <div>
            <div className="relative">
              <GalleryImage item={selected} />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close image details"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-900 shadow-sm hover:bg-surface"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function GalleryImage({ item, compact = false }: { item: GalleryItem; compact?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-surface p-5 text-center ${compact ? "aspect-[4/3]" : "aspect-[16/9]"}`}
    >
      <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw" className={compact ? "object-cover" : "object-contain"} />
    </div>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Visual notes from Hanane Lachoub's research, engineering projects, achievements, and academic activities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
      />
      <Container className="py-8 sm:py-12">
        <GalleryExplorer items={galleryItems} />
      </Container>
    </>
  );
}

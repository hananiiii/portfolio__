import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Hanane Lachoub in intelligent systems, computer vision, and software engineering.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Selected work in intelligent systems, computer vision, and software engineering. These projects reflect my approach to building practical technology, exploring technical challenges, and connecting implementation with broader research questions."
      />
      <Container className="pt-2 sm:pt-4">
        <ProjectsExplorer projects={projects} />
      </Container>
    </>
  );
}
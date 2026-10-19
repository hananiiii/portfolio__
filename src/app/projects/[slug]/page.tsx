import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/projects/detail/ProjectDetailView";
import { ProjectNav } from "@/components/projects/detail/ProjectNav";
import { projectDetails } from "@/data/project-details";
import { projects } from "@/data/projects";
import {
  getAdjacentProjects,
  getProjectBySlug,
  listPublishedProjects,
} from "@/lib/projects";

export function generateStaticParams() {
  return listPublishedProjects(projects).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(projects, slug);

  return (
    <>
      <ProjectDetailView project={project} detail={projectDetails[slug] ?? {}} />
      <ProjectNav previous={previous} next={next} />
    </>
  );
}
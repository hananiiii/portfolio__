"use client";

import { useState } from "react";
import { categoryLabels, type Project } from "@/data/projects";
import {
  availableCategories,
  getVisibleProjects,
  type ProjectFilter,
} from "@/lib/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const options: { value: ProjectFilter; label: string }[] = [
    { value: "all", label: "All" },
    ...availableCategories(projects).map((c) => ({
      value: c as ProjectFilter,
      label: categoryLabels[c],
    })),
  ];

  const { featured, sections, total } = getVisibleProjects(projects, filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 border-b border-line py-6"
      >
        {options.map((option) => {
          const pressed = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(option.value)}
              className={`border px-4 py-1.5 text-sm font-medium transition-colors ${
                pressed
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white text-navy-900 hover:border-navy-900"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p role="status" className="py-4 text-sm text-muted">
        {total === 0
          ? "No projects in this category yet."
          : `Showing ${total} ${total === 1 ? "project" : "projects"}${
              filter === "all" ? "" : ` in ${categoryLabels[filter]}`
            }.`}
      </p>

      {featured.length > 0 ? (
        <section aria-labelledby="featured-title" className="pb-12">
          <h2 id="featured-title" className="mb-6 text-2xl">
            Featured project
          </h2>
          <div className="space-y-6">
            {featured.map((project) => (
              <FeaturedProject key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {sections.map((section) => {
        const id = `section-${section.category}`;
        return (
          <section key={section.category} aria-labelledby={id} className="pb-12">
            <h2 id={id} className="mb-6 border-b border-line pb-3 text-2xl">
              {categoryLabels[section.category]}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
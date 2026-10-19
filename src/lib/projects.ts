import {
  categoryOrder,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

export type ProjectFilter = "all" | ProjectCategory;

export type ProjectSection = {
  category: ProjectCategory;
  projects: Project[];
};

/** Categories that contain at least one project (empty ones get no filter button). */
export function availableCategories(projects: Project[]): ProjectCategory[] {
  return categoryOrder.filter((c) => projects.some((p) => p.categories.includes(c)));
}

/**
 * Splits projects into the featured ones and category sections for a filter.
 * "all": sections grouped by primary category.
 * a category: one section with every project that belongs to it.
 */
export function getVisibleProjects(projects: Project[], filter: ProjectFilter) {
  const matching =
    filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));
  const featured = matching.filter((p) => p.featured);
  const rest = matching.filter((p) => !p.featured);

  let sections: ProjectSection[];
  if (filter === "all") {
    sections = categoryOrder
      .map((category) => ({
        category,
        projects: rest.filter((p) => p.primaryCategory === category),
      }))
      .filter((s) => s.projects.length > 0);
  } else {
    sections = rest.length > 0 ? [{ category: filter, projects: rest }] : [];
  }

  return { featured, sections, total: matching.length };
}


/** Real (non-placeholder) projects, in display order. */
export function listPublishedProjects(projects: Project[]): Project[] {
  return projects.filter((p) => !p.placeholder);
}

export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return listPublishedProjects(projects).find((p) => p.slug === slug);
}

export function getAdjacentProjects(projects: Project[], slug: string) {
  const list = listPublishedProjects(projects);
  const i = list.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? list[i - 1] : undefined,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined,
  };
}
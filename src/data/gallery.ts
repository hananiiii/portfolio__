export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

// Gallery images are served directly from public/images/galery/.
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "/images/galery/0.jpg",
    alt: "Hanane demonstrating NoorTech with the system running on a projected screen",
  },
  {
    id: "gallery-2",
    src: "/images/galery/1.jpg",
    alt: "Hanane presenting a technical project to an academic panel",
  },
  {
    id: "gallery-3",
    src: "/images/galery/2.jpg",
    alt: "ESI-SBA sign with academic certificates displayed below it",
  },
  {
    id: "gallery-4",
    src: "/images/galery/3.jpg",
    alt: "NoorTech assistive wearable hardware prototype with sensors and electronics assembled on a work table",
  },
  {
    id: "gallery-5",
    src: "/images/galery/4.jpg",
    alt: "Team presenting a technical project to an academic panel",
  },
  {
    id: "gallery-6",
    src: "/images/galery/5.jpg",
    alt: "Students collaborating around laptops on a software project",
  },
  {
    id: "gallery-7",
    src: "/images/galery/6.jpg",
    alt: "Group photo with academic instructors and colleagues",
  },
  {
    id: "gallery-8",
    src: "/images/galery/7.jpg",
    alt: "Hanane presenting a system architecture diagram to an audience",
  },
  {
    id: "gallery-9",
    src: "/images/galery/8.jpg",
    alt: "Student team standing together outside a university building",
  },
  {
    id: "gallery-10",
    src: "/images/galery/9.jpg",
    alt: "Heatmap showing missing values across origin and development years",
  },
  {
    id: "gallery-11",
    src: "/images/galery/10.jpg",
    alt: "INNOVPOST hackathon first-place voucher for 500,000 Algerian dinars",
  },
  {
    id: "gallery-12",
    src: "/images/galery/11.jpg",
    alt: "Students and instructors gathered for an academic group photo",
  },
];

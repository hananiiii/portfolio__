export type ProjectCategory =
  | "computer-vision-ai"
  | "edge-ai-iot"
  | "software-engineering";

export const categoryLabels: Record<ProjectCategory, string> = {
  "computer-vision-ai": "Computer Vision & AI",
  "edge-ai-iot": "Edge AI & IoT",
  "software-engineering": "Software Engineering",
};

/** Order in which categories appear on the page and in the filter. */
export const categoryOrder: ProjectCategory[] = [
  "computer-vision-ai",
  "edge-ai-iot",
  "software-engineering",
];

export type Project = {
  /** Used for the detail route: /projects/[slug] */
  slug: string;
  title: string;
  summary: string;
  /** Every category the project belongs to (used by the filter). */
  categories: ProjectCategory[];
  /** The one category it is listed under in the "All" view. */
  primaryCategory: ProjectCategory;
  tags: string[];
  featured?: boolean;
  /** A verified achievement, e.g. a competition result. */
  highlight?: string;
  /** Public source repository, only if it really exists. */
  repoUrl?: string;
    /** Public dataset the project used, only if it really exists. */
  dataset?: { name: string; url: string };
  /** Your role, only if you want to state it. */
  role?: string;
  /** Put the file in public/images/projects/ and set e.g. "/images/projects/noortech.jpg". */
  image?: { src: string; alt: string };
  /** Sample entry to replace. Placeholders show no "View project" link. */
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "noortech",
    title: "NoorTech",
    summary:
      "A chest-mounted, offline-first assistive wearable combining computer vision, ultrasonic sensing, speech, OCR, GPS, and emergency communication in one device.",
    categories: ["computer-vision-ai", "edge-ai-iot"],
    primaryCategory: "edge-ai-iot",
    tags: [
      "Raspberry Pi",
      "Computer vision",
      "Ultrasonic sensing",
      "Multimodal inputs",
      "GPS/GSM",
      "Speech interaction",
      "Edge AI",
      "Sensor fusion",
      "Context-aware decision-making",
      "Offline operation",
      "Adaptive offloading",
      "Companion application",
      "ONNX Runtime",
      "Vosk",
      "Piper",
      "Tesseract OCR",
      "Caregiver app",
    ],
    featured: true,
    highlight: "ProtoMarket II winner · 1,000,000 DZD project funding",
    image: {
      src: "/images/beltmounted.png",
      alt: "NoorTech chest-mounted assistive wearable being worn",
    },
    dataset: {
      name: "NoorTech 15-class navigation dataset",
      url: "https://doi.org/10.5281/zenodo.21499005",
    },
  },
  {
       slug: "damaged-package-detection",
    title: "NeuralDetect: Damaged Package Detection",
    summary:
      "An award-winning full-stack computer vision application for detecting damaged postal packages, developed by a five-member team for INNOVPOST 2024.",
    categories: ["computer-vision-ai", "software-engineering"],
    primaryCategory: "computer-vision-ai",
    tags: ["ResNet34", "ResNet50V2", "Transfer learning", "Class weights", "Flask", "React", "Vite", "Computer vision", "INNOVPOST 2024"],
    highlight: "First place · INNOVPOST 2024 · AI & Computer Vision",
    repoUrl: "https://github.com/AnouarAdel/NeuralDetect-Package-Damage-Detection",
    dataset: {
      name: "Damaged and Intact Packages (Kaggle)",
      url: "https://www.kaggle.com/datasets/rahulm7323/damaged-and-intact-packages",
    },
  },
  {
    slug: "eye-disease-classification",
    title: "Eye Disease Classification with VGG19",
    summary:
      "A VGG19-based CNN that classifies retinal images into Glaucoma, Cataract, Diabetic Retinopathy, and Normal categories, using data preprocessing, augmentation, and transfer learning.",
    categories: ["computer-vision-ai"],
    primaryCategory: "computer-vision-ai",
    tags: ["VGG19", "CNN", "Transfer learning", "Data augmentation"],
    repoUrl:
      "https://github.com/hananiiii/Eye-Disease-Classification-Using-Deep-Learning-VGG19-",
  },
  {
    slug: "blood-cell-cancer-classification",
    title: "Blood Cell Cancer Classification",
    summary:
      "CNN and EfficientNetB3 models, fine-tuned to classify blood cell images from a Kaggle dataset into cancerous and non-cancerous categories, using transfer learning and data augmentation.",
    categories: ["computer-vision-ai"],
    primaryCategory: "computer-vision-ai",
    tags: ["CNN", "EfficientNetB3", "Transfer learning", "Data augmentation"],
    repoUrl:
      "https://github.com/hananiiii/Blood-Cell-Cancer-Classification-Using-CNN-and-EfficientNetB3",
  
  },
  {
    slug: "agentic-rag-medical",
    title: "Agentic RAG for Medical Questions",
    summary:
      "An agentic RAG pipeline that routes medical questions to a Q&A knowledge base, a device-manuals knowledge base, or live web search, with automatic relevance checking and retry logic.",
    categories: ["computer-vision-ai"],
    primaryCategory: "computer-vision-ai",
    tags: ["LangGraph", "ChromaDB", "Groq", "RAG"],
    repoUrl: "https://github.com/hananiiii/agentic-rag-medical",
  },
  {
    slug: "rag-customer-support-assistant",
    title: "RAG-Powered Customer Support Assistant",
    summary:
      "A retrieval-augmented chatbot that answers customer questions about policies, shipping, returns, and warranties from a knowledge-base PDF, streaming its answers with source page references.",
    categories: ["software-engineering", "computer-vision-ai"],
    primaryCategory: "computer-vision-ai",
    tags: ["Streamlit", "LangChain", "Groq", "Chroma"],
    repoUrl: "https://github.com/hananiiii/RAG-powered-customer-support-agent",
  },
  {
    slug: "khidmatic",
    title: "KhidmaTic — Home Maintenance Management Platform",
    summary:
      "A platform connecting customers with home-maintenance service providers, with workflows for reservations, payments, reviews, reporting, and administrative approval.",
    categories: ["software-engineering"],
    primaryCategory: "software-engineering",
    tags: ["Node.js", "Spring Boot", "Laravel", "Django", "REST APIs", "Apache Kafka", "Docker", "Microservices"],
    role: "Team Leader & Full-Stack Developer",
    repoUrl: "https://github.com/KhidmaTic",
  },
  {
    slug: "dermscan",
    title: "DermScan — Dermatology Triage Platform",
    summary:
      "A web platform connecting patients, doctors, and administrators through structured patient assessment, triage, information-management, and administrative workflows.",
    categories: ["software-engineering"],
    primaryCategory: "software-engineering",
    tags: ["Full-stack development", "Role-based workflows", "Patient triage", "Database integration", "Authentication", "Privacy and consent"],
    role: "Full-Stack Developer",
    repoUrl: "https://github.com/DermScan-project",
  },

  // To add a sample entry while you gather details, copy this and set
  // `placeholder: true` (it shows a dashed card with no "View project" link):
  // {
  //   slug: "software-project-1",
  //   title: "Software engineering project",
  //   summary: "Sample entry. Replace with a real summary.",
  //   categories: ["software-engineering"],
  //   primaryCategory: "software-engineering",
  //   tags: ["Add technologies"],
  //   placeholder: true,
  // },
];

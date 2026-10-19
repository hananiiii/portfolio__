/**
 * Detailed content for /projects/[slug].
 *
 * HOW TO ADD A PROJECT
 * 1. Add its overview entry in src/data/projects.ts (this gives it a card and a slug).
 * 2. Add an entry below under the same slug. Every field is optional:
 *    a section only appears if you provide it, so a computer vision experiment
 *    and a software app can use completely different sections.
 * 3. A project with NO entry here still gets a simple detail page built from
 *    its overview data (summary, tags, source code, dataset, highlight).
 *
 * INTEGRITY: only put verified facts in `outcomes.results`. Use
 * `placeholder: true` on a section to show a clear "to be added" note instead
 * of leaving it blank.
 */

export type ItemStatus = "implemented" | "in-progress" | "planned" | "unconfirmed";

export const statusLabels: Record<ItemStatus, string> = {
  implemented: "Implemented",
  "in-progress": "In progress",
  planned: "Planned",
  unconfirmed: "Status to be confirmed",
};

/** An image, diagram, or screenshot. Leave `src` out to show a labeled placeholder. */
export type Figure = {
  /** File in public/images/projects/, e.g. "/images/projects/noortech-prototype.jpg". */
  src?: string;
  alt: string;
  caption: string;
  /** Text shown inside the placeholder box. */
  placeholderLabel?: string;
};

export type ArchitectureStage = { label: string; nodes: string[] };

export type ArchitectureComponent = {
  name: string;
  description: string;
  status: ItemStatus;
};

export type ProjectTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ProjectDetail = {
  subtitle?: string;
  quickFacts?: { label: string; value: string }[];
  heroActions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  demoVideo?: { src?: string; title: string; caption: string };
  /** Large image under the page title. */
  heroFigure?: Figure;
  overview?: string[];
  /** Extra images shown under the overview. */
  figures?: Figure[];
  problem?: string[];
  architecture?: {
    intro?: string;
    /** Provide a real diagram image, or a conceptual diagram built from stages. */
    diagram:
      | { kind: "image"; figure: Figure }
      | { kind: "conceptual"; stages: ArchitectureStage[]; caption: string };
    figures?: Figure[];
    components?: ArchitectureComponent[];
  };
  approach?: {
    intro?: string;
    items: { title: string; text: string }[];
    note?: string;
    placeholder?: boolean;
  };
  /** Work you did yourself, kept separate from planned work. */
  contributions?: {
    implemented?: string[];
    inProgress?: string[];
    planned?: string[];
    note?: string;
    placeholder?: boolean;
  };
  technologies?: { group: string; items: string[] }[];
  outcomes?: {
    /** Verified achievements, e.g. competition results. */
    achievements?: string[];
    /** Verified evaluation results only (metric, value, and how it was measured). */
    results?: { label: string; value: string; context?: string }[];
    statusNote?: string;
    placeholder?: boolean;
  };
  related?: {
    title: string;
    kind: string;
    /** e.g. "Under review". Never write "Published" unless it is. */
    status?: string;
    description?: string;
    href?: string;
  }[];
  /** Only verified, public links. */
  links?: {
    label: string;
    href: string;
    kind: "repository" | "demo" | "app" | "paper" | "dataset" | "other";
  }[];
  /** Any extra sections specific to this project. */
  extraSections?: {
    id: string;
    title: string;
    paragraphs?: string[];
    items?: string[];
    tables?: ProjectTable[];
  }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  noortech: {
    subtitle: "NoorTech: AI-Powered Assistive Wearable for the Visually Impaired",
    quickFacts: [
      { label: "Academic work", value: "Master’s & Engineering thesis · ESI-SBA · 2025–2026" },
      { label: "Edge device", value: "Raspberry Pi 4" },
      { label: "Dataset", value: "15 custom classes · ~17,000 images" },
      { label: "Detection result", value: "80.9% mAP@0.5 on held-out test set" },
    ],
    heroActions: [
      { label: "Thesis entry", href: "/publications#theses", variant: "primary" },
      { label: "Dataset on Zenodo", href: "https://doi.org/10.5281/zenodo.21499005", variant: "secondary" },
      { label: "Contact / collaborate", href: "/contact", variant: "secondary" },
    ],
    overview: [
      "NoorTech is a chest-mounted, offline-first wearable that combines computer vision, ultrasonic sensing, speech, OCR, GPS, and emergency communication. It brings these functions together in an affordable assistive platform, with core assistance available locally on the device.",
      "The system combines a Raspberry Pi 4, custom navigation dataset, on-device detection, hybrid cloud services, and a caregiver mobile application. Its interface supports hands-free interaction and asks the user for consent before video streaming, navigation, or road-crossing assistance.",
    ],
    figures: [
      {
        src: "/images/belt.jpg",
        alt: "Front view of the NoorTech chest-mounted prototype",
        caption: "Close-up of the NoorTech chest-mounted prototype.",
      },
      {
        src: "/images/beltmounted.png",
        alt: "NoorTech chest-mounted prototype worn by a person",
        caption: "NoorTech prototype worn for a demonstration.",
      },
      {
        src: "/images/hardware.jpg",
        alt: "Photograph showing the NoorTech wearable hardware components",
        caption: "Hardware: Raspberry Pi 4, camera, ultrasonic sensors, A9G module, and accessories.",
        placeholderLabel: "Add a photograph of the real hardware components",
      },
      {
        src: "/images/recall-curve.png.png",
        alt: "NoorTech YOLO precision-recall curve",
        caption: "Precision-recall curve for the object detection model.",
        placeholderLabel: "Add the precision-recall curve image",
      },
      {
        src: "/images/confusion_matrix.png",
        alt: "NoorTech object detection confusion matrix",
        caption: "Confusion matrix for the object detection model.",
      },
      {
        src: "/images/cardetection.jpg",
        alt: "NoorTech object detection example identifying a car in a street scene",
        caption: "Object detection example: car.",
      },
      {
        src: "/images/multidetection.jpg",
        alt: "NoorTech detecting a pedestrian, car, crosswalk, and traffic light",
        caption: "Multiple detections at a crosswalk.",
      },
      {
        src: "/images/stairsdetection.jpg",
        alt: "NoorTech object detection example identifying stairs",
        caption: "Object detection example: stairs.",
      },
    ],
    architecture: {
      intro: "System architecture across edge, connectivity, cloud, and application layers.",
      diagram: {
        kind: "image",
        figure: {
          src: "/images/hardware_architecture_bw%20(1).png",
          alt: "NoorTech four-layer system architecture diagram",
          caption: "NoorTech hardware architecture.",
        },
      },
      figures: [
        {
          src: "/images/general_architecture.png",
          alt: "NoorTech general system architecture showing edge, connectivity, cloud, and application layers",
          caption: "NoorTech general system architecture.",
        },
      ],
    },
    approach: {
      intro:
        "The hybrid-intelligence design keeps core assistance available offline and uses online services as enhancements when connectivity is available.",
      items: [
        { title: "Obstacle detection", text: "YOLOv5n combines camera detections with three ultrasonic sensors; spoken alerts provide object, distance, and direction." },
        { title: "Voice interaction", text: "Offline Vosk speech recognition and Piper speech synthesis support English, French, and Arabic, with the wake phrase “belt start.”" },
        { title: "Scene description", text: "Groq VLM provides online scene descriptions in about three seconds, with a local YOLO-based fallback." },
        { title: "OCR text reading", text: "Tesseract reads Arabic, French, and English text with an OpenCV preprocessing pipeline." },
        { title: "Safe road crossing", text: "Offline crosswalk and traffic-light detection feed a finite-state machine, with user consent before assistance begins." },
        { title: "Navigation", text: "OpenRouteService provides turn-by-turn guidance, saved places, and POI search, with a smartphone GPS fallback." },
        { title: "SOS", text: "Holding the SOS button for three seconds sends an A9G GSM SMS and Twilio message with a Maps link, then starts an automatic live stream." },
        { title: "Caregiver app", text: "A React Native and Expo app provides live tracking, live video, messaging, contact and place management, and alerts." },
      ],
    },
    contributions: {
      implemented: [
        "Designed and assembled the hardware prototype.",
        "Built the software stack, backend, and caregiver mobile application.",
        "Prepared and annotated the custom dataset and trained and evaluated the object-detection models.",
        "Integrated the edge, connectivity, cloud, and application layers.",
      ],
    },
    technologies: [
      { group: "Edge", items: ["Python", "OpenCV", "ONNX Runtime", "Vosk", "Piper", "Tesseract"] },
      { group: "Connectivity", items: ["MQTT", "WebSocket", "A9G GPS/GSM"] },
      { group: "Cloud", items: ["FastAPI", "PostgreSQL", "Groq VLM", "OpenRouteService", "Twilio"] },
      { group: "Application", items: ["React Native", "Expo"] },
      { group: "Hardware", items: ["Raspberry Pi 4", "Pi Camera", "3× HC-SR04", "A9G GPS/GSM", "SOS button", "USB microphone", "Bluetooth earphone", "Power bank"] },
    ],
    extraSections: [
      {
        id: "dataset",
        title: "Assistive Belt Outdoor Navigation Dataset for Visually Impaired",
        paragraphs: [
          "15-Class Object Detection Dataset · ~17,000 images · ~1,500 instances per class · YOLO format.",
          "I created the dataset. About 40% of the images were collected and manually annotated in Label Studio; the remaining images were converted from public sources. Training images were augmented fourfold.",
          "Lachoub, H. (2026). Version 1.0.0 [Dataset]. Zenodo.",
        ],
        items: ["Related paper: “NoorTech: An AI-Powered Wearable Device for Visually Impaired Persons” · submitted and under review."],
      },
      {
        id: "model-comparison",
        title: "Model comparison",
        paragraphs: [
          "YOLOv5n performed better than YOLOv11n across all four evaluated metrics. YOLOv5n also used 37% fewer parameters and had a 30% smaller model size.",
        ],
        tables: [
          {
            caption: "Available YOLOv5n and YOLOv11n comparison results",
            headers: ["Measure", "YOLOv5n", "YOLOv11n"],
            rows: [
              ["Held-out test mAP@0.5", "80.9%", "78.2ù%"],
              ["Four-metric comparison", "Better on all four metrics", "Compared model"],
              ["Parameter count", "37% fewer parameters", "Baseline"],
              ["Model size", "30% smaller", "Baseline"],
            ],
          },
          
         
        ],
      },
      {
        id: "offline-online",
        title: "Offline-first and hybrid intelligence",
        paragraphs: [
          "NoorTech follows an offline-first, hybrid-intelligence design: every cloud feature has a local or device fallback. When connectivity is available, online services enhance scene understanding, navigation, messaging, and caregiver coordination.",
        ],
        tables: [
          {
            caption: "NoorTech offline and online module behavior",
            headers: ["Module", "Offline mode", "Online enhancement"],
            rows: [
              ["Obstacle detection", "YOLOv5n and three ultrasonic sensors with spoken alerts", "—"],
              ["Voice interaction", "Vosk speech recognition and Piper speech synthesis", "—"],
              ["Scene description", "YOLO-based fallback", "Groq VLM scene description"],
              ["OCR text reading", "Tesseract with OpenCV preprocessing", "—"],
              ["Road-crossing assistance", "Crosswalk and traffic-light detection with finite-state machine", "—"],
              ["Navigation", "Smartphone GPS fallback", "OpenRouteService guidance, saved places, and POI search"],
              ["SOS", "A9G GSM SMS with Maps link", "Twilio messages and automatic live stream"],
            ],
          },
        ],
      },
    ],
    related: [
      {
        title: "NoorTech: An AI-Powered Wearable Device for Visually Impaired Persons",
        kind: "Manuscript",
        status: "Submitted and under review",
      },
      {
        title: "Master’s and Engineering theses",
        kind: "Thesis work",
        status: "ESI-SBA · 2025–2026",
        description: "Supervisors: Dr. Manel Baba Ahmed and Pr. Abdelatif Rahmoun.",
        href: "/publications#theses",
      },
      {
        title: "Research interests",
        kind: "Page",
        description: "How NoorTech connects to my broader research directions.",
        href: "/research",
      },
    ],
    links: [
      {
        label: "NoorTech 15-class dataset on Zenodo",
        href: "https://doi.org/10.5281/zenodo.21499005",
        kind: "dataset",
      },
       {
        label: "NoorTech GitHub Repository",
        href: "https://github.com/NoorTech-Blind-assistant",
        kind: "repository",
      },
       {
        label: "NoorTech ProtoMarket Winner Announcement",
        href: "https://www.linkedin.com/posts/esisba_proud-to-celebrate-our-protomarket-2026-activity-7516509605959700480-I3ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYoxH0BF6pa--xCc2EDiB2hRLNGABZKZ_g",
        kind: "other",
      },
      // Add verified URLs here when available: demo video, source repository,
      // and the ProtoMarket winner announcement.
    ],
  },
  "damaged-package-detection": {
    subtitle: "First-place winner · INNOVPOST 2024 · AI & Computer Vision Track",
    quickFacts: [
      { label: "Event", value: "INNOVPOST 2024 · Algérie Poste" },
      { label: "Result", value: "First place · AI & Computer Vision" },
      { label: "Team", value: "Five members · team lead" },
      { label: "Test accuracy", value: "85.7%" },
    ],
    heroActions: [
      { label: "Read the event article", href: "https://www.indjazat.com/hackathon-innovpost-2024-des-idees-neuves-pour-une-poste-connectee-et-avant-gardiste/", variant: "primary" },
      { label: "View the source repository", href: "https://github.com/AnouarAdel/NeuralDetect-Package-Damage-Detection", variant: "secondary" },
    ],
    overview: [
      "NeuralDetect is a full-stack system for detecting damaged or tampered postal packages, developed for INNOVPOST 2024 by a five-member team led by Hanane.",
      "The team placed first in the AI and Computer Vision track. Event coverage reported more than 300 student teams, 35 startups participating and only 16 Winners.",
    ],
    figures: [
      { src: "/images/innov/picture%20(1).jpg", alt: "NeuralDetect identifies visible damage on postal parcels", caption: "NeuralDetect damage detection example." },
      { src: "/images/innov/picture%20(2).jpg", alt: "NeuralDetect web interface classifying a package as not damaged", caption: "NeuralDetect prediction interface." },
    ],
    approach: {
      intro: "The project repository documents an iterative model workflow, from a baseline to a class-imbalance-aware transfer-learning model and a web demonstration.",
      items: [
        { title: "Baseline model", text: "A ResNet34 built from scratch established a baseline. The repository reports overfitting and 17% recall for damaged packages." },
        { title: "Optimized model", text: "Transfer learning with ResNet50V2, class weights, and a ReduceLROnPlateau learning-rate scheduler achieved 78% recall for damaged packages and 85.7% final test accuracy." },
        { title: "Prediction API", text: "A Flask REST API loads the final Keras model and serves predictions." },
        { title: "Web demonstration", text: "The responsive React and Vite interface includes a drag-and-drop image uploader, with Tailwind CSS styling and Framer Motion animations." },
      ],
    },
    technologies: [
      { group: "Machine learning", items: ["Python", "ResNet34", "ResNet50V2", "Transfer learning", "TensorFlow", "Keras", "Pillow"] },
      { group: "Backend", items: ["Flask", "REST API"] },
      { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Framer Motion"] },
    ],
    extraSections: [
      {
        id: "evaluation",
        title: "Model evaluation",
        paragraphs: ["The repository reports recall for the damaged-package class and final test accuracy for the optimized model."],
        tables: [{ caption: "Reported model results", headers: ["Measure", "ResNet34 baseline", "ResNet50V2 optimized"], rows: [["Damaged-package recall", "17%", "78%"], ["Test accuracy", "-", "85.7%"]] }],
      },
    ],
    links: [
      { label: "INNOVPOST event article (French)", href: "https://www.indjazat.com/hackathon-innovpost-2024-des-idees-neuves-pour-une-poste-connectee-et-avant-gardiste/", kind: "other" },
      { label: "NeuralDetect repository", href: "https://github.com/AnouarAdel/NeuralDetect-Package-Damage-Detection", kind: "repository" },
      { label: "NeuralDetect Dataset", href: "https://www.kaggle.com/datasets/rahulm7323/damaged-and-intact-packages", kind: "dataset" },

    ],
  },
  khidmatic: {
    subtitle: "Home Maintenance Management Platform",
    overview: [
      "KhidmaTic is a home-maintenance platform connecting customers with service providers.",
      "As team leader and full-stack developer, Hanane helped shape workflows for customer and provider management, reservations, payments, reviews, reporting, and administrative approval.",
    ],
    approach: {
      items: [
        { title: "Platform workflows", text: "Designed business workflows covering customer and provider management, reservations, payments, reviews, reporting, and administrative approval." },
        { title: "Service architecture", text: "Designed a microservices architecture with services communicating through REST APIs and Apache Kafka, and used Docker to containerize the application." },
      ],
    },
    contributions: {
      implemented: [
        "Led the development team.",
        "Developed frontend and backend components, REST APIs, database integrations, and business logic.",
      ],
    },
    technologies: [
      { group: "Backend and services", items: ["Node.js", "Spring Boot", "Laravel", "Django", "REST APIs", "Apache Kafka"] },
      { group: "Deployment", items: ["Docker", "Microservices"] },
    ],
    links: [
      { label: "KhidmaTic GitHub organization", href: "https://github.com/KhidmaTic", kind: "repository" },
    ],
  },
  dermscan: {
    subtitle: "Dermatology Triage Platform",
    overview: [
      "DermScan is a web platform connecting patients, doctors, and administrators through structured application workflows.",
      "The platform supports patient assessment and triage, information management, and administrative operations, with attention to authentication, privacy, and consent.",
    ],
    contributions: {
      implemented: [
        "Developed frontend and backend components.",
        "Implemented role-based workflows for patient assessment, triage, information management, and administrative operations.",
        "Integrated database operations and authentication with attention to privacy and consent.",
      ],
    },
    links: [
      { label: "DermScan GitHub organization", href: "https://github.com/DermScan-project", kind: "repository" },
    ],
  },
};

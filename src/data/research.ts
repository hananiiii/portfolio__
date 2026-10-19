export type ResearchInterest = { title: string; description: string };
export type PracticeItem = {
  title: string;
  kind: string;
  description: string;
  href?: string;
};
export type FutureDirection = { title: string; description: string };

export const researchInterests: ResearchInterest[] = [
  {
    title: "Multimodal and Context-Aware AI",
    description:
      "How systems can combine signals such as vision, audio, and other sensor streams, and use context (the environment, the task, the state of the device) to interpret them. I am interested in handling noisy, missing, or conflicting modalities, and in estimating when an input is too uncertain to act on.",
  },
  {
    title: "Sensor Fusion",
    description:
      "Combining heterogeneous and imperfect sensor data, such as camera, inertial, range, or audio measurements, into a reliable picture of what is happening. I am interested in fusion that tolerates noise, drift, and dropped sensors, and in how the choice of fusion strategy trades accuracy against the compute and power available on the device.",
  },
  {
    title: "Efficient Edge AI",
    description:
      "Running models on devices with limited compute, memory, and power. This includes lightweight architectures and techniques such as quantization, pruning, and distillation, and evaluating efficiency in terms of latency, memory footprint, and energy per inference rather than accuracy alone.",
  },
  {
    title: "IoT and Embedded Systems",
    description:
      "Systems built from constrained, connected devices: microcontrollers and single-board computers, low-power sensing, and communication between nodes and gateways. I am interested in the engineering that lets intelligence run reliably on such platforms, including firmware, real-time constraints, and power management.",
  },
  {
    title: "Adaptive Inference and Hardware-Aware Optimization",
    description:
      "How a system can change the amount of computation it spends depending on the input and the situation, for example through early exits, dynamic model selection, or varying precision, and how models and deployment can be matched to the characteristics of the target hardware, such as accelerators, memory hierarchy, and power budgets.",
  },
  {
    title: "Pipelined Sensing and Encoding",
    description:
      "Treating sensing, encoding, and inference as one pipeline instead of separate stages. Questions include overlapping acquisition with processing, deciding what to capture and at what fidelity, and reducing the end-to-end latency and energy of the whole path from sensor to decision.",
  },
  {
    title: "Edge–Cloud Collaboration and Computation Offloading",
    description:
      "Deciding what runs on the device and what runs remotely, and when that decision should change. Relevant factors include network variability, response time, resource use, and keeping sensitive data local when privacy matters.",
  },
  {
    title: "Human–AI Interaction",
    description:
      "How intelligent systems respond to people in real time, and how system-level choices such as latency, uncertainty, and adaptation shape usability and trust. I approach this as part of systems design, alongside the technical areas above rather than apart from them.",
  },
];

export const researchQuestions: string[] = [
  "How can multimodal AI adapt its inference strategy to context, input uncertainty, and available computational resources?",
  "How can sensing, encoding, and inference be coordinated to improve end-to-end latency and energy efficiency?",
  "How should computation be distributed between edge and cloud systems to balance accuracy, responsiveness, resource use, and privacy?",
  "How can hardware-aware optimization improve real-world performance without unnecessarily sacrificing task capability?",
];

export const practiceItems: PracticeItem[] = [
  {
    title: "Edge AI for Assistive Technologies: A Survey",
    kind: "Master’s thesis, 2026 (not published)",
    description:
      "A survey of Edge AI in the context of assistive technologies. It gave me a broad view of the field and of the constraints that on-device intelligence has to respect.",
  },
  {
    title: "AI-powered Assistive Wearable System for the Visually Impaired",
    kind: "Engineering thesis",
    description:
      "The engineering project in which I built an assistive wearable system, moving from a design idea to an implemented system.",
  },
  {
    title: "NoorTech",
    kind: "Project",
    description:
      "A wearable assistive system that brought together computer vision, embedded computing, sensing, speech, and edge intelligence. It is one project that helped shape my interests; my research direction is broader than any single application.",
    href: "/projects",
  },
];

export const futureDirections: FutureDirection[] = [
  {
    title: "Resource-efficient multimodal systems",
    description:
      "Multimodal systems that remain useful when memory, compute, power, or bandwidth are limited.",
  },
  {
    title: "Context-aware and adaptive inference",
    description:
      "Systems that adjust how they compute according to context and uncertainty.",
  },
  {
    title: "Hardware–software co-design",
    description:
      "Designing models, software, and hardware choices together instead of one after another.",
  },
  {
    title: "Edge–cloud intelligence and computation offloading",
    description:
      "Coordinating device and remote computation to balance responsiveness, resource use, and privacy.",
  },
];
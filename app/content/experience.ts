export type Experience = {
  id: string;
  name: string;
  kind: "employment" | "project";
  description: string;
  tech: string[];
  href: string;
};

// Add employment and external projects here. The list scrolls when it grows beyond the viewport.
export const experiences: Experience[] = [
  {
    id: "independent",
    name: "Independent Work",
    kind: "project",
    description:
      "Selected collaborations and independently built digital products, from early concepts through polished, production-ready experiences.",
    tech: ["Unity", "C#", "Blender", "Node.js", "JavaScript", "TypeScript", "React"],
    href: "https://github.com/lsahatqija",
  },
  {
    id: "yoloway-senior-software-developer",
    name: "Senior Software Developer — Yoloway",
    kind: "employment",
    description:
      "At Yoloway, I build scalable backend applications, multiplayer Unity solutions, immersive XR experiences, and real-time Unreal Engine simulations. Alongside development, I mentor team members and help strengthen the team's software and game development practices.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Unity",
      "FishNet",
      "EdgeGap",
      "Unreal Engine",
      "Oculus",
      "WebGL",
      "VR",
      "Mixed Reality",
    ],
    href: "",
  },
  {
    id: "aab-professor",
    name: "Professor — Universiteti AAB",
    kind: "employment",
    description:
      "As head of the Video Game Development and Animation bachelor's program, I oversee its academic direction and keep the curriculum aligned with industry practices. My role also includes teaching programming and scripting across all three years and mentoring students through practical game development work.",
    tech: [
      "Game Development",
      "Programming",
      "Scripting",
      "Curriculum Development",
      "Academic Mentoring",
    ],
    href: "",
  },
  {
    id: "witcc-adjunct-professor",
    name: "Adjunct Professor — Western Iowa Tech Community College",
    kind: "employment",
    description:
      "In this remote teaching role, I deliver programming and video-game scripting courses built around practical, industry-relevant skills. Through hands-on projects and mentorship, I help students develop experience with professional game development tools and workflows.",
    tech: [
      "Unity",
      "Unreal Engine",
      "Programming",
      "Game Development",
      "Curriculum Development",
      "Remote Teaching",
    ],
    href: "",
  },
  {
    id: "linkplus-senior-unity-developer",
    name: "Senior Unity Developer — LinkPlus IT",
    kind: "employment",
    description:
      "Working on an augmented-reality driving system for a global automotive manufacturer, I helped integrate real-time traffic information and points of interest into a windshield display. My responsibilities included refactoring AR-assisted driver features, improving performance, collaborating across disciplines, and maintaining technical documentation.",
    tech: [
      "Unity",
      "C#",
      "Augmented Reality",
      "Real-Time 3D",
      "Automotive Software",
      "Technical Documentation",
    ],
    href: "",
  },
  {
    id: "zonda-game-developer",
    name: "Game Developer — Zonda Creative Studio",
    kind: "employment",
    description:
      "During my time at Zonda, I developed and shipped mobile projects for Android and iOS in collaboration with publishing partners. The role covered real-time 3D development in Unity and Unreal Engine, as well as mentoring junior developers and supporting the wider development team.",
    tech: [
      "Unity",
      "Unreal Engine",
      "C#",
      "Android",
      "iOS",
      "Real-Time 3D",
      "Mobile Game Development",
    ],
    href: "",
  },
  {
    id: "blackout-software-developer",
    name: "Software Developer — Blackout Softworks",
    kind: "employment",
    description:
      "At Blackout Softworks, I developed multiple Unity projects for iOS in collaboration with clients and publishing partners. This included engineering CRUX for Steam and building a custom physics system around its core gameplay mechanics.",
    tech: ["Unity", "C#", "iOS", "Steam", "Game Development", "Physics Systems"],
    href: "",
  },
  {
    id: "gemalto-monitoring-engineer",
    name: "Data Generation Monitoring Engineer — Gemalto",
    kind: "employment",
    description:
      "At Gemalto, I designed and deployed a Zabbix-based performance-monitoring system for distributed SIM-card production facilities. Building on the collected data, I created custom reporting tools, identified opportunities for software improvement, and led testing for a database migration from Oracle Database to MariaDB.",
    tech: [
      "Zabbix",
      "PHP",
      "Python",
      "Oracle Database",
      "MariaDB",
      "Performance Monitoring",
      "Data Analysis",
      "Linux",
    ],
    href: "",
  },
];

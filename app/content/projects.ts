export type Project = {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  mark: string;
  color: string;
};

// Replace these starter entries with the final project names, logos, copy, and URLs.
export const projects: Project[] = [
  {
    id: "project-crux",
    name: "Crux",
    label: "Steam game",
    description:
      "Retro-styled FPS with roguelike elements. Explore a nightmare gauntlet, survive against hostile creatures, and compete for high scores.",
    href: "https://store.steampowered.com/app/2293200/CRUX/",
    mark: "01",
    color: "#d84a38",
  },
  {
    id: "project-two",
    name: "Project Two",
    label: "Digital product",
    description:
      "Use this space to explain the central idea behind the project and the problem it solves.",
    href: "#contact",
    mark: "02",
    color: "#177d67",
  },
  {
    id: "project-three",
    name: "Project Three",
    label: "Website",
    description:
      "Keep project summaries short and specific. The destination link can point to any external site.",
    href: "#contact",
    mark: "03",
    color: "#315ca8",
  },
  {
    id: "project-four",
    name: "Project Four",
    label: "Experiment",
    description:
      "This starter card demonstrates how the carousel behaves when more projects are added.",
    href: "#contact",
    mark: "04",
    color: "#8f4f8f",
  },
];

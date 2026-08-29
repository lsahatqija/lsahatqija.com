export type Project = {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  mark: string;
  color: string;
};

export type PersonalLink = {
  label: string;
  href: string;
  description: string;
};

// Replace these starter entries with the final project names, logos, copy, and URLs.
export const projects: Project[] = [
  {
    id: "project-one",
    name: "Project One",
    label: "Web application",
    description:
      "A concise description of what this project does, who it is for, and why it is worth visiting.",
    href: "#contact",
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

// Replace the placeholder destinations before publishing.
export const personalLinks: PersonalLink[] = [
  { label: "GitHub", href: "https://github.com/", description: "Code and open-source work" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", description: "Professional profile" },
  { label: "Email", href: "mailto:hello@lsahatqija.com", description: "Start a conversation" },
];

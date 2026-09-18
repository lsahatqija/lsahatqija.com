export type Project = {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  icon: "gamepad" | "radio" | "code" | "globe" | "app";
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
    icon: "gamepad",
    mark: "01",
    color: "#d84a38",
  },
  {
    id: "project-raidio",
    name: "RaidiantFM",
    label: "Experiment",
    description:
      "A full-stack web app that adds radio-style personalized commentary to your Spotify playlists.",
    href: "https://github.com/lsahatqija/raidiohost-webplayer", //https://github.com/lsahatqija/raidiohost-node
    icon: "radio",
    mark: "02",
    color: "#8f4f8f",
  },
  {
    id: "project-arbarea",
    name: "Heroes of Arbarea",
    label: "Steam game",
    description:
      "A work-in-progress idle party-based RPG set in the fantasy world of Arbarea and lives on your taskbar as an overlay.",
    href: "https://lsah.itch.io/heroes-of-arbarea",
    icon: "gamepad",
    mark: "04",
    color: "#8f4f8f",
  },
  {
    id: "project-evosystem",
    name: "Evosystem",
    label: "Experiment",
    description:
      "An experimental simulation of an evolving ecosystem, where creatures adapt and evolve over time while making real-time decisions based on their own observations of the world, built on Unity using GOAP.",
    href: "https://github.com/lsahatqija/evosystem",
    icon: "globe",
    mark: "03",
    color: "#8f4f8f",
  },

  {
    id: "project-expensify",
    name: "Expensify",
    label: "Digital product",
    description: "A work-in-progress web app for tracking expenses and managing budgets.",
    href: "",
    icon: "code",
    mark: "05",
    color: "#177d67",
  },
  {
    id: "project-medikeep",
    name: "MediKeep",
    label: "Website",
    description: "A work-in-progress web app for managing medical records and appointments.",
    href: "",
    icon: "app",
    mark: "06",
    color: "#315ca8",
  },
];

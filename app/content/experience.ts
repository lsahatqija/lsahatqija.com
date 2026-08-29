export type Experience = {
  id: string;
  name: string;
  kind: "employment" | "project";
  description: string;
  href: string;
};

// Add employment and external projects here. The list scrolls when it grows beyond the viewport.
export const experiences: Experience[] = [
  {
    id: "independent-product-work",
    name: "Independent product work",
    kind: "project",
    description:
      "Selected collaborations and independently built digital products, from early concepts through polished, production-ready experiences.",
    href: "https://github.com/",
  },
  {
    id: "product-engineer",
    name: "Product engineer",
    kind: "employment",
    description:
      "Designing and shipping thoughtful web products with a focus on resilient interfaces, clear systems, and the details that make software pleasant to use.",
    href: "https://www.linkedin.com/",
  },
  {
    id: "open-source",
    name: "Open-source contributions",
    kind: "project",
    description:
      "Small tools, fixes, and shared experiments contributed to the wider web development community.",
    href: "https://github.com/",
  },
];

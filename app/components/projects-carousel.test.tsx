import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { projects } from "~/content/site";
import { ProjectsCarousel } from "./projects-carousel";

describe("ProjectsCarousel", () => {
  it("shows the selected project's details", () => {
    render(<ProjectsCarousel projects={projects} />);

    const secondProject = screen.getByRole("button", { name: /Project Two/ });
    fireEvent.click(secondProject);

    expect(secondProject).toHaveAttribute("aria-expanded", "true");
    expect(
      within(screen.getByRole("article")).getByRole("heading", { name: "Project Two" }),
    ).toBeVisible();
    expect(screen.getByRole("link", { name: /Visit project/ })).toHaveAttribute("target", "_blank");
  });
});

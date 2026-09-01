import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { projects } from "~/content/site";
import { ProjectsCarousel } from "./projects-carousel";

describe("ProjectsCarousel", () => {
  it("renders projects as linked graphic cards", () => {
    render(<ProjectsCarousel projects={projects} />);

    expect(screen.getByRole("heading", { name: "Project Two" })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /Explore project/ })).toHaveLength(projects.length);
    expect(screen.getByRole("button", { name: "Previous project" })).toBeDisabled();
  });
});

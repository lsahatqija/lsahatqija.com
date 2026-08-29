import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "~/components/ui/button";
import type { Project } from "~/content/site";
import { cn } from "~/lib/utils";

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? "");
  const trackRef = useRef<HTMLDivElement>(null);
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.75, 520),
      behavior: "smooth",
    });
  };

  if (!selected) return null;

  return (
    <div className="project-browser">
      <div className="carousel-heading">
        <p className="eyebrow">Selected work</p>
        <div className="carousel-controls" aria-label="Carousel controls">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll(-1)}
            aria-label="Previous projects"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll(1)}
            aria-label="Next projects"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div ref={trackRef} className="project-track" role="list" aria-label="Projects">
        {projects.map((project) => {
          const isSelected = project.id === selected.id;
          return (
            <div key={project.id} role="listitem">
              <button
                className={cn("project-tile", isSelected && "is-selected")}
                type="button"
                aria-expanded={isSelected}
                aria-controls="project-details"
                onClick={() => setSelectedId(project.id)}
              >
                <span
                  className="project-mark"
                  style={{ backgroundColor: project.color }}
                  aria-hidden="true"
                >
                  {project.mark}
                </span>
                <span className="project-name">{project.name}</span>
                <span className="project-label">{project.label}</span>
              </button>
            </div>
          );
        })}
      </div>

      <article id="project-details" className="project-details" aria-live="polite">
        <div>
          <p className="eyebrow">{selected.label}</p>
          <h3>{selected.name}</h3>
        </div>
        <p>{selected.description}</p>
        <a className="text-link" href={selected.href}>
          Visit project <ExternalLink aria-hidden="true" />
        </a>
      </article>
    </div>
  );
}

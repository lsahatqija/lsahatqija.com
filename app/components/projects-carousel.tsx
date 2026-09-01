import { ArrowLeft, ArrowRight, Code2, Gamepad2, Globe2, Radio } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "~/content/site";

const icons = [Gamepad2, Radio, Code2, Globe2];
const tones = ["tone-teal", "tone-gold", "tone-pink", "tone-teal"];

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const update = () => {
    const track = trackRef.current;
    if (!track?.children.length) return;
    const step = (track.children[0] as HTMLElement).offsetWidth + 22;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    setIndex(
      atEnd
        ? projects.length - 1
        : Math.min(projects.length - 1, Math.round(track.scrollLeft / step)),
    );
  };
  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.children[0] as HTMLElement | undefined;
    if (track && card)
      track.scrollBy({ left: direction * (card.offsetWidth + 22), behavior: "smooth" });
  };
  return (
    <>
      <div className="section-heading">
        <h2 id="projects-title">Selected projects</h2>
        <span className="heading-line" aria-hidden="true" />
        <div className="carousel-controls">
          <span className="counter" aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            className="dg-button icon-only tone-gold"
            type="button"
            onClick={() => move(-1)}
            disabled={index === 0}
            aria-label="Previous project"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            className="dg-button icon-only"
            type="button"
            onClick={() => move(1)}
            disabled={index === projects.length - 1}
            aria-label="Next project"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="carousel-track"
        role="list"
        aria-label="Projects"
        onScroll={update}
      >
        {projects.map((project, projectIndex) => {
          const Icon = icons[projectIndex % icons.length];
          return (
            <article
              className={`project-card dg-frame ${tones[projectIndex % tones.length]}`}
              key={project.id}
              role="listitem"
            >
              <div className="project-art" aria-hidden="true">
                <span className="art-index">
                  {String(projectIndex + 1).padStart(2, "0")} / PROJECT
                </span>
                <Icon />
                <span className="art-title">{project.name}</span>
                <span className="art-circuit" />
              </div>
              <div className="project-info">
                <span className="icon-badge">
                  <Icon />
                </span>
                <div>
                  <h3>{project.name}</h3>
                  <span className="project-category">{project.label}</span>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <a className="project-link" href={project.href}>
                Explore project <ArrowRight aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
      <p className="caption">Scroll or use the arrows to explore.</p>
    </>
  );
}

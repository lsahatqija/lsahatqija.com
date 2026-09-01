import { ArrowUpRight } from "lucide-react";
import type { Experience } from "~/content/site";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="timeline" aria-label="Experience and external projects">
      {experiences.map((experience) => (
        <article key={experience.id}>
          <span className="timeline-node" aria-hidden="true" />
          <p className="eyebrow">
            {experience.kind === "employment" ? "Employment" : "Independent project"}
          </p>
          <h3>{experience.name}</h3>
          <p>{experience.description}</p>
          <div className="tech-list" aria-label="Technologies">
            {experience.tech.map((tech) => (
              <span className="badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          {experience.href && (
            <a className="experience-link" href={experience.href} target="_blank" rel="noreferrer">
              Visit <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

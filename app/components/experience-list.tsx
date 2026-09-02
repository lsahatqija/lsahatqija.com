import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Experience } from "~/content/site";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="timeline" aria-label="Experience and external projects">
      {experiences.map((experience) => (
        <article key={experience.id}>
          <span className="timeline-node" aria-hidden="true" />
          <details className="experience-details">
            <summary>
              <span className="experience-heading">
                <h3>{experience.name}</h3>
                <ChevronDown className="experience-toggle" aria-hidden="true" />
              </span>
              <span className="tech-list" aria-label="Technologies">
                {experience.tech.map((tech) => (
                  <span className="badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </span>
            </summary>
            <div className="experience-description">
              <p>{experience.description}</p>
              {experience.href && (
                <a
                  className="experience-link"
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}

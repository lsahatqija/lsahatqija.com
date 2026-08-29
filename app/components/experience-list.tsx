import { ArrowUpRight, BriefcaseBusiness, FolderGit2 } from "lucide-react";

import type { Experience } from "~/content/site";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="experience-list" aria-label="Experience and external projects">
      {experiences.map((experience) => {
        const Icon = experience.kind === "employment" ? BriefcaseBusiness : FolderGit2;

        return (
          <details className="experience-item" key={experience.id}>
            <summary>
              <span className="experience-icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong>{experience.name}</strong>
                <small>
                  {experience.kind === "employment" ? "Employment" : "External project"}
                </small>
              </span>
              <a
                className="experience-link"
                href={experience.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${experience.name}`}
                onClick={(event) => event.stopPropagation()}
              >
                <ArrowUpRight aria-hidden="true" />
              </a>
            </summary>
            <p>{experience.description}</p>
          </details>
        );
      })}
    </div>
  );
}

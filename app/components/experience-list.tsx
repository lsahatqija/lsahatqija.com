import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Experience } from "~/content/site";

import androidIcon from "../../dark-graphic-kit/icons/mono/android.svg";
import appleIcon from "../../dark-graphic-kit/icons/mono/apple.svg";
import automotiveIcon from "../../dark-graphic-kit/icons/mono/automotive.svg";
import blenderIcon from "../../dark-graphic-kit/icons/mono/blender.svg";
import csharpIcon from "../../dark-graphic-kit/icons/mono/csharp.svg";
import dockerIcon from "../../dark-graphic-kit/icons/mono/docker.svg";
import expressIcon from "../../dark-graphic-kit/icons/mono/express.svg";
import githubIcon from "../../dark-graphic-kit/icons/mono/github.svg";
import html5Icon from "../../dark-graphic-kit/icons/mono/html5.svg";
import javascriptIcon from "../../dark-graphic-kit/icons/mono/javascript.svg";
import linuxIcon from "../../dark-graphic-kit/icons/mono/linux.svg";
import mongodbIcon from "../../dark-graphic-kit/icons/mono/mongodb.svg";
import nodejsIcon from "../../dark-graphic-kit/icons/mono/nodejs.svg";
import oculusIcon from "../../dark-graphic-kit/icons/mono/oculus.svg";
import oracleIcon from "../../dark-graphic-kit/icons/mono/oracle.svg";
import phpIcon from "../../dark-graphic-kit/icons/mono/php.svg";
import pythonIcon from "../../dark-graphic-kit/icons/mono/python.svg";
import reactIcon from "../../dark-graphic-kit/icons/mono/react.svg";
import steamIcon from "../../dark-graphic-kit/icons/mono/steam.svg";
import typescriptIcon from "../../dark-graphic-kit/icons/mono/typescript.svg";
import unityIcon from "../../dark-graphic-kit/icons/mono/unity.svg";
import unrealEngineIcon from "../../dark-graphic-kit/icons/mono/unrealengine.svg";
import vrIcon from "../../dark-graphic-kit/icons/mono/vr.svg";

const techIcons: Record<string, string> = {
  Android: androidIcon,
  "Augmented Reality": vrIcon,
  "Automotive Software": automotiveIcon,
  Blender: blenderIcon,
  "C#": csharpIcon,
  Docker: dockerIcon,
  Express: expressIcon,
  "GitHub Actions": githubIcon,
  iOS: appleIcon,
  JavaScript: javascriptIcon,
  Linux: linuxIcon,
  "Mixed Reality": vrIcon,
  MongoDB: mongodbIcon,
  "Node.js": nodejsIcon,
  Oculus: oculusIcon,
  "Oracle Database": oracleIcon,
  PHP: phpIcon,
  Python: pythonIcon,
  React: reactIcon,
  Steam: steamIcon,
  TypeScript: typescriptIcon,
  Unity: unityIcon,
  "Unreal Engine": unrealEngineIcon,
  VR: vrIcon,
  WebGL: html5Icon,
};

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
                    {techIcons[tech] && (
                      <img className="badge-icon" src={techIcons[tech]} alt="" aria-hidden="true" />
                    )}
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

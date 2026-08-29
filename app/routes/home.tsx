import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

import { ExperienceList } from "~/components/experience-list";
import { ProjectsCarousel } from "~/components/projects-carousel";
import { SiteHeader } from "~/components/site-header";
import { experiences, personalLinks, projects } from "~/content/site";

export default function Home() {
  return (
    <>
      <title>lsahatqija.com | Personal site and project hub</title>
      <meta
        name="description"
        content="The personal site and project hub of lsahatqija: selected work, places to connect, and what comes next."
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="top" className="page-shell">
        <SiteHeader />
        <main id="main-content">
          <section id="about" className="intro-section" aria-labelledby="intro-title">
            <p className="eyebrow">Personal site / project hub</p>
            <h1 id="intro-title">A home for the things I make.</h1>
            <div className="intro-copy">
              <p>
                I design and build useful digital things. This is the central index for my work,
                experiments, and the places you can find me online.
              </p>
              <a className="scroll-cue" href="#projects">
                Explore the work <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="projects" className="projects-section" aria-labelledby="projects-title">
            <div className="section-heading">
              <p className="section-number">01</p>
              <div>
                <p className="eyebrow">Projects</p>
                <h2 id="projects-title">Things with a life of their own.</h2>
              </div>
            </div>
            <ProjectsCarousel projects={projects} />
          </section>

          <section
            id="experience"
            className="experience-section"
            aria-labelledby="experience-title"
          >
            <div className="section-heading">
              <p className="section-number">02</p>
              <div>
                <p className="eyebrow">Experience</p>
                <h2 id="experience-title">Work beyond this portfolio.</h2>
              </div>
            </div>
            <ExperienceList experiences={experiences} />
          </section>

          <section id="links" className="links-section" aria-labelledby="links-title">
            <div className="section-heading">
              <p className="section-number">03</p>
              <div>
                <p className="eyebrow">Elsewhere</p>
                <h2 id="links-title">Find me around the web.</h2>
              </div>
            </div>
            <div className="link-list">
              {personalLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="outro-section" aria-labelledby="outro-title">
            <p className="eyebrow">One more thing</p>
            <h2 id="outro-title">Have something interesting in mind?</h2>
            <a className="contact-link" href="mailto:hello@lsahatqija.com">
              <Mail aria-hidden="true" /> hello@lsahatqija.com
            </a>
          </section>
        </main>
        <footer>
          <a className="wordmark" href="#top">
            lsahatqija.com
          </a>
          <p>Built with care. {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

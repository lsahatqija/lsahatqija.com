import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { ExperienceList } from "~/components/experience-list";
import { ProjectsCarousel } from "~/components/projects-carousel";
import { SiteHeader } from "~/components/site-header";
import { experiences, personalLinks, projects } from "~/content/site";

export default function Home() {
  return (
    <>
      <title>Lekë Sahatqija | Software developer & game maker</title>
      <meta
        name="description"
        content="Software, games, and creative experiments by Lekë Sahatqija."
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero shell" id="about" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Independent developer / creative work</p>
            <h1 id="intro-title">
              Software
              <br />
              developer<span>.</span>
              <br />
              Game maker<span>.</span>
            </h1>
            <p className="hero-summary">Web apps, games, and experiments.</p>
            <a className="dg-button" href="#projects">
              Explore projects <ArrowRight aria-hidden="true" />
            </a>
            <div className="circuit-divider short" aria-hidden="true" />
          </div>
          <img
            className="hero-avatar"
            src="/avatar.png"
            width="1250"
            height="1250"
            alt="Cybernetic illustrated avatar with gold glasses, teal and gold circuitry, and a magenta circle."
          />
        </section>
        <section className="projects shell" id="projects" aria-labelledby="projects-title">
          <ProjectsCarousel projects={projects} />
        </section>
        <section className="lower-grid shell" id="experience" aria-labelledby="experience-title">
          <div className="section-intro">
            <p className="eyebrow">Background</p>
            <h2 id="experience-title">
              Experience<span className="text-pink">.</span>
            </h2>
            <p>Software development, game systems, education, and creative experiments.</p>
          </div>
          <ExperienceList experiences={experiences} />
        </section>
        <section className="links-section shell" id="links" aria-labelledby="links-title">
          <div className="section-heading">
            <h2 id="links-title">Around the web</h2>
            <span className="heading-line" aria-hidden="true" />
          </div>
          <div className="link-grid">
            {personalLinks.map((link, index) => (
              <a
                className="dg-frame link-card"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-index">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
        <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">
            Have something interesting in mind<span className="text-pink">?</span>
          </h2>
          <a className="dg-button tone-teal" href="mailto:hello@lsahatqija.com">
            <Mail aria-hidden="true" /> hello@lsahatqija.com
          </a>
        </section>
      </main>
      <footer className="site-footer shell">
        <span>Lekë Sahatqija</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

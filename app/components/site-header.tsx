import { personalLinks } from "~/content/site";

import emailIcon from "../../dark-graphic-kit/icons/monochrome/email.svg";
import githubIcon from "../../dark-graphic-kit/icons/monochrome/github.svg";
import linkedinIcon from "../../dark-graphic-kit/icons/monochrome/linkedin.svg";
import emailIconTeal from "../../dark-graphic-kit/icons/teal/email.svg";
import githubIconTeal from "../../dark-graphic-kit/icons/teal/github.svg";
import linkedinIconTeal from "../../dark-graphic-kit/icons/teal/linkedin.svg";

const linkIcons = {
  "GitHub Personal": { default: githubIcon, hover: githubIconTeal },
  "GitHub Work": { default: githubIcon, hover: githubIconTeal },
  LinkedIn: { default: linkedinIcon, hover: linkedinIconTeal },
  Email: { default: emailIcon, hover: emailIconTeal },
};

export function SiteHeader() {
  return (
    <header id="top" className="site-header shell">
      <a className="wordmark" href="#top" aria-label="Lekë Sahatqija, back to top">
        Lekë Sahatqija
        <span className="circuit-mark" aria-hidden="true" />
      </a>
      <nav className="social-nav" aria-label="Contact and social links">
        {personalLinks.map((link) => {
          const icon = linkIcons[link.label as keyof typeof linkIcons];

          return (
            <a
              className="social-link"
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <img className="social-icon-default" src={icon.default} alt="" aria-hidden="true" />
              <img className="social-icon-hover" src={icon.hover} alt="" aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </header>
  );
}

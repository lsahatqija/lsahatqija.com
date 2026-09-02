import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import { personalLinks } from "~/content/site";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.28-5.28-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.73.81 1.17 1.83 1.17 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.21c0 .31.21.67.79.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.36 7.98H1.24V21h4.12V7.98ZM3.3 1.5a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8ZM21.76 13.53c0-3.92-2.09-5.74-4.88-5.74a4.22 4.22 0 0 0-3.82 2.1V7.98H8.94V21h4.12v-6.45c0-1.7.32-3.35 2.43-3.35 2.08 0 2.11 1.95 2.11 3.46V21h4.12l.04-7.47Z" />
    </svg>
  );
}

const linkIcons = {
  "GitHub Personal": GitHubIcon,
  "GitHub Work": GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
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
          const Icon = linkIcons[link.label as keyof typeof linkIcons];

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
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </header>
  );
}

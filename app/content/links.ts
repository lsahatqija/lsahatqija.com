export type PersonalLink = {
  label: string;
  href: string;
  description: string;
};

// Replace the placeholder destinations before publishing.
export const personalLinks: PersonalLink[] = [
  { label: "GitHub", href: "https://github.com/", description: "Code and open-source work" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", description: "Professional profile" },
  { label: "Email", href: "mailto:hello@lsahatqija.com", description: "Start a conversation" },
];

import { Moon, Sun } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useTheme } from "~/features/preferences/theme-provider";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Links", href: "#links" },
];

export function SiteHeader() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="lsahatqija.com, back to top">
        lsa<span>hatqija</span>
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button
        className="theme-toggle"
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      >
        {resolvedTheme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      </Button>
    </header>
  );
}

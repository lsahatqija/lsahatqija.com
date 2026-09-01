const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Links", href: "#links" },
];

export function SiteHeader() {
  return (
    <header id="top" className="site-header shell">
      <a className="wordmark" href="#top" aria-label="Lekë Sahatqija, back to top">
        Lekë Sahatqija
        <span className="circuit-mark" aria-hidden="true" />
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

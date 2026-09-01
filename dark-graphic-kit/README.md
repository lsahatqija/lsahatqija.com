# Dark Graphic — portfolio template and UI kit

Open `index.html` for the portfolio or `components.html` for the component gallery. No installation, build step, framework, CDN, or network connection is required. Keep the folder structure intact.

## Files

- `index.html`: responsive portfolio, avatar hero, project carousel, experience placeholder.
- `components.html`: live component gallery with buttons, badges, icons, native form controls, panels, progress, alerts, accordions, dialog and toast.
- `styles.css`: theme tokens, reusable components, portfolio layouts, responsive rules, reduced-motion and print styles.
- `script.js`: optional carousel navigation, demo form feedback, dialog and toast behavior.
- `assets/avatar.png`: your supplied avatar, unchanged.
- `assets/icons/`: 38 individual editable SVGs.
- `assets/icons.svg`: SVG symbol sprite.
- `assets/icons.json`: icon names mapped to inner SVG markup, convenient for component wrappers.
- `snippets.html`: copy-ready component and carousel markup.

## Customize

1. Edit `--dg-*` tokens at the start of `styles.css`. Pink, teal and gold are exposed as `.tone-pink`, `.tone-teal`, and `.tone-gold` modifiers. Body text uses cream; darker magenta is reserved for accents and larger UI text. Recheck contrast after modifying colors.
2. Replace the example project names, descriptions and covers. Covers currently use abstract interface graphics and icons; they are not actual project screenshots. To use a screenshot, replace `.project-art` contents with an image and style it with `width:100%;height:100%;object-fit:cover`.
3. Add your experience, dates and links. The experience row is explicitly a placeholder. Project cards intentionally have no fake destination. Add a real `<a href="...">` around the title or a clearly labelled project link when you have a destination.
4. Use your own font by changing `--dg-font`. System Arial/Helvetica makes this package self-contained; typography is an implementation approximation of the generated mockup.
5. Copy components from `components.html` or `snippets.html` and include `styles.css`. Class names prefixed `dg-` are primitives; layout classes such as `.hero` and `.kit` can be omitted from your application. The stylesheet also includes global resets and native control styles; scope these if integrating into an existing app.

## Icons

All icons use a 24 × 24 viewBox, 1.7-unit strokes and `currentColor`. Inline SVG is the most flexible choice and is used throughout the demo. Copy an icon's SVG contents into HTML; set its `class="dg-icon"`, `aria-hidden="true"`, and put an accessible label on its enclosing button when needed.

```html
<button class="dg-button icon-only tone-teal" aria-label="Next project">
  <svg class="dg-icon" aria-hidden="true"><use href="assets/icons.svg#arrow-right"></use></svg>
</button>
```

External SVG sprites may be blocked by browsers on `file://`. The shipped demo uses inline SVG so it opens directly. To use the sprite, serve this directory over HTTP, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. Individual `<img src="assets/icons/code.svg">` icons do not inherit parent text color; inline SVG or the sprite does.

The icons are original interface line drawings, not official brand logos. Use official licensed brand assets separately if required.

## Behavior

- The carousel supports touch/trackpad scrolling, arrow buttons, and left/right keys while focused. Its counter advances to the final item when the end of the track is reached. It never auto-plays.
- Each carousel is scoped to its own `[data-carousel]` wrapper. Keep the `data-*` hooks in `snippets.html` if reusing it.
- Native form controls retain keyboard interaction. The demo form validates locally and does not send or store data. Wire your own submit handler before using it for contact.
- Dialogs use native `<dialog>` with Escape support and browser focus handling.
- Reduced-motion preferences disable smooth carousel scrolling and transitions.
- Without JavaScript the horizontal project list remains scrollable and form controls/details remain native; JS demo feedback and modal triggers require the script.

## Integration with React / Next.js

Use the HTML as markup reference, convert `class` to `className`, and convert SVG attribute names (e.g. `stroke-width` to `strokeWidth`). Use framework event handlers and effects instead of loading `script.js` multiple times. Keep the CSS tokens and component classes. There are no framework or package dependencies.

## Validation and scope

JavaScript syntax, HTML parsing, local asset references, SVG XML, unique IDs, and fragment links were checked. No live browser visual or accessibility audit was performed. The responsive rules cover mobile, tablet and desktop, but inspect the kit within your own site before publishing. Artwork/layout follows the selected mockup; it is not a pixel-for-pixel raster reconstruction.

The package includes your uploaded avatar. No hosting, backend, email delivery or analytics is configured.

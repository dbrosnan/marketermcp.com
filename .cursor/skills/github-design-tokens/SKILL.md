# Design Tokens Skill

## Use when

- Defining or updating brand colors, spacing, radius, typography, shadows, or motion tokens.
- Refactoring UI styles for consistency across pages.
- Adding new components that need to follow the design system.

## Outcome

Ensures all visual styles use the centralized design token system, keeping the calming wellness-inspired brand consistent across every page.

## Token source of truth

The canonical token definitions live in `packages/design-tokens/tokens/`:

| File | Contents |
|------|----------|
| `color.json` | Backgrounds, accents, text, borders, feedback colors |
| `typography.json` | Font families, weights, sizes, line heights, letter spacing |
| `spacing.json` | 4px-base spacing scale and layout breakpoints |
| `shadow.json` | Elevation levels (sm through xl) plus brand glow |
| `radius.json` | Border radius scale (sm, md, lg, xl, pill) |
| `motion.json` | Animation durations and easing curves |

## Build pipeline

1. Tokens are defined as JSON in `packages/design-tokens/tokens/`.
2. Style Dictionary (`packages/design-tokens/config.js`) compiles them.
3. Run `npm run build` inside `packages/design-tokens/` to generate:
   - `build/tokens.css` — CSS custom properties
   - `build/tokens.json` — flat JSON for programmatic use

## Steps for token changes

1. Read `docs/brand-guide.md` for the full color, typography, spacing, logo, icon, and illustration reference.
2. Update the relevant JSON file in `packages/design-tokens/tokens/`.
3. Run `cd packages/design-tokens && npm run build` to regenerate outputs.
4. Update CSS custom properties in `apps/website/public/styles.css` if the token name or value changed.
5. Verify consistency across all pages — especially:
   - Cards and buttons
   - Headings and body text
   - Spacing rhythm and section gaps
   - Shadow and border usage
6. Check WCAG AA contrast ratios for any color changes.

## Visual assets (illustrations, icons, logo)

All SVG assets live in `apps/website/public/img/`. See `docs/brand-guide.md` sections 7-9 for the full inventory.

### Adding a new illustration

1. Create the SVG using the brand palette:
   - Primary shapes: `#7C5CFC`, accents: `#6AC8C6` / `#8FBC8F`
   - Background shapes: `#EDE8F5`, dark elements: `#1A1A2E`
2. Follow naming conventions: `hero-*.svg`, `icon-*.svg`, `badge-*.svg`, `persona-*.svg`, `workflow-*.svg`, `lp-*.svg`
3. Save to `apps/website/public/img/`
4. Use the CSS layout classes to place it:
   - `.hero-split` + `.hero-illustration` for hero sections
   - `.section-illustration` for centered section images (max 320px)
   - `.card-illustration` for in-card images (max 200px)
   - `.icon-img` / `.icon-img-sm` for 48px / 32px icons
   - `.badge-img` for 48px trust badges
5. Update `docs/brand-guide.md` illustration inventory table.

### Adding a new icon

1. Create a 48x48 SVG with `viewBox="0 0 48 48"`.
2. Use 2px stroke, rounded linecaps, single brand color.
3. Name it `icon-{name}.svg` and save to `img/`.
4. Add it to the icon table in `docs/brand-guide.md` section 8.

### Logo changes

Logo files: `img/logo.svg` (full), `img/logo-mark.svg` (mark), `img/logo-wordmark.svg` (text).
Favicon: `apps/website/public/favicon.svg` (uses the mark).
See `docs/brand-guide.md` section 7 for usage rules and color variants.

## Key CSS variables (in styles.css)

```
--bg, --bg-alt, --surface, --surface-hover, --panel
--border, --border-strong
--text, --text-secondary, --muted
--primary, --primary-hover, --teal, --teal-hover, --sage
--success, --warning, --error
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl, --shadow-glow
--radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-pill
--ease, --ease-out, --ease-spring
```

## Source inspiration

- [style-dictionary/style-dictionary](https://github.com/amzn/style-dictionary) (5,000+ stars)
- [design-tokens/community-group](https://github.com/design-tokens/community-group) (DTCG spec)
- [primer/primitives](https://github.com/primer/primitives) (GitHub's token system)

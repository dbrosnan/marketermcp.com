# Marketer MCP Brand Guide

A comprehensive brand guideline for the Marketer MCP design system. The brand has been redesigned from a dark electric-blue Tekko aesthetic to a calming wellness-inspired palette.

---

## 1. Brand Story and Positioning

### Mission

> Marketer MCP connects marketing teams to purpose-built AI tools through a single MCP hub endpoint.

### Vision

Become the standard MCP hub for marketing operations.

### Positioning

- **Practical** — Solutions that solve real workflow problems
- **Calming** — A respite from noisy, overwhelming tools
- **Trustworthy** — Reliable, transparent, and professional

---

## 2. Voice and Tone

### Voice Attributes

| Attribute | Description |
|-----------|-------------|
| **Confident** | Assertive without arrogance; we know our value |
| **Clear** | Direct language; no fluff or ambiguity |
| **Practical** | Action-oriented; focused on outcomes |

### Tone Variations by Context

| Context | Tone | Example |
|---------|------|---------|
| **Marketing pages** | Warm, inviting, benefit-led | "Connect your tools in minutes, not days" |
| **Documentation** | Precise, neutral, task-focused | "Set the `MCP_HUB_URL` environment variable to your endpoint" |
| **Error states** | Supportive, solution-oriented | "Connection failed. Check your API key and try again." |

### Anti-Patterns

- **Don't** use vague claims without proof ("best-in-class," "revolutionary")
- **Don't** use overhyped language ("game-changing," "disruptive")
- **Don't** use internal jargon on public pages ("MCP protocol," "hub topology")

---

## 3. Color System

### Calming Palette

#### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#FAFAFC` | Main page background |
| `--bg-secondary` | `#F5F3EF` | Alternate sections |
| `--bg-surface` | `#EDE8F5` | Cards, modals, elevated surfaces |

#### Accents

| Token | Hex | Hover | Usage |
|-------|-----|-------|-------|
| `--accent-primary` | `#7C5CFC` | `#6B4EE6` | Primary actions, links |
| `--accent-teal` | `#6AC8C6` | `#4ECDC4` | Secondary actions, highlights |
| `--accent-sage` | `#8FBC8F` | — | Tertiary accents, badges |

#### Text

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#1A1A2E` | Headings, body copy |
| `--text-secondary` | `#3D3D5C` | Supporting text |
| `--text-muted` | `#6B7280` | Placeholders, captions |

#### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-default` | `rgba(124,92,252,0.15)` | Default borders |
| `--border-strong` | `rgba(124,92,252,0.30)` | Emphasized borders |

#### Feedback

| Token | Hex | Usage |
|-------|-----|-------|
| `--feedback-success` | `#34D399` | Success states |
| `--feedback-warning` | `#FBBF24` | Warnings |
| `--feedback-error` | `#F87171` | Errors |

### Usage Rules

- Use primary purple for primary CTAs and key links
- Use teal for secondary actions and positive highlights
- Use sage sparingly for badges and tertiary elements
- Maintain sufficient contrast between text and backgrounds

### WCAG AA Contrast Requirements

| Combination | Minimum Ratio | Status |
|-------------|---------------|--------|
| Primary text on primary bg | 4.5:1 | ✓ |
| Secondary text on primary bg | 4.5:1 | ✓ |
| Muted text on primary bg | 3:1 (large text) | ✓ |
| Primary accent on white | 4.5:1 | ✓ |

---

## 4. Typography

### Font Families

| Role | Font | Weights |
|------|------|---------|
| **Headings** | Plus Jakarta Sans | 600, 700, 800 |
| **Body** | Inter | 400, 500 |
| **Mono** | JetBrains Mono | 400, 500 |

### Size Scale (Fluid with clamp)

```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 0.9375rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
--text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
```

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.15 | Large display headings |
| `--leading-snug` | 1.3 | Headings |
| `--leading-normal` | 1.6 | Body text |
| `--leading-relaxed` | 1.75 | Long-form content |

### Letter Spacing

- **Headings:** `-0.01em` for optical balance
- **Body:** default
- **Mono:** default

---

## 5. Spacing and Layout

### Base Scale (4px)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Inline spacing |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Default gap |
| `--space-5` | 20px | Medium gaps |
| `--space-6` | 24px | Section spacing |
| `--space-8` | 32px | Large gaps |
| `--space-10` | 40px | Block spacing |
| `--space-12` | 48px | Section breaks |
| `--space-16` | 64px | Major sections |
| `--space-20` | 80px | Hero spacing |
| `--space-24` | 96px | Page sections |

### Layout

- **Max width:** 1080px for content containers
- **Padding:** `--space-4` to `--space-6` on mobile, `--space-8` on desktop

### Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `--bp-sm` | 390px | Small phones |
| `--bp-md` | 768px | Tablets |
| `--bp-lg` | 1024px | Laptops |
| `--bp-xl` | 1280px | Desktops |

```css
@media (min-width: 768px) { /* md and up */ }
@media (min-width: 1024px) { /* lg and up */ }
@media (min-width: 1280px) { /* xl and up */ }
```

---

## 6. Shape and Elevation

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Buttons, inputs |
| `--radius-md` | 12px | Cards, modals |
| `--radius-lg` | 20px | Large cards |
| `--radius-xl` | 28px | Hero sections |
| `--radius-pill` | 999px | Pills, badges |

### Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(124, 92, 252, 0.06)` |
| `--shadow-md` | `0 4px 12px rgba(124, 92, 252, 0.08)` |
| `--shadow-lg` | `0 8px 24px rgba(124, 92, 252, 0.1)` |
| `--shadow-xl` | `0 16px 48px rgba(124, 92, 252, 0.12)` |

### Glow Effect (Hero Elements)

```css
--glow-primary: 0 0 40px rgba(124, 92, 252, 0.25);
```

---

## 7. Logo

### Variants

| File | Usage |
|------|-------|
| `img/logo.svg` | Full mark + wordmark. Use in hero sections, about pages, large displays. |
| `img/logo-mark.svg` | Mark only (hub icon). Use for favicon, app icons, social avatars, small spaces. |
| `img/logo-wordmark.svg` | Text-only wordmark. Use when the mark is already visible nearby. |

### Logo Mark Concept

The mark is an abstract hub/connection icon: a central purple circle (`#7C5CFC`) with three radiating connector lines to smaller teal circles (`#6AC8C6`). This represents the "connect once" value proposition — one central hub connecting to multiple tools.

### Clear Space

Maintain a minimum clear space of 1x the mark height around all sides of the logo. Do not crowd the logo with other elements.

### Minimum Size

- **Mark only:** 24px minimum
- **Full logo:** 120px minimum width
- **Wordmark:** 100px minimum width

### Color Variants

| Context | Mark fill | Wordmark colors |
|---------|-----------|-----------------|
| Light background | `#7C5CFC` / `#6AC8C6` | `#1A1A2E` + `#7C5CFC` |
| Dark background | `#7C5CFC` / `#6AC8C6` | `#FAFAFC` + `#7C5CFC` |
| Single-color | `#7C5CFC` only | `#7C5CFC` only |

### Do / Don't

| Do | Don't |
|----|-------|
| Use SVG format for web | Use raster formats (PNG/JPG) when SVG is possible |
| Maintain original proportions | Stretch or distort the logo |
| Use approved color variants | Recolor the logo with off-brand colors |
| Keep clear space around the mark | Place the logo on busy backgrounds |

---

## 8. Iconography

### Custom Icon Set

The site uses a custom set of 48x48 SVG icons stored in `img/`. All icons use 2px stroke, rounded linecaps, and brand colors.

| Icon | File | Color | Usage |
|------|------|-------|-------|
| Hub | `icon-hub.svg` | Purple | Connection, integration |
| Chart | `icon-chart.svg` | Teal | Analytics, budget |
| Shield | `icon-shield.svg` | Purple | Security, protection |
| Bell | `icon-bell.svg` | Teal | Alerts, notifications |
| Gear | `icon-gear.svg` | Purple | Settings, tools |
| Bolt | `icon-bolt.svg` | Teal | Speed, execution |
| Users | `icon-users.svg` | Sage | Team, community |
| Rocket | `icon-rocket.svg` | Purple | Launch, early access |
| Lock | `icon-lock.svg` | Purple | Auth, security |
| Code | `icon-code.svg` | Teal | Developer, API |
| Star | `icon-star.svg` | Purple | Featured, quality |
| Clock | `icon-clock.svg` | Teal | Time, uptime |

### Trust Badges

Filled-style 48x48 badges for trust signals:

| Badge | File | Usage |
|-------|------|-------|
| GitHub | `badge-github.svg` | Open source |
| Shield Check | `badge-shield-check.svg` | SOC 2, compliance |
| Globe | `badge-globe.svg` | GDPR, global |
| Uptime | `badge-uptime.svg` | SLA, reliability |

### Style Guidelines

| Property | Value |
|----------|-------|
| Stroke width | 2px |
| Default size | 48px (icons), 48px (badges) |
| Line caps | Rounded |
| Style | Consistent rounded line art |

### CSS Classes

```html
<img src="/img/icon-hub.svg" alt="" class="icon-img" width="48" height="48">
<img src="/img/icon-hub.svg" alt="" class="icon-img-sm" width="32" height="32">
<img src="/img/badge-github.svg" alt="" class="badge-img" width="48" height="48">
```

---

## 9. Illustration Style

### Asset Library

All illustrations are custom SVGs in `apps/website/public/img/`, built in the brand palette. They are inspired by the flat, minimal style of [unDraw](https://undraw.co) and [Storyset](https://storyset.com).

### Illustration Inventory

| File | Subject | Used on |
|------|---------|---------|
| `hero-connect.svg` | Hub network with connected nodes | Homepage hero |
| `hero-tools.svg` | Dashboard blocks and toolkit | Features hero |
| `budget-dashboard.svg` | Simplified budget dashboard | Homepage, Features |
| `persona-performance.svg` | Person analyzing charts | Use Cases |
| `persona-ops.svg` | Person connecting systems | Use Cases |
| `persona-cmo.svg` | Person reviewing reports | Use Cases |
| `pricing-free.svg` | Gift box celebration | Pricing |
| `about-mission.svg` | Team collaboration | About |
| `docs-getting-started.svg` | Terminal/code window | Docs |
| `security-shield.svg` | Shield with checkmark | Homepage |
| `beta-founding.svg` | Rocket launch | Beta |
| `blog-placeholder.svg` | Document with pen | Blog index |
| `workflow-connect.svg` | Connection plug icon | Features, Use Cases |
| `workflow-discover.svg` | Magnifying glass grid | Features, Use Cases |
| `workflow-execute.svg` | Play button circle | Features, Use Cases |
| `lp-dashboard.svg` | Budget pacing timeline | LP: Budget Pacing |
| `lp-workflow.svg` | Automated flow diagram | LP: Marketing Ops |

### Color Rules

- Primary shapes: `#7C5CFC` (purple)
- Accent shapes: `#6AC8C6` (teal), `#8FBC8F` (sage)
- Background shapes: `#EDE8F5` (lavender), `#FAFAFC` (off-white)
- Text/dark elements: `#1A1A2E`
- Use `opacity` for depth and layering (0.1-0.3 for background shapes)

### Style Rules

- **Flat** — No gradients or complex shading
- **Minimal** — Simple geometric shapes, clean lines
- **Calming** — Soft, rounded, approachable compositions
- **Consistent** — All illustrations share the same visual language

### Layout CSS Classes

```html
<!-- Hero split: text left, illustration right -->
<div class="hero-split">
  <div class="hero-text">...</div>
  <div class="hero-illustration">
    <img src="/img/hero-connect.svg" alt="..." width="380" height="285">
  </div>
</div>

<!-- Centered section illustration -->
<div class="section-illustration">
  <img src="/img/about-mission.svg" alt="..." width="320" height="224">
</div>

<!-- Inside a card -->
<div class="card-illustration">
  <img src="/img/budget-dashboard.svg" alt="..." width="200" height="140">
</div>
```

### File Naming Convention

- `hero-*.svg` — Large hero illustrations (400x300 viewBox)
- `persona-*.svg` — Character illustrations (280x240)
- `icon-*.svg` — Line-art icons (48x48)
- `badge-*.svg` — Filled trust badges (48x48)
- `workflow-*.svg` — Step/process icons (80x80)
- `lp-*.svg` — Landing page illustrations (400x280)

### Do / Don't

| Do | Don't |
|----|-------|
| Use SVG format exclusively | Use raster images for illustrations |
| Apply brand palette colors | Use off-brand or arbitrary colors |
| Keep compositions minimal and airy | Overcrowd illustrations with detail |
| Include meaningful alt text | Leave alt attributes empty on content images |
| Use the `section-illustration` class for consistent sizing | Inline arbitrary widths |
| Maintain the flat, rounded style | Mix 3D, photographic, or sketchy styles |

---

## 9. Component Patterns

### Buttons

| Variant | Usage |
|---------|-------|
| **Primary** | Main CTAs (purple) |
| **Ghost** | Secondary actions |
| **Teal** | Alternative primary (e.g., "Get started") |
| **Small** | Inline, compact UI |
| **Large** | Hero CTAs |

### Cards

- Use `--radius-md` or `--radius-lg`
- Apply `--shadow-sm` by default, `--shadow-md` on hover
- Border: `--border-default`

### Badges

| Variant | Usage |
|---------|-------|
| **Default** | Neutral labels |
| **Beta** | Beta features |
| **New** | Recently launched |

### Forms

- Input focus: purple ring (`box-shadow: 0 0 0 2px var(--accent-primary)`)
- Labels: `--text-secondary`
- Error state: `--feedback-error` border

### Footer

The site footer uses a Dribbble-inspired horizontal navigation bar pattern:

- Full-width, edge-to-edge with `border-top` separator
- Brand wordmark on the left, navigation links on the right
- Links grouped: product pages first, then legal/utility
- Text color: `--text-secondary`, hover to `--text`
- Responsive: stacks vertically and centers on mobile

**Reference:** See [docs/assets/footer-reference-dribbble.png](assets/footer-reference-dribbble.png) for the design inspiration.

```html
<footer class="footer">
  <a href="/" class="footer-brand">marketer<span>mcp</span></a>
  <div class="footer-links">
    <a href="/features/">Features</a>
    <a href="/use-cases/">Use Cases</a>
    ...
    <a href="/privacy.html">Privacy</a>
    <a href="/terms.html">Terms</a>
    <a href="/security.html">Security</a>
  </div>
</footer>
```

### Urgency Banners

- Use sparingly for time-sensitive offers
- Background: light purple tint (`--bg-surface`)
- Border: `--border-strong`

---

## 10. Motion and Animation

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 120ms | Micro-interactions |
| `--duration-normal` | 200ms | Default transitions |
| `--duration-slow` | 350ms | Page transitions |

### Easings

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | ease | General use |
| `--ease-out` | ease-out | Exit animations |
| `--ease-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy feedback |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Accessibility Standards

### WCAG AA Minimum

All content and UI must meet WCAG 2.1 Level AA.

### Color Contrast

- Document contrast ratios for all text/background combinations
- Primary text: minimum 4.5:1
- Large text (18px+ or 14px+ bold): minimum 3:1

### Focus States

- All interactive elements must have a visible focus indicator
- Use `outline: 2px solid var(--accent-primary)` or equivalent
- Never remove focus styles without a replacement

### Keyboard Navigation

- All functionality must be operable via keyboard
- Logical tab order
- No keyboard traps

### Screen Reader Considerations

- Semantic HTML (`<nav>`, `<main>`, `<button>`, etc.)
- ARIA labels where needed
- Skip links for long pages

### Responsive Checks

| Viewport | Purpose |
|----------|---------|
| 390px | Small phone QA |
| 768px | Tablet QA |
| 1280px | Desktop QA |

---

## Summary

This brand guide defines the Marketer MCP design system from voice and color through accessibility. Use these tokens and patterns consistently across marketing, documentation, and product UI to maintain a cohesive, calming, and trustworthy experience.

# Mantle Design System — Token Reference
# File: DESIGN_TOKENS.md
# Version: 2.0 | Dark-first | 2 fonts only

---

## 1. Color System

### Philosophy
- Dark mode is the **primary** experience. Light mode is an override.
- All darks use **warm brown undertones** — never cold blue-grays
- All colors defined as CSS custom properties on `:root`
- Components reference tokens, never raw hex values

---

### 1.1 Background Layers (Dark Mode)

| Token | Hex | Use Case |
|-------|-----|----------|
| `--bg-page` | `#121212` | Page canvas — the deepest layer |
| `--bg-surface` | `#1A1A1A` | Cards, panels, sidebars |
| `--bg-elevated` | `#222222` | Raised cards, dropdowns, selected rows |
| `--bg-sunken` | `#0B0B0B` | Input fields, code blocks, inset areas |
| `--bg-overlay` | `rgba(0,0,0,0.82)` | Modal backdrops, drawer overlays |

**Rule:** Never skip elevation layers. Stack them: page → surface → elevated → sunken.

---

### 1.2 Background Layers (Light Mode Override)

| Token | Hex | Use Case |
|-------|-----|----------|
| `--bg-page` | `#FAF8F5` | Page canvas — warm off-white |
| `--bg-surface` | `#FFFFFF` | Cards, panels |
| `--bg-elevated` | `#F5F0EB` | Raised cards, hover states |
| `--bg-sunken` | `#F0E6D6` | Input fields, inset areas |
| `--bg-overlay` | `rgba(13,12,11,0.60)` | Modal backdrops |

---

### 1.3 Text Colors

| Token | Dark Mode | Light Mode | Use Case |
|-------|-----------|------------|----------|
| `--text-primary` | `#F2EDE6` | `#0D0C0B` | Headlines, body copy, key labels |
| `--text-secondary` | `#9C8E82` | `#6B5B4E` | Descriptions, sub-labels, most body |
| `--text-tertiary` | `#5E5248` | `#A89D94` | Disabled, captions, metadata |
| `--text-inverse` | `#0A0908` | `#F2EDE6` | Text on inverted backgrounds |
| `--text-on-ember` | `#FFFFFF` | `#FFFFFF` | Text on ember-colored surfaces |

**Rule:** Never use pure `#FFFFFF` or `#000000`. Always use token values.

---

### 1.4 Border Tokens

| Token | Dark Mode | Light Mode | Use Case |
|-------|-----------|------------|----------|
| `--border-subtle` | `rgba(255,255,255,0.04)` | `#F2EEEC` | Dividers, section separators |
| `--border-default` | `rgba(255,255,255,0.08)` | `#EAE3DF` | Card borders, input borders |
| `--border-strong` | `rgba(255,255,255,0.14)` | `#CDC4BF` | Focus rings, featured items |
| `--border-ember` | `rgba(166,58,58,0.40)` | `rgba(166,58,58,0.40)` | Crimson/Ember-accented borders |

**Rule:** Dark mode borders use alpha-based values — they adapt to any background automatically.

---

### 1.5 Ember — Brand Accent Scale

**Ember is the ONLY accent color. Use it sparingly and intentionally.**

| Token | Dark Mode | Light Mode | Use Case |
|-------|-----------|------------|----------|
| `--ember-950` | `#4A1E05` | `#4A1E05` | Very dark ember backgrounds |
| `--ember-900` | `#7A3510` | `#7A3510` | Dark ember, deep accents |
| `--ember-800` | `#9A5820` | `#9A5820` | Strong ember backgrounds |
| `--ember-default` | `#A63A3A` | `#A63A3A` | **PRIMARY** — buttons, active links |
| `--ember-hover` | `#8E2F2F` | `#8E2F2F` | Hover state for crimson elements |
| `--ember-text` | `#E65A5A` | `#8E2F2F` | Crimson-colored text |
| `--ember-muted` | `rgba(166,58,58,0.15)` | `rgba(166,58,58,0.15)` | Hover backgrounds |
| `--ember-subtle` | `rgba(166,58,58,0.08)` | `#FFF5F5` | Tinted card backgrounds |

**Why ember is lighter in dark mode (#D4884A vs #C97B3A):**
The same hex value looks visually darker against a dark background due to simultaneous contrast. Ember is nudged 15% lighter in dark mode to maintain identical perceived vibrancy across both themes.

---

### 1.6 Semantic Colors

| State | Bg Token | Border Token | Text Token | Dark Bg | Dark Text |
|-------|----------|--------------|------------|---------|-----------|
| Success | `--success-bg` | `--success-border` | `--success-text` | `rgba(58,155,74,0.10)` | `#6BCF7F` |
| Warning | `--warning-bg` | `--warning-border` | `--warning-text` | `rgba(217,119,6,0.10)` | `#FCD34D` |
| Error | `--error-bg` | `--error-border` | `--error-text` | `rgba(220,38,38,0.10)` | `#FCA5A5` |
| Info | `--info-bg` | `--info-border` | `--info-text` | `rgba(59,130,246,0.10)` | `#93C5FD` |

| State | Light Bg | Light Text |
|-------|----------|------------|
| Success | `#EDFAEF` | `#2D7A3A` |
| Warning | `#FFFBEB` | `#B45309` |
| Error | `#FFF5F5` | `#B91C1C` |
| Info | `#EFF6FF` | `#1D4ED8` |

---

### 1.7 Shadow System

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.40)` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 20px rgba(0,0,0,0.50)` | `0 4px 16px rgba(0,0,0,0.07)` |
| `--shadow-lg` | `0 8px 40px rgba(0,0,0,0.60)` | `0 8px 32px rgba(0,0,0,0.08)` |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.70)` | `0 16px 48px rgba(0,0,0,0.10)` |
| `--shadow-ember` | `0 8px 40px rgba(212,136,74,0.20)` | `0 8px 32px rgba(201,123,58,0.25)` |

---

## 2. Typography System

### 2.1 Font Families

**RULE: Only 2 fonts. No exceptions.**

| Token | Value | Role |
|-------|-------|------|
| `--ff-display` | `'Bricolage Grotesque', serif` | Headlines, quotes, page titles |
| `--ff-body` | `Geist' | Everything else |

**Google Fonts import (add to index.html `<head>`):**
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
```

---

### 2.2 Bricolage Grotesque — When to Use

| Situation | Weight | Style |
|-----------|--------|-------|
| Hero H1 (88px+) | 700 | Normal |
| Section headlines (48–72px) | 700 | Normal |
| Page titles (36–48px) | 700 | Normal |
| Accent word in headline | 700 | **Italic** (ember colored) |
| Pull quotes / testimonials | 400 | Italic |
| Stat numbers on dark backgrounds | 700 | Normal |
| Modal titles | 700 | Normal |

**Never use below 16px. Never use for body paragraphs, labels, or UI text.**

---

### 2.3 Geist — When to Use

| Situation | Weight | Size |
|-----------|--------|------|
| Hero sub-headline | 300 (Light) | 17–18px |
| Body copy (long form) | 300–400 | 15px |
| Card descriptions | 400 | 14px |
| UI labels, nav links | 500 | 13px |
| Buttons | 500 | 13–15px |
| Form labels | 500 | 12px |
| Eyebrow / section label | 700 | 10–11px + UPPERCASE + letter-spacing 0.12em |
| Table cells | 400 | 13px |
| Badges, tags | 600 | 10–11px |
| Captions, metadata | 400 | 11px |

---

### 2.4 Type Scale

| Token | Size | Line Height | Letter Spacing | Font | Weight |
|-------|------|-------------|----------------|------|--------|
| `--text-hero` | 96px | 1.0 | -2.5px | Bricolage | 700 |
| `--text-6xl` | 80px | 1.05 | -2px | Bricolage | 700 |
| `--text-5xl` | 64px | 1.08 | -1.5px | Bricolage | 700 |
| `--text-4xl` | 48px | 1.1 | -1px | Bricolage | 700 |
| `--text-3xl` | 36px | 1.2 | -0.5px | Geist | 700 |
| `--text-2xl` | 30px | 1.25 | -0.3px | Geist | 600 |
| `--text-xl` | 24px | 1.3 | -0.2px | Geist | 600 |
| `--text-lg` | 20px | 1.4 | 0 | Geist | 500 |
| `--text-md` | 17px | 1.75 | 0 | Geist | 300 |
| `--text-base` | 15px | 1.65 | 0 | Geist | 400 |
| `--text-sm` | 13px | 1.5 | 0 | Geist | 400–500 |
| `--text-xs` | 11px | 1.4 | +0.12em | Geist | 600–700 |

---

## 3. Spacing System

**Base unit: 4px. All values are multiples of 4.**

| Token | Value | Primary Use |
|-------|-------|-------------|
| `--sp-1` | 4px | Icon-label gaps, badge padding |
| `--sp-2` | 8px | Tight inline gaps |
| `--sp-3` | 12px | Between stacked labels |
| `--sp-4` | 16px | Compact card padding, grid gaps |
| `--sp-5` | 20px | Standard icon margins |
| `--sp-6` | 24px | Default card padding |
| `--sp-8` | 32px | Container padding, group spacing |
| `--sp-10` | 40px | Large component spacing |
| `--sp-12` | 48px | Section padding (mobile) |
| `--sp-16` | 64px | Section padding (tablet) |
| `--sp-20` | 80px | Section padding (desktop) |
| `--sp-24` | 96px | Section padding (wide desktop) |

---

## 4. Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `--r-xs` | 3px | Inline code, tiny chips |
| `--r-sm` | 6px | Token badges, small tags |
| `--r-md` | 10px | Inputs, small alerts |
| `--r-lg` | 14px | Small cards, tooltips |
| `--r-xl` | 18px | **Default card radius** |
| `--r-2xl` | 24px | Feature cards, modals |
| `--r-3xl` | 32px | Hero blocks, full sections |
| `--r-pill` | 9999px | Buttons, badges, tags |

**Rule: Max 32px on page-level containers. Never use pill radius on containers.**

---

## 5. Motion & Animation

### 5.1 Easing Curves

| Token | Value | Use Case |
|-------|-------|----------|
| `--ease-out` | `cubic-bezier(0.19,1,0.22,1)` | Page transitions, scroll reveals |
| `--ease-spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Button hovers, micro-interactions |
| `--ease-in` | `cubic-bezier(0.95,0.05,0.795,0.035)` | Elements leaving the screen |

### 5.2 Duration Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `--dur-fast` | 140ms | Hover color changes, opacity |
| `--dur-base` | 240ms | Standard UI transitions |
| `--dur-slow` | 420ms | Modals, panels sliding in |
| `--dur-xslow` | 700ms | Page-level scroll reveals |

### 5.3 Scroll Reveal Pattern (Framer Motion)

```jsx
// Standard reveal — use on every major section element
const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] }
  }
}

// Stagger container
const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}
```

### 5.4 GSAP Rules

- Use GSAP ScrollTrigger for hero parallax glow orbs only
- Use GSAP for the number counter animation on stat cards
- Do NOT use GSAP for standard hover states — that's CSS
- Lenis smooth scroll: `lerp: 0.1, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`

---

## 6. Component Specifications

### 6.1 Navigation Bar

```
Height:          68px
Background:      rgba(10,9,8,0.94) + backdrop-blur(20px)
Border bottom:   1px solid rgba(255,255,255,0.05)
Position:        fixed, z-index: 100
Logo:            Bricolage Grotesque 700 18px + SVG arc mark
Nav links:       Geist 500 13px, color: --text-tertiary
Nav link hover:  color: --text-primary, transition: 140ms
Nav link active: color: --ember-text, border-bottom: 2px solid --ember-default
CTA "Log in":    Geist 500 13px, ghost button
CTA "Book Demo": Geist 500 13px, ember pill button
Scroll effect:   background transitions to rgba(10,9,8,0.98) after 60px scroll
```

### 6.2 Hero Section

```
Min-height:      100vh
Background:      --bg-page (#0A0908)
Padding:         140px top, 100px bottom
Glow orbs:       3 radial ember glows, pointer-events: none, z-index: 0
Eyebrow:         Geist 700 11px UPPERCASE, ember pill, pulsing dot
H1:              Bricolage Grotesque 700, 88px desktop / 44px mobile
H1 accent word:  Italic, color: --ember-text, display: block
Sub-headline:    Geist 300 18px, color: --text-secondary, max-width: 520px
Primary CTA:     Ember filled pill, Geist 500 15px
Secondary CTA:   Outline pill, rgba border, Geist 15px
Stats strip:     4 chips, border: --border-default, glass background
Arc transition:  SVG arc wave at bottom, fills into next section color
```

### 6.3 Cards

```
Default card:
  background:    --bg-surface
  border:        1px solid --border-default
  border-radius: --r-xl (18px)
  padding:       24px
  hover:         border-color → --border-strong, translateY(-3px)
  transition:    240ms ease-out

Raised card (dropdowns, hover states):
  background:    --bg-elevated
  border:        1px solid --border-default

Featured card (testimonials, highlighted):
  background:    --bg-surface
  border:        1.5px solid --ember-default
  box-shadow:    --shadow-ember

Ember tinted card:
  background:    --ember-subtle
  border:        1px solid rgba(212,136,74,0.18)
```

### 6.4 Buttons

```
Primary (ember):
  background:    --ember-default
  color:         #FFFFFF
  border-radius: --r-pill
  padding:       12px 26px (default) | 8px 16px (sm) | 16px 36px (lg)
  font:          Geist 500 14px
  hover:         background → --ember-hover, translateY(-1px), --shadow-ember
  active:        scale(0.97)

Secondary:
  background:    --bg-elevated
  border:        1px solid --border-strong
  color:         --text-primary
  hover:         border-color → --ember-default

Outline:
  background:    transparent
  border:        1px solid --border-strong
  color:         --text-primary
  hover:         border-color → --ember-default, color → --ember-text

Ghost:
  background:    transparent
  color:         --text-secondary
  hover:         background → --bg-elevated, color → --text-primary

Danger:
  background:    rgba(220,38,38,0.15)
  border:        1px solid rgba(220,38,38,0.25)
  color:         --error-text
```

### 6.5 Form Elements

```
Input / Textarea / Select:
  background:    --bg-sunken
  border:        1px solid --border-default (1.5px)
  border-radius: --r-md (10px)
  padding:       11px 14px
  font:          Geist 400 14px, color: --text-primary
  placeholder:   color: --text-tertiary
  focus:         border-color → --ember-default, box-shadow: 0 0 0 3px --ember-subtle
  error:         border-color: rgba(220,38,38,0.50)
  success:       border-color: rgba(58,155,74,0.40)

Label:
  font:          Geist 500 12px, color: --text-secondary
  margin-bottom: 6px

Helper text:
  font:          Geist 400 11px, color: --text-tertiary
  margin-top:    5px
```

### 6.6 Stat Cards

```
background:    --bg-elevated
border:        1px solid --border-default
border-radius: --r-xl
padding:       20px
number:        Bricolage Grotesque 700 34px, letter-spacing: -1.2px
delta badge:   Geist 600 11px, --success-bg / --success-text
label:         Geist 400 12px, --text-secondary
```

---

## 7. Layout System

### 7.1 Container

```css
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 32px;  /* 20px on mobile */
}
```

### 7.2 Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| `xs` | — | < 480px |
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large screen |

### 7.3 Section Padding

| Breakpoint | Vertical Padding |
|------------|-----------------|
| Mobile | 48px |
| Tablet | 64px |
| Desktop | 96px |

### 7.4 Grid Patterns

```
2-col:    1fr 1fr (gap: 24px)
3-col:    repeat(3, 1fr) (gap: 20px)
4-col:    repeat(4, 1fr) (gap: 16px)
Auto:     repeat(auto-fit, minmax(280px, 1fr)) (gap: 16px)
Collapse: All grids → 1 column on mobile
```

---

## 8. Accessibility

| Rule | Specification |
|------|---------------|
| Color contrast | WCAG 2.1 AA minimum (4.5:1 for text) |
| Focus rings | `outline: 2px solid --ember-default; outline-offset: 3px` |
| Interactive targets | Minimum 44×44px touch target |
| Motion | Wrap all animations in `@media (prefers-reduced-motion: no-preference)` |
| Font size | Never below 11px rendered |
| Semantic HTML | Use correct heading hierarchy, landmark roles, aria-labels |

---

## 9. Z-Index Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `--z-base` | 0 | Default |
| `--z-raised` | 10 | Raised cards on hover |
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-modal` | 200 | Modals, drawers |
| `--z-toast` | 300 | Toast notifications |
| `--z-nav` | 400 | Fixed navigation |

---

## 10. CSS Implementation

### globals.css (complete token block)

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

/* DARK MODE — default */
:root, :root[data-theme="dark"] {
  --bg-page: #0A0908;
  --bg-surface: #111009;
  --bg-elevated: #1A1713;
  --bg-sunken: #0D0B09;
  --bg-overlay: rgba(0,0,0,0.72);

  --border-subtle: rgba(255,255,255,0.05);
  --border-default: rgba(255,255,255,0.09);
  --border-strong: rgba(255,255,255,0.16);
  --border-ember: rgba(212,136,74,0.40);

  --text-primary: #F2EDE6;
  --text-secondary: #9C8E82;
  --text-tertiary: #5E5248;
  --text-inverse: #0A0908;
  --text-on-ember: #FFFFFF;

  --ember-default: #D4884A;
  --ember-hover: #E09A5E;
  --ember-subtle: rgba(212,136,74,0.10);
  --ember-muted: rgba(212,136,74,0.18);
  --ember-strong: #C97B3A;
  --ember-text: #E8A06A;

  --success-bg: rgba(58,155,74,0.10);
  --success-border: rgba(58,155,74,0.20);
  --success-text: #6BCF7F;
  --warning-bg: rgba(217,119,6,0.10);
  --warning-border: rgba(217,119,6,0.20);
  --warning-text: #FCD34D;
  --error-bg: rgba(220,38,38,0.10);
  --error-border: rgba(220,38,38,0.20);
  --error-text: #FCA5A5;
  --info-bg: rgba(59,130,246,0.10);
  --info-border: rgba(59,130,246,0.20);
  --info-text: #93C5FD;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.40);
  --shadow-md: 0 4px 20px rgba(0,0,0,0.50);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.60);
  --shadow-xl: 0 20px 60px rgba(0,0,0,0.70);
  --shadow-ember: 0 8px 40px rgba(212,136,74,0.20);

  --nav-bg: rgba(10,9,8,0.94);
  --nav-text: rgba(242,237,230,0.40);
  --nav-active: #D4884A;

  --ff-display: 'Bricolage Grotesque', Georgia, serif;
  --ff-body: 'Geist', system-ui, sans-serif;

  --r-xs: 3px; --r-sm: 6px; --r-md: 10px; --r-lg: 14px;
  --r-xl: 18px; --r-2xl: 24px; --r-3xl: 32px; --r-pill: 9999px;

  --ease-out: cubic-bezier(0.19,1,0.22,1);
  --ease-spring: cubic-bezier(0.34,1.56,0.64,1);
  --ease-in: cubic-bezier(0.95,0.05,0.795,0.035);
  --dur-fast: 140ms;
  --dur-base: 240ms;
  --dur-slow: 420ms;
  --dur-xslow: 700ms;
}

/* LIGHT MODE override */
:root[data-theme="light"] {
  --bg-page: #FAF8F5;
  --bg-surface: #FFFFFF;
  --bg-elevated: #F5F0EB;
  --bg-sunken: #F0E6D6;
  --bg-overlay: rgba(13,12,11,0.60);
  --border-subtle: #F0E6D6;
  --border-default: #E8D5BC;
  --border-strong: #C8B89A;
  --border-ember: rgba(201,123,58,0.40);
  --text-primary: #0D0C0B;
  --text-secondary: #6B5B4E;
  --text-tertiary: #A89D94;
  --text-inverse: #F2EDE6;
  --ember-default: #C97B3A;
  --ember-hover: #D98D4E;
  --ember-subtle: #FFF4EE;
  --ember-muted: #FDE8D0;
  --ember-strong: #9A5820;
  --ember-text: #9A5820;
  --success-bg: #EDFAEF; --success-border: #D6F0DA; --success-text: #2D7A3A;
  --warning-bg: #FFFBEB; --warning-border: #FEF3C7; --warning-text: #B45309;
  --error-bg: #FFF5F5; --error-border: #FEE2E2; --error-text: #B91C1C;
  --info-bg: #EFF6FF; --info-border: #DBEAFE; --info-text: #1D4ED8;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.07);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.08);
  --shadow-xl: 0 16px 48px rgba(0,0,0,0.10);
  --shadow-ember: 0 8px 32px rgba(201,123,58,0.25);
  --nav-bg: rgba(13,12,11,0.92);
  --nav-text: rgba(255,255,255,0.50);
  --nav-active: #C97B3A;
}

/* BASE */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--ff-body);
  background: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
```

### tailwind.config.js (extend block)

```js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        sunken: 'var(--bg-sunken)',
        ember: {
          DEFAULT: 'var(--ember-default)',
          hover: 'var(--ember-hover)',
          text: 'var(--ember-text)',
          subtle: 'var(--ember-subtle)',
          muted: 'var(--ember-muted)',
          strong: 'var(--ember-strong)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
          ember: 'var(--border-ember)',
        },
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'Georgia', 'serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '3px', sm: '6px', md: '10px', lg: '14px',
        xl: '18px', '2xl': '24px', '3xl': '32px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19,1,0.22,1)',
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
      boxShadow: {
        ember: 'var(--shadow-ember)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
    },
  },
}
```

### Theme switcher (React)

```tsx
// src/hooks/useTheme.ts
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('mantle-theme') as Theme) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('mantle-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return { theme, toggle }
}
```

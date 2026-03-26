# Mantle — UX Implementation Sprint Plan
# File: SPRINT_PLAN.md
# Version: 2.0

---

## Pre-Sprint: Immediate Fixes (Day 1 — Do This First)

Before any new feature work, fix these design system violations:

- [ ] Find-replace ALL instances of "Helpr" → "Mantle" across entire codebase
- [ ] Add Google Fonts import to `index.html` (Bricolage Grotesque + Geist only)
- [ ] Paste CSS token block into `globals.css`
- [ ] Extend `tailwind.config.js` with token mappings
- [ ] Set `body { background: var(--bg-page); font-family: var(--ff-body); }`
- [ ] Remove ANY purple gradients from the codebase
- [ ] Replace any pure `#000000` → `#0A0908` and `#FFFFFF` → `#F2EDE6`
- [ ] Implement `useTheme` hook with localStorage + prefers-color-scheme
- [ ] Add `data-theme="dark"` to `<html>` on load

---

## Sprint 1 — Foundation (Week 1)

### Priority 1: Design System Base

- [ ] `globals.css` — full token block (dark + light mode)
- [ ] `tailwind.config.js` — extend with all tokens
- [ ] `useTheme.ts` hook
- [ ] `useScrollReveal.ts` hook
- [ ] Lenis smooth scroll setup

### Priority 2: Core UI Components

- [ ] `Button.tsx` — all 6 variants + 4 sizes
- [ ] `Input.tsx` — all states (default, focus, error, success)
- [ ] `Select.tsx`
- [ ] `Toggle.tsx`
- [ ] `Badge.tsx` — all 6 variants
- [ ] `Alert.tsx` — all 4 states
- [ ] `Card.tsx` — all 3 variants
- [ ] `StatCard.tsx`
- [ ] `ProgressBar.tsx`
- [ ] `Avatar.tsx`
- [ ] `Skeleton.tsx`
- [ ] `ThemeToggle.tsx`

### Priority 3: Layout Components

- [ ] `Nav.tsx` — fixed dark nav with scroll effect
- [ ] `MegaDropdown.tsx` — animated mega menus
- [ ] `Footer.tsx` — 5-column dark footer
- [ ] `PageTransition.tsx` — Framer Motion page transitions
- [ ] Container utility class

---

## Sprint 2 — Homepage (Week 1–2)

Build the homepage section by section, top to bottom:

- [ ] `Hero.tsx` — full-screen dark with glow orbs, animated entrance, stats strip, arc SVG
- [ ] `LogoBar.tsx` — scrolling marquee with enterprise logos
- [ ] `ProblemStatement.tsx` — dark umber section, 3 pain cards, resolution quote
- [ ] `PlatformOverview.tsx` — 4×2 card grid with hover preview
- [ ] `ROICalculator.tsx` — 3 sliders, 4 output cards, live calculation
- [ ] `HowItWorks.tsx` — 3 steps with timing badges
- [ ] `Testimonials.tsx` — 3 cards (center featured dark)
- [ ] `TrustBar.tsx` — 6 compliance badges
- [ ] `FinalCTA.tsx` — full-width dark with glow

**Homepage acceptance criteria:**
- LCP < 2.5s on mobile 4G
- No layout shift (CLS < 0.1)
- All sections animate in on scroll
- ROI calculator updates in real time
- Theme toggle works and persists

---

## Sprint 3 — Service Pages (Week 2–3)

Build each service page using the standard 5-section template.

Priority order (highest commercial value first):
1. [ ] `/services/hr-optimization`
2. [ ] `/services/ai-analytics`
3. [ ] `/services/financial-planning`
4. [ ] `/services/project-collaboration`
5. [ ] `/services/data-security`
6. [ ] `/services/customer-support`
7. [ ] `/services/marketing-campaign`
8. [ ] `/services/inventory-management`

Each page requires:
- [ ] Page-specific hero with correct copy + stats
- [ ] Feature deep-dive section
- [ ] Integration strip
- [ ] Module-specific testimonial
- [ ] Module CTA block

---

## Sprint 4 — Conversion Pages (Week 3)

- [ ] `/services-overview` — hub page with 8-module grid + "build your plan" tool
- [ ] `/for-benefits-leaders` — full HR executive page
- [ ] `/book-demo/select-services` — 3-step qualifier flow
- [ ] `/book-demo/form` — booking form with calendar
- [ ] Confirmation page with personalized demo agenda

---

## Sprint 5 — Resource Center (Week 4)

- [ ] Resource hub homepage
- [ ] Article listing + individual article template
- [ ] Blog listing + blog post template
- [ ] Case studies listing + case study template
- [ ] Webinars page
- [ ] Knowledge base + search
- [ ] Community forum
- [ ] API documentation page

---

## Sprint 6 — Polish & QA (Week 4–5)

### Visual QA Checklist

**Typography:**
- [ ] All headlines use Bricolage Grotesque
- [ ] All UI text uses Geist
- [ ] No text below 11px rendered size
- [ ] Eyebrow labels: 10–11px, uppercase, letter-spaced, ember colored
- [ ] Correct font weights throughout

**Color:**
- [ ] Dark mode: all darks are warm-toned (not blue-gray)
- [ ] No pure black (#000000) or pure white (#FFFFFF) anywhere
- [ ] Ember accent used sparingly and consistently
- [ ] All semantic colors correct (success=green, error=red, etc.)
- [ ] Light mode toggle works correctly on every page

**Spacing:**
- [ ] Section padding: 96px desktop / 64px tablet / 48px mobile
- [ ] Card padding: 24px default
- [ ] Consistent grid gaps: 16–24px
- [ ] No elements touching viewport edges

**Motion:**
- [ ] Page load: staggered hero animation
- [ ] Scroll reveals: all major sections
- [ ] Hover states: cards lift, buttons scale
- [ ] No animation without `prefers-reduced-motion` guard
- [ ] Lenis smooth scroll working

**Responsive:**
- [ ] Tested on: 375px / 768px / 1024px / 1280px / 1440px
- [ ] All grids collapse correctly
- [ ] Navigation hamburger works on mobile
- [ ] Hero text legible on mobile
- [ ] ROI calculator usable on mobile

**Accessibility:**
- [ ] All interactive elements have focus-visible styles
- [ ] All images have alt text
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Color contrast passes WCAG 2.1 AA
- [ ] Form labels associated with inputs
- [ ] Keyboard navigation works throughout

**Performance:**
- [ ] Fonts preloaded in `<head>`
- [ ] Images optimized (WebP format)
- [ ] Code splitting by route
- [ ] No unused CSS in production
- [ ] Google Fonts loaded with `display=swap`

---

## Definition of Done

A page is "done" when it:

1. Matches the design system exactly (no token violations)
2. Passes all responsive breakpoints (375px to 1440px)
3. Works in both dark and light mode
4. Has correct copy from `UX_WRITING.md`
5. Passes accessibility checks (focus states, contrast, alt text)
6. Animates on scroll and on hover
7. LCP < 2.5s on mobile
8. Has been reviewed against the design tokens

---

## Quick Reference: Most Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using `font-family: sans-serif` | Use `font-family: var(--ff-body)` |
| Using Playfair for descriptions | Use Geist for body text |
| Hardcoding `#000` or `#fff` | Use `var(--text-primary)` or `var(--bg-page)` |
| Creating one-off CSS classes | Use design system tokens |
| Purple gradient background | Use ember or dark backgrounds |
| Cold gray (#4B5563 etc.) | Use warm stone tones from the token set |
| No hover state on cards | Add `hover:border-[var(--border-strong)]` + `hover:-translate-y-1` |
| No focus-visible on buttons | Add `focus-visible:outline-2 focus-visible:outline-[var(--ember-default)]` |
| Section padding < 80px | Min 96px desktop, 64px tablet, 48px mobile |
| Animation without reduced-motion | Wrap in `@media (prefers-reduced-motion: no-preference)` |

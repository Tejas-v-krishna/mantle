# Mantle — Information Architecture & UX Flow
# File: INFORMATION_ARCHITECTURE.md
# Version: 2.0

---

## 1. Site Map

```
Mantle/
├── / (Home)
│   ├── Hero + stats strip
│   ├── Social proof bar (logos)
│   ├── Problem statement
│   ├── Platform overview (8 tools)
│   ├── ROI Calculator (interactive)
│   ├── How it works (3 steps)
│   ├── Testimonials
│   ├── Trust bar (compliance)
│   └── Final CTA
│
├── /services-overview
│   ├── Hero
│   ├── 8-module card grid
│   ├── "Build your plan" tool (new)
│   └── Integration strip
│
├── /for-benefits-leaders
│   ├── Hero (ROI-first)
│   ├── Business case (3 cost columns)
│   ├── Implementation timeline (4 steps)
│   ├── Compliance & security
│   ├── Peer proof (case studies)
│   └── CTA (Demo + whitepaper download)
│
├── /services/
│   ├── ai-analytics
│   ├── customer-support
│   ├── hr-optimization
│   ├── financial-planning
│   ├── marketing-campaign
│   ├── inventory-management
│   ├── project-collaboration
│   └── data-security
│
├── /resources/
│   ├── articles (+ /resources/articles/:slug)
│   ├── blog (+ /resources/blog/:slug)
│   ├── case-studies (+ /resources/case-studies/:slug)
│   ├── webinars
│   ├── tutorials (+ /resources/tutorials/:slug)
│   ├── videos
│   ├── whitepapers
│   ├── knowledge-base (+ /resources/knowledge-base/:slug)
│   ├── api-docs
│   └── community
│
├── /book-demo/
│   ├── select-services (step 1)
│   └── form (step 2 + confirmation)
│
└── /company/
    └── about
```

---

## 2. Navigation Architecture

### 2.1 Primary Navigation Structure

```
[Logo]  Services ▾  Solutions ▾  Resources ▾  Company ▾        [Log in]  [Book a Demo →]
```

### 2.2 Mega-Dropdown: Services

```
┌─────────────────────────────────────────────────────────────┐
│  AI & Automation          Business Tools                      │
│  ─────────────────        ──────────────                     │
│  AI Analytics Dashboard   Financial Planning Tools           │
│  Customer Support Auto.   Marketing Campaign Manager         │
│  HR Optimization          Inventory Management               │
│                                                               │
│  Security & Ops           Platform                           │
│  ─────────────            ────────                           │
│  Project Collaboration    Services Overview →                │
│  Data Security Solutions  See all integrations →            │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Mega-Dropdown: Solutions

```
┌─────────────────────────────────────┐
│  By Role          By Size           │
│  ────────         ──────            │
│  HR Leaders       Enterprise        │
│  CFOs & Finance   Mid-market        │
│  COOs & Ops       Growth stage      │
│  IT Admins                          │
│                                     │
│  Featured                           │
│  ─────────                          │
│  ROI Calculator →                   │
│  See pricing →                     │
└─────────────────────────────────────┘
```

### 2.4 Mega-Dropdown: Resources

```
┌────────────────────────────────────────────┐
│  Learn               Reference             │
│  ─────               ─────────            │
│  Blog & Articles     Knowledge Base        │
│  Tutorials           API Documentation     │
│  Webinars            Whitepapers           │
│  Video Library       Case Studies          │
│                                            │
│  Community                                 │
│  ─────────                                 │
│  Community Forum                           │
│  Developer Portal                          │
└────────────────────────────────────────────┘
```

---

## 3. User Flows

### 3.1 Primary Conversion Flow (Enterprise HR Buyer)

```
Google Search: "enterprise workforce management platform"
        ↓
Home Page — Hero
        ↓
Scrolls to ROI Calculator
(inputs employees + tools → sees $2.4M savings estimate)
        ↓
Clicks "See your full ROI report →"
        ↓
/book-demo/select-services
(qualifies: company size, modules of interest, challenge)
        ↓
/book-demo/form
(enters details, books calendar slot)
        ↓
Confirmation page
(personalized demo agenda + calendar invite + case study)
        ↓
Demo call → Trial → Contract
```

### 3.2 HR Leader Flow

```
LinkedIn ad: "The care benefit that pays for itself"
        ↓
/for-benefits-leaders
        ↓
Reads business case section (absenteeism cost numbers)
        ↓
Downloads "HR Leader Guide" PDF (lead capture)
        ↓
Email nurture sequence (3 emails over 7 days)
        ↓
Books demo
```

### 3.3 Developer / Evaluator Flow

```
ProductHunt / Twitter referral
        ↓
Home Page
        ↓
Services Overview → specific service page
        ↓
Resources → API Documentation
        ↓
Community Forum
        ↓
/book-demo (enterprise trial request)
```

### 3.4 Returning User Flow

```
Direct URL / email link
        ↓
Already logged in → redirected to dashboard
        ↓
Relevant service module (e.g. /services/hr-optimization)
        ↓
Internal platform (not public site)
```

---

## 4. Page Anatomy — Standard Template

Every service page follows this exact 5-section structure:

```
┌──────────────────────────────────────────┐
│  SECTION 1: PAGE HERO                    │
│  Eyebrow + H1 (Bricolage) + sub-copy     │
│  + 4 key metric stat cards               │
│  + Primary CTA + Secondary CTA           │
├──────────────────────────────────────────┤
│  SECTION 2: FEATURE DEEP DIVE            │
│  Tabbed or scrolling feature list        │
│  Each feature: icon + title + desc       │
│  + mini-preview of the actual UI         │
├──────────────────────────────────────────┤
│  SECTION 3: INTEGRATION STRIP            │
│  "Works with your stack"                 │
│  Scrolling logo strip of integrations    │
├──────────────────────────────────────────┤
│  SECTION 4: SOCIAL PROOF                 │
│  1-2 testimonials specific to this tool  │
│  Metric outcome badges                   │
├──────────────────────────────────────────┤
│  SECTION 5: MODULE CTA                   │
│  "Try [Module] free for 30 days"         │
│  → Links to /book-demo/select-services   │
└──────────────────────────────────────────┘
```

---

## 5. Content Hierarchy Rules

### 5.1 Heading Hierarchy

```
H1  — One per page. Bricolage Grotesque 700. The core promise.
H2  — Section headlines. Bricolage Grotesque 700. What this section does.
H3  — Feature/card titles. Geist 700. 2–5 words max.
H4  — Sub-feature labels. Geist 600. Uppercase + letter-spaced.
```

### 5.2 CTA Hierarchy

```
Primary CTA    — One per hero section. Ember filled button.
Secondary CTA  — One per hero section. Outline button.
Tertiary CTA   — "Learn more →" text links. Ember colored.
Section CTA    — One per major section. Never two primaries in view.
```

### 5.3 Text Length Rules

```
Hero H1:         3–8 words. Single strong statement.
Sub-headline:    20–35 words. One complete thought.
Card description: 15–25 words. What + why it matters.
Section copy:    30–50 words max. Below that, use bullets.
Eyebrow label:   2–4 words. UPPERCASE. Amber colored.
```

---

## 6. Component Library Index

Every component defined in the design system:

| Component | File Location | Status |
|-----------|--------------|--------|
| Navigation | `components/layout/Nav.tsx` | ✅ Define |
| Hero Section | `components/home/Hero.tsx` | ✅ Define |
| Stat Card | `components/ui/StatCard.tsx` | ✅ Define |
| Feature Card | `components/ui/FeatureCard.tsx` | ✅ Define |
| Service Card | `components/ui/ServiceCard.tsx` | ✅ Define |
| Testimonial Card | `components/ui/TestimonialCard.tsx` | ✅ Define |
| ROI Calculator | `components/home/ROICalculator.tsx` | ✅ Define |
| CTA Section | `components/sections/CTASection.tsx` | ✅ Define |
| Trust Bar | `components/sections/TrustBar.tsx` | ✅ Define |
| Logo Bar | `components/sections/LogoBar.tsx` | ✅ Define |
| Button | `components/ui/Button.tsx` | ✅ Define |
| Input | `components/ui/Input.tsx` | ✅ Define |
| Select | `components/ui/Select.tsx` | ✅ Define |
| Toggle | `components/ui/Toggle.tsx` | ✅ Define |
| Badge | `components/ui/Badge.tsx` | ✅ Define |
| Alert | `components/ui/Alert.tsx` | ✅ Define |
| Modal | `components/ui/Modal.tsx` | ✅ Define |
| Progress Bar | `components/ui/ProgressBar.tsx` | ✅ Define |
| Avatar | `components/ui/Avatar.tsx` | ✅ Define |
| Skeleton | `components/ui/Skeleton.tsx` | ✅ Define |
| Breadcrumb | `components/ui/Breadcrumb.tsx` | ✅ Define |
| Data Table | `components/ui/DataTable.tsx` | ✅ Define |
| Theme Toggle | `components/ui/ThemeToggle.tsx` | ✅ Define |
| Footer | `components/layout/Footer.tsx` | ✅ Define |
| Mega Dropdown | `components/layout/MegaDropdown.tsx` | ✅ Define |
| Page Transition | `components/layout/PageTransition.tsx` | ✅ Define |

---

## 7. SEO & Metadata Structure

Every page must include:

```tsx
// Template for each page
export const metadata = {
  title: '[Page Title] | Mantle — Enterprise Productivity Platform',
  description: '[Max 155 chars. Lead with the value proposition.]',
  openGraph: {
    title: '[Page Title] | Mantle',
    description: '[Same or shorter]',
    image: '/og/[page-name].png',  // 1200×630px, dark background
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Page Title] | Mantle',
    image: '/og/[page-name].png',
  }
}
```

### OG Image Template

- Dimensions: 1200 × 630px
- Background: `#0A0908` (--bg-page)
- Logo: Mantle wordmark in white, top-left
- Headline: Bricolage Grotesque 700, white, centered
- Accent: Ember orb glow behind headline
- Footer: mantle.so in Geist, bottom-right

---

## 8. Performance Targets

| Metric | Target | How to Achieve |
|--------|--------|----------------|
| LCP | < 2.5s | Hero image lazy loaded, fonts preloaded |
| FID | < 100ms | No heavy JS on initial load |
| CLS | < 0.1 | Fixed height skeletons for async content |
| Bundle size | < 300KB JS | Code split by route, lazy load service pages |
| Font load | No FOUT | `font-display: swap` + preload critical fonts |

---

## 9. Responsive Behaviour Rules

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navigation | Hamburger menu | Hamburger menu | Full horizontal nav |
| Hero H1 | 44px | 60px | 88px |
| Grid (3-col) | 1 col | 2 col | 3 col |
| Grid (4-col) | 1 col | 2 col | 4 col |
| ROI Calculator | Stacked | Stacked | Side-by-side |
| Section padding | 48px | 64px | 96px |
| Container padding | 20px | 28px | 32px |
| Stats strip | 2×2 grid | 4-col | 4-col |
| Footer | 1 col | 2 col | 5 col |

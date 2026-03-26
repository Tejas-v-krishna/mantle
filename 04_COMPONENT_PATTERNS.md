# Mantle — Component Patterns & Implementation Guide
# File: COMPONENT_PATTERNS.md
# Version: 2.0

---

## 1. Naming Conventions

```
Components:    PascalCase     → Button, StatCard, FeatureCard
Files:         PascalCase     → Button.tsx, StatCard.tsx
CSS classes:   kebab-case     → .stat-card, .feature-card
CSS tokens:    --kebab-case   → --ember-default, --bg-surface
Hooks:         useVerb        → useTheme, useScrollReveal
Utils:         camelCase      → formatCurrency, truncateText
Constants:     SCREAMING_SNAKE → EMBER_DEFAULT, MAX_EMPLOYEES
```

---

## 2. React Component Template

```tsx
// Standard component structure — always follow this pattern

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ComponentProps {
  variant?: 'default' | 'raised' | 'featured'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const VARIANTS = {
  default: 'bg-[var(--bg-surface)] border-[var(--border-default)]',
  raised: 'bg-[var(--bg-elevated)] border-[var(--border-default)]',
  featured: 'bg-[var(--bg-surface)] border-[var(--ember-default)] border-[1.5px]',
}

const SIZES = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'md', className, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.24, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          'rounded-[var(--r-xl)] border transition-colors duration-[var(--dur-base)]',
          'hover:border-[var(--border-strong)]',
          VARIANTS[variant],
          SIZES[size],
          className
        )}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
```

---

## 3. Button Component

```tsx
// components/ui/Button.tsx

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'ember-outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  loading?: boolean
}

const VARIANTS = {
  primary: [
    'bg-[var(--ember-default)] text-white',
    'hover:bg-[var(--ember-hover)] hover:shadow-[var(--shadow-ember)]',
    'active:scale-[0.97]',
  ].join(' '),
  secondary: [
    'bg-[var(--bg-elevated)] text-[var(--text-primary)]',
    'border border-[var(--border-strong)]',
    'hover:border-[var(--ember-default)]',
  ].join(' '),
  outline: [
    'bg-transparent text-[var(--text-primary)]',
    'border border-[var(--border-strong)]',
    'hover:border-[var(--ember-default)] hover:text-[var(--ember-text)]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--text-secondary)]',
    'hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]',
  ].join(' '),
  danger: [
    'bg-[var(--error-bg)] text-[var(--error-text)]',
    'border border-[var(--error-border)]',
    'hover:bg-[rgba(220,38,38,0.20)]',
  ].join(' '),
  'ember-outline': [
    'bg-[var(--ember-subtle)] text-[var(--ember-text)]',
    'border border-[rgba(212,136,74,0.30)]',
    'hover:bg-[var(--ember-muted)]',
  ].join(' '),
}

const SIZES = {
  sm: 'px-4 py-2 text-xs font-medium',
  md: 'px-6 py-3 text-sm font-medium',
  lg: 'px-9 py-4 text-base font-medium',
  icon: 'w-10 h-10 p-0 justify-center',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: variant === 'primary' ? -1 : 0 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.14, ease: [0.19, 1, 0.22, 1] }}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center gap-2 rounded-[var(--r-pill)]',
          'font-[var(--ff-body)] transition-all duration-[var(--dur-base)]',
          'focus-visible:outline-2 focus-visible:outline-[var(--ember-default)] focus-visible:outline-offset-3',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      >
        {loading ? <span className="animate-spin">⟳</span> : children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
```

---

## 4. Scroll Reveal Hook

```tsx
// hooks/useScrollReveal.ts

import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  delay?: number
  once?: boolean
}

export function useScrollReveal({
  threshold = 0.12,
  delay = 0,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay, once])

  return { ref, isVisible }
}

// Usage:
// const { ref, isVisible } = useScrollReveal({ delay: 100 })
// <div ref={ref} className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}>
```

---

## 5. Theme Toggle Component

```tsx
// components/ui/ThemeToggle.tsx

import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={[
        'flex items-center gap-2 rounded-[var(--r-pill)]',
        'px-3 py-2 text-xs font-medium',
        'bg-[var(--bg-elevated)] text-[var(--text-secondary)]',
        'border border-[var(--border-default)]',
        'hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]',
        'transition-all duration-[var(--dur-base)]',
      ].join(' ')}
    >
      {theme === 'dark' ? '☀' : '🌙'}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
```

---

## 6. Stat Card Component

```tsx
// components/ui/StatCard.tsx

interface StatCardProps {
  label: string
  value: string | number
  delta?: string
  deltaType?: 'positive' | 'negative' | 'neutral'
  description?: string
}

export function StatCard({ label, value, delta, deltaType = 'positive', description }: StatCardProps) {
  const deltaColors = {
    positive: 'bg-[var(--success-bg)] text-[var(--success-text)]',
    negative: 'bg-[var(--error-bg)] text-[var(--error-text)]',
    neutral: 'bg-[var(--bg-elevated)] text-[var(--text-secondary)]',
  }

  return (
    <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--r-xl)] p-5">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-medium text-[var(--text-secondary)] font-[var(--ff-body)]">
          {label}
        </span>
        {delta && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${deltaColors[deltaType]}`}>
            {delta}
          </span>
        )}
      </div>
      <div
        className="text-3xl font-bold text-[var(--text-primary)] tracking-tight leading-none mb-1"
        style={{ fontFamily: 'var(--ff-display)', letterSpacing: '-1.2px' }}
      >
        {value}
      </div>
      {description && (
        <p className="text-xs text-[var(--text-secondary)] font-[var(--ff-body)]">
          {description}
        </p>
      )}
    </div>
  )
}
```

---

## 7. Badge Component

```tsx
// components/ui/Badge.tsx

interface BadgeProps {
  variant?: 'ember' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  showDot?: boolean
  children: React.ReactNode
  className?: string
}

const BADGE_VARIANTS = {
  ember: 'bg-[var(--ember-subtle)] text-[var(--ember-text)]',
  success: 'bg-[var(--success-bg)] text-[var(--success-text)]',
  warning: 'bg-[var(--warning-bg)] text-[var(--warning-text)]',
  error: 'bg-[var(--error-bg)] text-[var(--error-text)]',
  info: 'bg-[var(--info-bg)] text-[var(--info-text)]',
  neutral: 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-default)]',
}

export function Badge({ variant = 'neutral', showDot = true, children, className }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-0.5',
        'text-[10px] font-semibold rounded-full',
        'font-[var(--ff-body)]',
        BADGE_VARIANTS[variant],
        className,
      ].join(' ')}
    >
      {showDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 flex-shrink-0" />
      )}
      {children}
    </span>
  )
}
```

---

## 8. Progress Bar Component

```tsx
// components/ui/ProgressBar.tsx

interface ProgressBarProps {
  label: string
  value: number      // 0–100
  total?: string
  current?: string
  variant?: 'ember' | 'success' | 'warning'
  height?: number
}

const PROGRESS_FILLS = {
  ember: 'linear-gradient(90deg, var(--ember-strong), var(--ember-text))',
  success: 'linear-gradient(90deg, #2D7A3A, #6BCF7F)',
  warning: 'linear-gradient(90deg, #B45309, #FCD34D)',
}

export function ProgressBar({
  label, value, total, current, variant = 'ember', height = 5
}: ProgressBarProps) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-[var(--text-secondary)] font-[var(--ff-body)]">{label}</span>
        <span className="text-xs font-medium text-[var(--text-primary)] font-[var(--ff-body)]">
          {current && total ? `${current} / ${total}` : `${value}%`}
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height, background: 'var(--border-default)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${Math.min(100, Math.max(0, value))}%`,
            background: PROGRESS_FILLS[variant],
          }}
        />
      </div>
    </div>
  )
}
```

---

## 9. Alert Component

```tsx
// components/ui/Alert.tsx

interface AlertProps {
  variant: 'success' | 'warning' | 'error' | 'info'
  title: string
  description?: string
  icon?: string
}

const ALERT_STYLES = {
  success: {
    wrapper: 'bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)]',
    icon: '✓',
  },
  warning: {
    wrapper: 'bg-[var(--warning-bg)] border-[var(--warning-border)] text-[var(--warning-text)]',
    icon: '⚠',
  },
  error: {
    wrapper: 'bg-[var(--error-bg)] border-[var(--error-border)] text-[var(--error-text)]',
    icon: '✕',
  },
  info: {
    wrapper: 'bg-[var(--info-bg)] border-[var(--info-border)] text-[var(--info-text)]',
    icon: 'ℹ',
  },
}

export function Alert({ variant, title, description, icon }: AlertProps) {
  const styles = ALERT_STYLES[variant]

  return (
    <div className={`flex gap-3 p-4 rounded-[var(--r-lg)] border ${styles.wrapper}`}>
      <span className="text-base flex-shrink-0 mt-0.5">{icon || styles.icon}</span>
      <div>
        <p className="text-sm font-semibold mb-0.5 font-[var(--ff-body)]">{title}</p>
        {description && (
          <p className="text-xs opacity-80 leading-relaxed font-[var(--ff-body)]">{description}</p>
        )}
      </div>
    </div>
  )
}
```

---

## 10. Skeleton Component

```tsx
// components/ui/Skeleton.tsx

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circle' | 'rect'
  lines?: number
}

export function Skeleton({ className, variant = 'rect', lines = 1 }: SkeletonProps) {
  const base = [
    'animate-pulse',
    'bg-gradient-to-r from-[var(--bg-elevated)] via-[var(--bg-surface)] to-[var(--bg-elevated)]',
    'bg-[length:200%_100%]',
    'rounded-[var(--r-md)]',
  ].join(' ')

  if (variant === 'circle') {
    return <div className={`${base} rounded-full ${className}`} />
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${base} h-3 ${i === lines - 1 ? 'w-3/4' : 'w-full'} ${className}`}
          />
        ))}
      </div>
    )
  }

  return <div className={`${base} ${className}`} />
}

// tailwind.config.js — add this animation:
// animation: { pulse: 'skeleton-shimmer 1.6s linear infinite' }
// keyframes: { 'skeleton-shimmer': { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } } }
```

---

## 11. Input Component

```tsx
// components/ui/Input.tsx

import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  state?: 'default' | 'error' | 'success'
}

const INPUT_STATES = {
  default: 'border-[var(--border-default)] focus:border-[var(--ember-default)] focus:shadow-[0_0_0_3px_var(--ember-subtle)]',
  error: 'border-[rgba(220,38,38,0.50)] focus:shadow-[0_0_0_3px_var(--error-bg)]',
  success: 'border-[rgba(58,155,74,0.40)]',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, state = 'default', className, ...props }, ref) => {
    const inputState = error ? 'error' : state

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5 font-[var(--ff-body)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-[var(--bg-sunken)] rounded-[var(--r-md)]',
            'px-3.5 py-2.5 text-sm font-[var(--ff-body)]',
            'text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]',
            'border transition-all duration-[var(--dur-base)] outline-none',
            INPUT_STATES[inputState],
            className
          )}
          {...props}
        />
        {(hint || error) && (
          <p className={cn(
            'text-[11px] mt-1.5 font-[var(--ff-body)]',
            error ? 'text-[var(--error-text)]' : 'text-[var(--text-tertiary)]'
          )}>
            {error || hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
```

---

## 12. Hero Section Pattern

```tsx
// components/home/Hero.tsx

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const STAT_ITEMS = [
  { value: '10,000+', label: 'Enterprises worldwide' },
  { value: '40%', label: 'Avg productivity gain' },
  { value: '8 tools', label: 'In one platform' },
  { value: '3× ROI', label: 'Average year one' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }
  })
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: 'var(--bg-page)', padding: '140px 32px 100px' }}
    >
      {/* Glow orbs */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,136,74,0.14) 0%, transparent 70%)' }} />

      {/* Eyebrow */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest"
        style={{ background: 'var(--ember-subtle)', border: '0.5px solid var(--border-ember)', color: 'var(--ember-text)', fontFamily: 'var(--ff-body)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember-default)] animate-pulse" />
        Enterprise Productivity Platform
      </motion.div>

      {/* H1: High-Impact "Mantle Journal" Style */}
      <motion.h1 custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
        className="mb-8 leading-[0.95] text-white tracking-[-0.02em]"
        style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(48px, 8vw, 92px)', fontWeight: 700 }}
      >
        Run Your Enterprise <br />
        <span className="text-[var(--text-tertiary)] italic font-light block opacity-70">on One System.</span>
      </motion.h1>

      {/* Sub: Focused Visual Tension */}
      <motion.p custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
        className="mb-12 max-w-[640px] mx-auto leading-relaxed font-medium"
        style={{ fontFamily: 'var(--ff-body)', fontSize: '20px', color: 'var(--text-secondary)' }}
      >
        Unified tools for HR, finance, and operations. Built for the modern workforce 
        that demands speed, precision, and elegance.
      </motion.p>

      {/* CTAs */}
      <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
        className="flex gap-3 justify-center flex-wrap mb-18"
      >
        <Button size="lg">Start your free trial →</Button>
        <Button variant="outline" size="lg">Watch a 2-min demo</Button>
      </motion.div>

      {/* Stats strip */}
      <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
        className="flex divide-x overflow-hidden rounded-2xl"
        style={{ border: '0.5px solid var(--border-default)', background: 'rgba(255,255,255,0.03)' }}
      >
        {STAT_ITEMS.map((stat, i) => (
          <div key={i} className="px-9 py-5 text-center">
            <div className="text-2xl font-bold tracking-tight text-white mb-1"
              style={{ fontFamily: 'var(--ff-display)', letterSpacing: '-0.8px' }}>
              <span style={{ color: 'var(--ember-text)' }}>{stat.value}</span>
            </div>
            <div className="text-[11px] uppercase tracking-wider"
              style={{ fontFamily: 'var(--ff-body)', color: 'var(--text-tertiary)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Arc wave transition */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 80"
        fill="none" preserveAspectRatio="none">
        <path d="M0 80 Q720 0 1440 80 L1440 80 L0 80Z" fill="var(--bg-surface)" />
      </svg>
    </section>
  )
}
```

---

## 13. Anti-Patterns — Never Do These

```tsx
// ❌ WRONG — hardcoded hex
<div style={{ background: '#0A0908' }}>

// ✅ CORRECT — CSS variable
<div style={{ background: 'var(--bg-page)' }}>

// ❌ WRONG — raw Tailwind color
<div className="bg-gray-900">

// ✅ CORRECT — token-mapped Tailwind
<div className="bg-page">

// ❌ WRONG — wrong font for headline
<h1 style={{ fontFamily: 'Geist' }}>Hero Headline</h1>

// ✅ CORRECT
<h1 style={{ fontFamily: 'var(--ff-display)' }}>Hero Headline</h1>

// ❌ WRONG — animation without reduced motion
<div className="animate-bounce">

// ✅ CORRECT
<div className="motion-safe:animate-bounce">

// ❌ WRONG — no focus state
<button className="bg-ember text-white">

// ✅ CORRECT
<button className="bg-ember text-white focus-visible:outline-2 focus-visible:outline-[var(--ember-default)]">

// ❌ WRONG — mixing hover styles in component and in CSS
// Pick one — Tailwind hover: prefix OR inline style — never both on the same element

// ❌ WRONG — creating one-off utility classes
.special-card-for-homepage { background: #1A1713; }

// ✅ CORRECT — use design system token
// bg-elevated (from tailwind config) or style={{ background: 'var(--bg-elevated)' }}
```

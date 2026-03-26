import { forwardRef, ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

// Omit standard button props that conflict with motion props
type CombinedButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> & HTMLMotionProps<"button">;

interface ButtonProps extends CombinedButtonProps {
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
          'inline-flex items-center gap-2 rounded-[var(--r-pill)] justify-center',
          'font-[var(--ff-body)] transition-all duration-[var(--dur-base)]',
          'focus-visible:outline-2 focus-visible:outline-[var(--ember-default)] focus-visible:outline-offset-3',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      >
        {loading ? <span className="animate-spin text-lg">⟳</span> : children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

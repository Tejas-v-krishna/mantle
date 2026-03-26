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

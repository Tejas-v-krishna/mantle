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

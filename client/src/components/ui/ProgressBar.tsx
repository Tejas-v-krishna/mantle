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

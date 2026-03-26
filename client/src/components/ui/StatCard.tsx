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

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

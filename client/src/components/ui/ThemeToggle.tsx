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

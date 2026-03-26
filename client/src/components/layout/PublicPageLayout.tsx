import { motion } from 'framer-motion'
import { PageTransition } from './PageTransition'

interface PublicPageLayoutProps {
  children: React.ReactNode
  title: string | React.ReactNode
  subtitle?: string
  badge?: string
  badgeIcon?: React.ReactNode
}

export function PublicPageLayout({ children, title, subtitle, badge, badgeIcon }: PublicPageLayoutProps) {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-[var(--bg-page)] min-h-screen">
        <div className="container">
          <header className="mb-20">
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-0 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ember-text)] mb-8"
              >
                {badgeIcon && <span className="opacity-80">{badgeIcon}</span>}
                {badge}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-[var(--text-primary)] mb-10 tracking-[-0.04em] leading-[1.05]"
              style={{ fontFamily: 'var(--ff-display)' }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-medium"
              >
                {subtitle}
              </motion.p>
            )}
          </header>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

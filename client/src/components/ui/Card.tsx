import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
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

export const Card = forwardRef<HTMLDivElement, CardProps>(
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

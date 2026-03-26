import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Services', href: '/services-overview' },
  { label: 'Solutions', href: '/for-benefits-leaders' },
  { label: 'Resources', href: '/resources/articles' },
  { label: 'Company', href: '/company/about' },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-500',
        isScrolled 
          ? 'py-4 bg-[var(--bg-page)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]' 
          : 'py-8 bg-transparent'
      )}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--ember-default)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-lg shadow-[var(--ember-muted)]/20">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-[var(--ff-display)] font-bold tracking-tight text-[var(--text-primary)]">
            Mantle
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-[13px] font-bold transition-all duration-300 hover:text-[var(--text-primary)] font-[var(--ff-body)] uppercase tracking-widest',
                location.pathname === link.href ? 'text-[var(--ember-text)]' : 'text-[var(--text-secondary)]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <div className="h-4 w-px bg-[var(--border-subtle)]" />
          <Link to="/book-demo/select-services">
            <Button size="sm" className="px-6 font-bold">
              Analyze Ops
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[var(--text-primary)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[var(--bg-page)] border-b border-[var(--border-subtle)] p-8 md:hidden flex flex-col gap-8 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-2xl font-bold font-[var(--ff-display)] text-[var(--text-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <Link to="/book-demo/select-services" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full py-4 text-lg">Book a Demo</Button>
              </Link>
              <Button variant="outline" className="w-full py-4 text-lg">Log in</Button>
              <div className="flex justify-center mt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

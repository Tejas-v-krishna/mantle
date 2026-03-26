import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  {
    title: 'Platform',
    links: [
      { label: 'Services Overview', href: '/services-overview' },
      { label: 'AI Analytics', href: '/services/ai-analytics' },
      { label: 'HR Optimization', href: '/services/hr-optimization' },
      { label: 'Project Collaboration', href: '/services/project-collaboration' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog & Articles', href: '/resources/blog' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'API Reference', href: '/resources/api-docs' },
      { label: 'Community', href: '/resources/community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Team', href: '/company/team' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Press', href: '/company/press' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-page)] border-t border-[var(--border-subtle)] pt-24 pb-12">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[var(--ember-default)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-[var(--ff-display)] font-bold tracking-tight text-[var(--text-primary)]">
                Mantle
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm max-w-[280px] leading-relaxed mb-8 font-medium font-[var(--ff-body)]">
              The operating layer your enterprise stands on. Unified tools for HR, finance, and operations.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-8 font-[var(--ff-body)]">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium font-[var(--ff-body)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--border-subtle)] gap-6">
          <p className="text-[11px] text-[var(--text-secondary)] font-medium font-[var(--ff-body)]">
            © {new Date().getFullYear()} Mantle Platform Inc. Built for performance.
          </p>
          <div className="flex gap-8">
            <span className="text-[11px] text-[var(--text-tertiary)] flex items-center gap-2 font-medium font-[var(--ff-body)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success-text)]" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

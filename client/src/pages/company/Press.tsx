import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Newspaper } from 'lucide-react'

export default function Press() {
  return (
    <PublicPageLayout 
      title={<>Mantle <span className="text-[var(--text-tertiary)] italic font-light">Newsroom.</span></>}
      subtitle="Latest updates, media assets, and corporate announcements from the Mantle team."
      badge="Press & Media"
      badgeIcon={<Newspaper size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map(i => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-3xl">
            <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-4 block">March 15, 2025</span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--ff-display)] mb-4">Mantle Raises Series B to Accelerate Agnetic Core.</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">Today we announce a $150M funding round to expand our autonomous perimeter research...</p>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Briefcase } from 'lucide-react'

export default function Careers() {
  return (
    <PublicPageLayout 
      title={<>Build the <span className="text-[var(--text-tertiary)] italic font-light">Future.</span></>}
      subtitle="Join a team of engineers, designers, and strategists defining the next era of autonomous enterprise."
      badge="Global Careers"
      badgeIcon={<Briefcase size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-3xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Principal Engineer (Agents)</h3>
              <p className="text-[var(--text-secondary)]">Remote / San Francisco</p>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest text-[var(--ember-text)]">Apply Now</button>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

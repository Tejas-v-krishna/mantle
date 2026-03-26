import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { ArrowRight, BarChart3, Clock, TrendingUp } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    { title: 'Global Fintech Induction', metric: '42%', label: 'Ops Velocity Increase', description: 'How a leading fintech unified their fragmented HR and Ops stack.' },
    { title: 'Next-Gen Logistics', metric: '$4.1M', label: 'Annual Recovery', description: 'Automating the manual friction in supply chain decision-making.' },
    { title: 'Cloud Infrastructure Group', metric: '14 Days', label: 'Implementation Time', description: 'Rapid deployment of the Mantle operating layer at scale.' }
  ]

  return (
    <PublicPageLayout 
      title={<>Proven <span className="text-[var(--text-tertiary)] italic font-light">Yield.</span></>}
      subtitle="Examine how the world's most sophisticated enterprises are reclaiming focus and saving millions through the Mantle operating layer."
      badge="Strategic Briefings"
      badgeIcon={<BarChart3 size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="space-y-12 max-w-5xl">
        {cases.map((item, i) => (
          <Card key={i} className="p-0 overflow-hidden bg-[var(--bg-elevated)] border-[var(--border-subtle)] flex flex-col md:flex-row group transition-all hover:border-[var(--ember-default)]">
            <div className="p-12 md:w-2/3 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] font-[var(--ff-display)] transition-colors mb-4">{item.title}</h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-bold text-[var(--ember-text)] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                Read Full Briefing <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-[var(--bg-sunken)] p-12 md:w-1/3 flex flex-col justify-center border-l border-[var(--border-subtle)] md:border-l-0 md:border-l-[var(--border-default)]">
              <div className="text-[var(--text-tertiary)] mb-4">
                {i === 0 && <TrendingUp size={24} />}
                {i === 1 && <BarChart3 size={24} />}
                {i === 2 && <Clock size={24} />}
              </div>
              <div className="text-5xl font-bold text-[var(--text-primary)] font-[var(--ff-display)] tabular-nums tracking-tighter mb-2">{item.metric}</div>
              <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.2em]">{item.label}</p>
            </div>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

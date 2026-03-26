import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { StatCard } from '@/components/ui/StatCard'
import { Button } from '@/components/ui/Button'
import { Brain, BarChart3, Target, Zap } from 'lucide-react'

export default function AIAnalyticsDashboard() {
  const features = [
    { icon: <Brain size={20} />, title: 'Predictive Modeling', description: 'Forecast operational bottlenecks before they impact your velocity.' },
    { icon: <BarChart3 size={20} />, title: 'Unified Data Lake', description: 'Consolidate fragmented data sources into a single source of truth.' },
    { icon: <Target size={20} />, title: 'Anomaly Detection', description: 'Identify cost leaks and efficiency gaps in real-time.' },
    { icon: <Zap size={20} />, title: 'Automated Insights', description: 'Receive executive briefings and action items without manual analysis.' }
  ]

  return (
    <PublicPageLayout 
      title={<>Intelligence that <span className="text-[var(--text-tertiary)] italic font-light block">Orchestrates.</span></>}
      subtitle="The AI Analytics layer isn't just about data; it's about decision-making at scale. Transform raw metrics into strategic clarity."
      badge="Strategic AI"
      badgeIcon={<Brain size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <StatCard label="Analysis Velocity" value="0.4s" delta="+120%" description="Latency reduction vs legacy systems" />
        <StatCard label="Predictive Accuracy" value="98.2%" delta="+4.1%" description="Confidence interval on ops forecasting" />
        <StatCard label="Ops Recovery" value="$2.4M" delta="ROI" description="Annual savings across client base" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {features.map((feature, i) => (
          <Card key={i} className="p-10 flex gap-8 items-start bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-sunken)] flex items-center justify-center text-[var(--text-primary)] flex-shrink-0 border border-[var(--border-default)]">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] tracking-tight">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-16 text-center bg-[var(--bg-sunken)] border-[var(--border-subtle)] rounded-[var(--r-3xl)]">
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6 font-[var(--ff-display)] tracking-tight">Ready for Intelligence?</h2>
        <p className="text-[var(--text-secondary)] mb-10 max-w-xl mx-auto font-medium font-[var(--ff-body)]">Join the leading enterprises that have replaced manual tracking with Mantle's autonomous analytics engine.</p>
        <Button size="lg" className="px-12">Initialize Pilot</Button>
      </Card>
    </PublicPageLayout>
  )
}

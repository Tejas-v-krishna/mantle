import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Users, ShieldCheck, Heart, UserPlus, CheckCircle2 } from 'lucide-react'

export default function HROptimization() {
  const pillars = [
    { icon: <UserPlus size={20} />, title: 'Autonomous Onboarding', description: 'Reduce onboarding friction by 70% with automated documentation workflows.' },
    { icon: <ShieldCheck size={20} />, title: 'Compliance Shield', description: 'Stay ahead of global regulations with localized compliance modules.' },
    { icon: <Heart size={20} />, title: 'Talent Retention', description: 'Identify burnout signals early with sentiment analysis and engagement tracking.' },
    { icon: <Users size={20} />, title: 'Unified Directory', description: 'One source of truth for your global team, across every department.' }
  ]

  return (
    <PublicPageLayout 
      title={<>People Ops, <span className="text-[var(--text-tertiary)] italic font-light block">Simplified.</span></>}
      subtitle="Mantle's HR layer removes the administrative burden from teams, allowing you to focus on the people who drive your mission."
      badge="HR Optimization"
      badgeIcon={<Users size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 items-center">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)] leading-tight">Focus on Culture, <br />Not Paperwork.</h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]">
            Fragmented HR tools create friction. Mantle unifies payroll, benefits, and team management into a single, cohesive experience. 
            Automate the mundane so your HR team can lead the strategic growth of your organization.
          </p>
          <ul className="space-y-5">
            {[
              "SOC2 Type II Managed Environment",
              "Integrated Payroll & Benefits",
              "Global Compliance by Default"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[var(--text-primary)] font-bold font-[var(--ff-display)]">
                <CheckCircle2 size={18} className="text-[var(--ember-default)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Card className="aspect-[4/3] bg-[var(--bg-sunken)] border-[var(--border-subtle)] relative overflow-hidden group rounded-[var(--r-3xl)]">
           <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
            alt="HR Team"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, i) => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)]">
            <div className="text-[var(--ember-text)] mb-8 bg-[var(--bg-page)] w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border-default)]">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] tracking-tight">{pillar.title}</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]">{pillar.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-24 text-center">
        <Button size="lg" className="px-12">Schedule an HR Audit</Button>
      </div>
    </PublicPageLayout>
  )
}

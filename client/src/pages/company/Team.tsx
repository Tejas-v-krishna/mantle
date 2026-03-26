import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Linkedin, Twitter, Users, Globe, Zap } from 'lucide-react'

export default function Team() {
  const metrics = [
    { value: '500+', label: 'Enterprises', sub: 'Across 30 countries' },
    { value: '12M+', label: 'Agents Spawned', sub: 'Autonomous tasks' },
    { value: '99.99%', label: 'Uptime', sub: 'SLA Guaranteed' },
    { value: 'ISO27001', label: 'Compliance', sub: 'Enterprise Grade' }
  ]

  const members = [
    { 
        name: 'Alex Johnson', 
        role: 'CEO & Founder', 
        initials: 'AJ',
        bio: 'Visionary leader with 20+ years in high-scale enterprise architecture and autonomous systems.'
    },
    { 
        name: 'Sarah Chen', 
        role: 'Chief Technology Officer', 
        initials: 'SC',
        bio: 'Pioneer in zero-knowledge AI and former lead researcher at Global Intelligence Labs.'
    },
    { 
        name: 'Michael Rodriguez', 
        role: 'Product Director', 
        initials: 'MR',
        bio: 'Expert in human-agent interaction design and enterprise workflow orchestration.'
    },
    { 
        name: 'Priya Patel', 
        role: 'Head of Global Support', 
        initials: 'PP',
        bio: 'Dedicated to defining the next era of enterprise-grade customer success.'
    }
  ]

  return (
    <PublicPageLayout 
      title={<>The <span className="text-[var(--text-tertiary)] italic font-light">Architects.</span></>}
      subtitle="Leading the autonomous revolution."
      badge="Global Leadership"
    >
      {/* Stats Bar - Dark Mode */}
      <section className="mb-32">
          <Card className="bg-[var(--bg-elevated)] rounded-[48px] p-16 flex flex-wrap justify-around items-center gap-12 border border-[var(--border-subtle)] shadow-2xl">
              {metrics.map((metric, i) => (
                  <div key={i} className="text-center group">
                      <div className="text-5xl font-bold text-[var(--text-primary)] font-[var(--ff-display)] mb-2 tracking-tighter group-hover:text-[var(--ember-text)] transition-colors">{metric.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-1">{metric.label}</div>
                      <div className="text-[9px] font-medium text-[var(--text-tertiary)] uppercase tracking-widest">{metric.sub}</div>
                  </div>
              ))}
          </Card>
      </section>

      {/* Team Grid - Dark Mode */}
      <section className="mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, i) => (
              <Card key={i} className="p-12 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center text-center group rounded-[32px] hover:border-[var(--text-tertiary)] hover:shadow-2xl transition-all h-full">
                <div className="w-24 h-24 bg-[var(--bg-sunken)] rounded-full flex items-center justify-center text-[var(--text-tertiary)] text-2xl font-bold mb-10 group-hover:text-[var(--ember-text)] transition-colors border border-[var(--border-default)]">
                  {member.initials}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-[var(--ff-display)]">{member.name}</h3>
                <p className="text-[10px] font-bold text-[var(--ember-text)] uppercase tracking-[0.2em] mb-8">{member.role}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-left font-medium">
                  {member.bio}
                </p>
                <div className="mt-auto pt-10 flex gap-4 w-full justify-center">
                    <button className="text-[var(--text-tertiary)] hover:text-white transition-colors"><Linkedin size={18} /></button>
                    <button className="text-[var(--text-tertiary)] hover:text-white transition-colors"><Twitter size={18} /></button>
                </div>
              </Card>
            ))}
          </div>
      </section>
      
      {/* Leadership Culture Section */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[var(--border-subtle)] pt-24">
            <div className="space-y-6">
                <Globe className="text-[var(--ember-default)]" size={32} />
                <h4 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Distributed Excellence</h4>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed">Operating as a global collective with talent across 12 timezones, bringing diverse perspectives to autonomous orchestration.</p>
            </div>
            <div className="space-y-6">
                <Users className="text-[var(--ember-default)]" size={32} />
                <h4 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Agnetic Partnership</h4>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed">Fostering a culture where humans and AI agents collaborate as peers, unlocking new levels of strategic efficiency.</p>
            </div>
            <div className="space-y-6">
                <Zap className="text-[var(--ember-default)]" size={32} />
                <h4 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Iterative Sovereignty</h4>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed">Constant evolution of our core protocols to meet emerging threats and ensure data autonomy at every layer.</p>
            </div>
      </section>
    </PublicPageLayout>
  )
}

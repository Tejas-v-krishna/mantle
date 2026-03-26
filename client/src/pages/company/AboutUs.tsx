import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Globe, Users, Zap, Shield, ShieldCheck, ArrowRight, History } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutUs() {
  const values = [
    { icon: <Globe size={24} />, title: 'Global First', description: 'Built for teams that span timezones and cultures.' },
    { icon: <Users size={24} />, title: 'Human Centric', description: 'Technology should empower people, not replace them.' },
    { icon: <Zap size={24} />, title: 'Radical Speed', description: 'Eliminating the friction that slows enterprise progress.' },
    { icon: <Shield size={24} />, title: 'Zero Trust', description: 'Security is not an afterthought; it is our foundation.' }
  ]

  const timeline = [
    { year: '2022', event: 'Mantle Foundation established in San Francisco.' },
    { year: '2023', event: 'First "Digital Canvas" engine launched for early enterprise adopters.' },
    { year: '2024', event: 'Global expansion: 500+ active multi-agent clusters deployed.' },
    { year: '2025', event: 'Achieved ISO 27001 & SOC2 Type II for autonomous perimeters.', final: true }
  ]

  return (
    <PublicPageLayout 
      title={<>Engineering the <span className="text-[var(--text-tertiary)] italic font-light block">Future of Work.</span></>}
      subtitle="We build the infrastructure for the autonomous enterprise. A world where agents and humans collaborate seamlessly within protected digital perimeters."
      badge="Mantle Genesis"
      badgeIcon={<Shield size={14} className="text-[var(--ember-text)]" />}
    >
      {/* Mission Quote Section */}
      <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Our Mission</span>
               <Card className="p-12 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[40px] relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--ember-default)] to-transparent opacity-50" />
                   <blockquote className="text-3xl font-bold text-[var(--text-primary)] leading-tight italic font-[var(--ff-display)]">
                     "To empower every organization with a private, autonomous brain that understands, executes, and protects their core business logic."
                   </blockquote>
                   <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ember-text)]">The Mantle Commitment</div>
               </Card>
          </div>
        </div>

        <div className="space-y-12">
            <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-[var(--bg-elevated)] rounded-xl flex items-center justify-center text-[var(--ember-text)] flex-shrink-0 border border-[var(--border-subtle)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-[var(--ff-display)]">Data Sovereignty First</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">We believe intelligence should never come at the cost of privacy. Our "Sovereign Perimeter" architecture keeps your data within your control, always.</p>
                </div>
            </div>

            <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-[var(--bg-elevated)] rounded-xl flex items-center justify-center text-[var(--ember-text)] flex-shrink-0 border border-[var(--border-subtle)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all">
                    <Zap size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-[var(--ff-display)]">Agnetic Orchestration</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">Moving beyond simple automation. We build agents that reason, plan, and adapt to the complex nuances of enterprise operations.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-48">
        <div className="flex items-center gap-4 mb-20 justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[var(--border-strong)]" />
            <h2 className="text-2xl italic font-light text-[var(--text-primary)] font-[var(--ff-display)]">Our Journey</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[var(--border-strong)]" />
        </div>

        <div className="max-w-4xl mx-auto py-12">
            {timeline.map((item, i) => (
                <div key={i} className="flex gap-12 group">
                    <div className="w-32 pt-1 text-right">
                        <span className="text-2xl font-bold text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">{item.year}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={cn(
                            "w-3 h-3 rounded-full border-2 transition-all duration-500",
                            item.final ? "bg-white border-white scale-110" : "bg-transparent border-[var(--text-tertiary)] group-hover:border-white"
                        )} />
                        {i < timeline.length - 1 && <div className="w-[2px] h-24 bg-[var(--border-strong)] my-1" />}
                    </div>
                    <div className="flex-1 pt-1 pb-16">
                        <p className="text-lg text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors font-medium">
                            {item.event}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
            <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-3xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-sunken)] flex items-center justify-center text-[var(--ember-text)] mb-8 border border-[var(--border-default)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all">
                {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)]">{value.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
            </Card>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-32">
          <Card className="bg-[var(--bg-page)] border-[var(--border-subtle)] rounded-[60px] p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-elevated)] to-transparent opacity-50" />
              <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-8 font-[var(--ff-display)] tracking-tight">Join the <span className="text-[var(--text-tertiary)] italic font-light">Revolution.</span></h2>
                  <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-2xl font-medium leading-relaxed">
                      We're always looking for brilliant minds to join us in defining the next era of enterprise intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)] hover:text-[var(--ember-text)] transition-colors">
                            View Open Roles <ArrowRight size={16} />
                        </button>
                        <Button variant="outline" size="lg" className="px-12 py-5 bg-[var(--bg-sunken)]/50 backdrop-blur-sm">
                            Contact Investor Relations
                        </Button>
                  </div>
              </div>
          </Card>
      </section>
    </PublicPageLayout>
  )
}

import { cn } from '@/lib/utils'

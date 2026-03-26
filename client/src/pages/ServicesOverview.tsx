import { CheckCircle, ShieldCheck, Cpu, Workflow, BarChart3, Radio } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: <Workflow size={20} />,
    title: 'Global Workflow Automation',
    description: 'Unified automation layer that connects your global workforce across Slack, Teams, and Jira.',
    features: ['Cross-platform sync', 'Local compliance routing', '24/7 background agents']
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI Decision Intelligence',
    description: 'Sophisticated LLM agents that summarize complex data and draft strategic responses in real-time.',
    features: ['Secure RAG search', 'Meeting Intelligence', 'Auto-drafting engine']
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Enterprise Trust & Security',
    description: 'Bank-grade encryption and SOC2 compliance to ensure your data never leaves your secure perimeter.',
    features: ['AES-256 Encryption', 'PII Masking', 'Granular Access Logs']
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Productivity ROI Analytics',
    description: 'Deep insights into hours reclaimed per team, automation success rates, and cost-per-task efficiency.',
    features: ['Live dashboards', 'CFO-ready reports', 'Anomaly detection']
  }
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$12',
    period: 'per user/month',
    features: [
      'Up to 100 users',
      '10 Active Workflows',
      'Standard AI Agents',
      'Email & Slack support',
      'Monthly ROI reports'
    ],
    cta: 'Start Free Audit',
    variant: 'default'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored scale',
    features: [
      'Unlimited users',
      'Unlimited AI Agents',
      'Custom integration building',
      '24/7 white-glove support',
      'Advanced security (SSO/SAM)',
      'Dedicated success manager'
    ],
    cta: 'Contact Sales',
    variant: 'featured'
  }
]

export default function ServicesOverview() {
  return (
    <PublicPageLayout 
      title={<>Unified <span className="text-[var(--text-tertiary)] italic font-light block">Automation</span> Suite.</>}
      subtitle="Mantle provides the essential infrastructure for modern enterprises to automate manual friction, unify fragmented data, and scale strategic output."
      badge="Product Suite • Core Protocols"
      badgeIcon={<Radio size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-32">
        <Button size="lg" className="px-10">
          Get Started
        </Button>
        <Button variant="outline" size="lg" className="px-10">
          View Pricing
        </Button>
      </div>

      {/* Services Grid */}
      <section className="mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6 tracking-tight font-[var(--ff-display)]">
              Core Capabilities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed font-[var(--ff-body)]">
              Battle-tested tools designed for high-growth teams and security-conscious enterprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)] h-full">
                <div className="w-12 h-12 bg-[var(--bg-page)] rounded-xl flex items-center justify-center text-[var(--text-primary)] mb-8 border border-[var(--border-default)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight font-[var(--ff-display)]">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-medium mb-10 leading-relaxed font-[var(--ff-body)]">
                  {service.description}
                </p>
                <div className="space-y-4 pt-8 border-t border-[var(--border-subtle)]">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs font-semibold text-[var(--text-secondary)] gap-3 font-[var(--ff-body)]">
                      <CheckCircle size={14} className="text-[var(--ember-text)] opacity-60" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 border-t border-[var(--border-subtle)]">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight font-[var(--ff-display)]">
            Refined <span className="italic font-light text-[var(--text-secondary)]">Scale</span> Pricing.
          </h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]">
            Transparent scaling models designed to grow with your team's automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={cn(
              "p-12 flex flex-col rounded-[var(--r-3xl)] transition-all duration-500",
              tier.variant === 'featured' 
                ? "bg-[var(--bg-sunken)] border-2 border-[var(--ember-muted)] shadow-2xl" 
                : "bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
            )}>
              <h3 className="text-[10px] font-bold mb-8 uppercase tracking-[0.3em] text-[var(--text-tertiary)] font-[var(--ff-body)]">{tier.name}</h3>
              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-[var(--text-primary)] font-[var(--ff-display)]">{tier.price}</span>
                <span className="text-lg font-semibold text-[var(--text-tertiary)] font-[var(--ff-body)]">/{tier.period}</span>
              </div>

              <div className="space-y-6 mb-16 flex-grow">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm font-semibold text-[var(--text-secondary)] font-[var(--ff-body)]">
                    <CheckCircle size={18} className="text-[var(--ember-default)] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant={tier.variant === 'featured' ? 'primary' : 'outline'} size="lg" className="w-full">
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </PublicPageLayout>
  )
}

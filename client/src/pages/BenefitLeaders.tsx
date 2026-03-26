import { useState } from 'react'
import {
  Target,
  TrendingUp,
  DollarSign,
  Zap,
  BarChart3,
  FileText,
  Shield,
  Cpu,
  Award,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'

export default function BenefitLeaders() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    challenges: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const metrics = [
    { icon: <TrendingUp size={20} />, value: '35%', label: 'Workforce Capacity' },
    { icon: <DollarSign size={20} />, value: '$4.1M', label: 'Annual Ops Recovery' },
    { icon: <Zap size={20} />, value: '99.9%', label: 'Automation Precision' },
    { icon: <BarChart3 size={20} />, value: '12x', label: 'Systemic ROI' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const resources = [
    { title: 'The Business Case for Enterprise Automation', type: 'Whitepaper', icon: <FileText size={18} /> },
    { title: 'AI Ethics & Data Sovereignty Handbook', type: 'Executive Brief', icon: <Shield size={18} /> },
    { title: 'Efficiency ROI Assessment Module', type: 'Strategic Tool', icon: <Cpu size={18} /> },
    { title: 'Case Study: Global Fintech Induction', type: 'Success Report', icon: <Award size={18} /> }
  ]

  return (
    <PublicPageLayout 
      title={<>Operational <span className="text-[var(--text-tertiary)] italic font-light block">Sovereignty.</span></>}
      subtitle="Data-driven automation that eliminates manual friction, identifies bottlenecks, and scales your organization's highest-impact work."
      badge="Strategic Solutions • Global Enterprise"
      badgeIcon={<Target size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="flex justify-end mb-24">
        <Button size="lg" className="px-10">Initialize Audit</Button>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="p-10 text-center bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)]">
              <div className="text-[var(--ember-text)] mb-8 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-6xl font-bold text-[var(--text-primary)] mb-3 tracking-tighter font-[var(--ff-display)]">
                {metric.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] font-[var(--ff-body)]">
                {metric.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Audit Form Section */}
      <div className="max-w-4xl mx-auto mb-40">
        <Card className="p-12 md:p-20 bg-[var(--bg-sunken)] border-[var(--border-subtle)] rounded-[var(--r-3xl)] relative overflow-hidden">
          <div className="text-center mb-16">
            <Badge variant="ember" className="mb-8">Authorized Briefing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight font-[var(--ff-display)]">
              Initialize <span className="italic font-light text-[var(--text-secondary)]">Audit.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto font-medium font-[var(--ff-body)]">
              Our efficiency consultants will map your team's manual friction points and provide a roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input 
                label="Full Identity" 
                placeholder="Name" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required 
              />
              <Input 
                label="Enterprise Email" 
                type="email"
                placeholder="corp@workspace.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] ml-1 font-[var(--ff-body)]">Environment Bottlenecks</label>
              <textarea
                rows={4}
                className="w-full bg-[var(--bg-page)] border border-[var(--border-default)] rounded-[var(--r-xl)] px-6 py-5 text-sm font-[var(--ff-body)] outline-none focus:border-[var(--ember-default)] transition-all text-[var(--text-primary)] resize-none"
                placeholder="Where is your team losing most manual time?"
                value={formData.challenges}
                onChange={(e) => setFormData({...formData, challenges: e.target.value})}
              />
            </div>

            <div className="flex flex-col items-center gap-8 pt-6">
              <Button
                type="submit"
                loading={isSubmitting}
                size="lg"
                className="w-full md:w-auto px-16"
              >
                Request Briefing
              </Button>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] font-[var(--ff-body)] border-t border-[var(--border-subtle)] pt-8 w-full justify-center">
                <ShieldCheck size={14} className="text-[var(--ember-text)]" />
                <span>SOC2 Type II Protected • Zero-Trust Transmission</span>
              </div>
            </div>
          </form>
        </Card>
      </div>

      {/* Library */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-12">
          <Badge variant="neutral">Governance & Library</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-10 h-full bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col rounded-[var(--r-2xl)]">
              <div className="w-12 h-12 bg-[var(--bg-page)] rounded-xl flex items-center justify-center text-[var(--text-primary)] mb-8 border border-[var(--border-default)]">
                {resource.icon}
              </div>
              <span className="text-[10px] font-bold text-[var(--ember-text)] uppercase tracking-widest mb-4 block font-[var(--ff-body)]">{resource.type}</span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-8 tracking-tight leading-snug font-[var(--ff-display)]">
                {resource.title}
              </h3>
              <button className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase tracking-widest transition-colors mt-auto font-[var(--ff-body)]">
                Review Briefing <ArrowRight size={14} className="ml-1" />
              </button>
            </Card>
          ))}
        </div>
      </section>
    </PublicPageLayout>
  )
}

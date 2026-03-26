import { useState } from 'react'
import {
  Search,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export default function TroubleshootingFAQ() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({})

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'identity', name: 'Enterprise Identity' },
    { id: 'integrity', name: 'System Integrity' },
    { id: 'orchestra', name: 'Agent Orchestration' },
  ]

  const faqs = [
    {
      id: 1,
      question: 'Why am I unable to access the Mantle Command Center?',
      answer: 'Access issues are typically tied to Enterprise Identity verification. Ensure your SSO token is active and your organizational credentials are correct. If you continue to face bottlenecks, clear your secure browser environment or engage with your local IT lead.',
      category: 'identity',
      audits: 1245,
      helpful: 89
    },
    {
      id: 2,
      question: 'Optimizing high-scale dashboard performance',
      answer: 'Mantle handles intensive data streams. For peak performance: 1) Verify high-bandwidth connectivity, 2) Optimize secure cache settings, 3) Utilize emerald-accelerated browser engines. If data latency persists, consult the System Status module.',
      category: 'integrity',
      audits: 876,
      helpful: 65
    },
    {
      id: 3,
      question: 'Deploying third-party API connectors securely',
      answer: 'Mantle integrates seamlessly with the global productivity stack via Zero-Trust architecture. Native connectors for Salesforce, Slack, and AWS require authorized secure keys. Reference our Blueprint library for orchestration guides.',
      category: 'orchestra',
      audits: 543,
      helpful: 42
    }
  ]

  const filteredFaqs = faqs.filter(f =>
    (selectedCategory === 'all' || f.category === selectedCategory) &&
    (f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const toggleFaq = (id: number) => {
    setExpandedFaqs(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <PublicPageLayout 
      title={<>Resolve <span className="text-[var(--text-tertiary)] italic font-light block">Complexities.</span></>}
      subtitle="Optimizing your Mantle environment with our centralized knowledge hub."
      badge="Support Architecture"
      badgeIcon={<ShieldCheck size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="mb-8">
          <p className="text-[var(--text-secondary)] font-medium">Can't find a solution? <a href="/mantle/contact-support" className="text-[var(--ember-text)] underline">Engage Support.</a></p>
      </div>

      {/* Search and Filters */}
      <div className="mb-24">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[32px] shadow-2xl">
          <div className="relative flex-1 group w-full">
            <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] group-focus-within:text-[var(--text-primary)] transition-colors" />
            <input
              type="text"
              placeholder="Query protocols, command keys, or bottlenecks..."
              className="w-full pl-16 pr-8 py-5 bg-[var(--bg-sunken)] border border-[var(--border-default)] rounded-[20px] text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] focus:outline-none focus:border-[var(--ember-default)] transition-all placeholder:text-[var(--text-tertiary)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                  selectedCategory === cat.id
                    ? "bg-[var(--text-primary)] text-[var(--bg-page)] shadow-lg"
                    : "bg-[var(--bg-sunken)] text-[var(--text-tertiary)] border border-[var(--border-default)] hover:border-[var(--text-secondary)]"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-8 mb-32">
        {filteredFaqs.map(faq => (
          <Card key={faq.id} className="p-0 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[40px] overflow-hidden group">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left p-12 flex items-start justify-between gap-8 focus:outline-none"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-bold text-[var(--ember-text)] uppercase tracking-widest italic">{faq.category}</span>
                  <span className="text-[9px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest px-3 py-1 bg-[var(--bg-sunken)] rounded-lg border border-[var(--border-default)]">{faq.audits} AUDITS</span>
                </div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)] group-hover:text-[var(--text-secondary)] transition-colors">{faq.question}</h3>
              </div>
              <div className={cn(
                "mt-2 w-12 h-12 rounded-full flex items-center justify-center border transition-all",
                expandedFaqs[faq.id] 
                  ? "bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)] rotate-180" 
                  : "bg-[var(--bg-sunken)] text-[var(--text-tertiary)] border-[var(--border-subtle)] group-hover:border-[var(--text-secondary)]"
              )}>
                <ChevronDown size={24} />
              </div>
            </button>

            {expandedFaqs[faq.id] && (
              <div className="px-12 pb-12 pt-4 animate-in slide-in-from-top-4 duration-500">
                <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-4xl border-t border-[var(--border-subtle)] pt-12 mb-12">
                  {faq.answer}
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 py-8 border-t border-[var(--border-subtle)]">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--ember-text)] uppercase tracking-widest">
                      <CheckCircle size={16} /> Verified Solution ({faq.helpful})
                    </div>
                    <button className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest hover:text-[var(--text-primary)] transition-all">
                      Flag Complexity
                    </button>
                  </div>
                  <a href="/mantle/contact-support" className="flex items-center gap-3 text-[10px] font-extrabold text-[var(--text-primary)] uppercase tracking-[0.2em] group/link hover:text-[var(--ember-text)] transition-colors">
                    Engage Support Architecture <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Support CTA */}
      <section className="mb-32 p-16 md:p-24 rounded-[64px] bg-[var(--bg-sunken)] border border-[var(--border-subtle)] text-center relative overflow-hidden group">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[var(--ember-default)]/5 to-transparent blur-3xl -mb-48" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge variant="ember" className="mb-10 px-8 py-2">
            <Zap size={14} className="mr-2" />
            <span>Strategic Guard</span>
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-8 tracking-tight font-[var(--ff-display)]">Requirement <span className="text-[var(--text-tertiary)] italic font-light">Unresolved?</span></h2>
          <p className="text-[var(--text-secondary)] font-medium text-xl leading-relaxed mb-16 px-4">
            Our 24/7 Strategic Support squad is authorized to resolve critical environment issues. Deploy a solution architect now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="px-16 py-6 shadow-2xl">
              Deploy Support Squad
            </Button>
            <Button variant="outline" size="lg" className="px-16 py-6">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  )
}

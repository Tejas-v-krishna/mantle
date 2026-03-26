import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle,
  Zap,
  Video,
  FileText,
  Layout,
  ArrowRight
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All Protocols' },
  { id: 'core', label: 'Core Productivity' },
  { id: 'intelligence', label: 'AI Intelligence' }
]

const services = [
  {
    id: 1,
    category: 'intelligence',
    title: "AI Meeting Intelligence",
    description: "Transcribe, summarize, and extract action items from every meeting automatically. Syncs directly to your task manager.",
    icon: <Video size={20} />,
    benefits: ["Zero note-taking", "Searchable transcripts", "Auto-action items"]
  },
  {
    id: 2,
    category: 'core',
    title: "Workflow Automation Hub",
    description: "Build custom 'if-this-then-that' automations across 100+ corporate tools without writing a single line of code.",
    icon: <Zap size={20} />,
    benefits: ["No-code builder", "Cross-app sync", "Error monitoring"]
  },
  {
    id: 3,
    category: 'intelligence',
    title: "AI Content Engine",
    description: "Draft reports, emails, and documentation in your brand voice. Trained on your secure internal knowledge base.",
    icon: <FileText size={20} />,
    benefits: ["Brand consistency", "Secure data", "Rapid drafting"]
  },
  {
    id: 4,
    category: 'core',
    title: "Data Orchestrator",
    description: "Centralize data from fragmented sources into a single dashboard. Real-time updates and custom reporting.",
    icon: <Layout size={20} />,
    benefits: ["Single source of truth", "Live dashboards", "Export ready"]
  }
]

export function EnterpriseSolutions() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab)

  return (
    <section className="py-32 bg-[var(--bg-page)] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge variant="ember">Productivity Protocols</Badge>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-[var(--text-primary)] font-[var(--ff-display)]"
            >
              The Professional <br />
              <span className="text-[var(--text-tertiary)] italic font-light">Productivity Stack.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]"
            >
              A unified suite of tools designed to remove every friction point in the modern corporate workflow.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex bg-[var(--bg-sunken)] p-1 rounded-full border border-[var(--border-subtle)] self-start lg:self-end"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 relative",
                  activeTab === category.id
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--ember-default)] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <Card className="p-8 flex flex-col h-full bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)]">
                  <div className="w-10 h-10 bg-[var(--bg-page)] rounded-xl flex items-center justify-center mb-8 border border-[var(--border-default)] text-[var(--ember-text)] shadow-sm group-hover:bg-[var(--ember-default)] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] text-[15px] mb-8 flex-grow leading-relaxed font-medium font-[var(--ff-body)]">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs font-semibold text-[var(--text-tertiary)] gap-3 font-[var(--ff-body)]">
                        <CheckCircle size={14} className="text-[var(--ember-default)] opacity-60" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Explore Protocol</span>
                    <ArrowRight size={14} className="text-[var(--text-tertiary)] group-hover:translate-x-1 transition-transform group-hover:text-[var(--ember-text)]" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

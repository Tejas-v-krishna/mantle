import { motion } from 'framer-motion'
import { Database, Zap, BarChart3, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const steps = [
  {
    icon: <Database size={20} />,
    title: "Connect Workflows",
    description: "Securely sync Mantle with your existing tech stack—Slack, Jira, and CRM—in just a few clicks.",
    time: "Setup: < 5 mins"
  },
  {
    icon: <Zap size={20} />,
    title: "Automate Friction",
    description: "Our AI agents identify manual bottlenecks and automate repetitive data syncing and communication tasks.",
    time: "First automation: < 2 mins"
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Scale Your Output",
    description: "Spend your time on high-leverage strategy while Mantle manages the administrative overhead in the background.",
    time: "Efficiency lift: 35%+"
  }
]

export function HowItWorks() {
  return (
    <section className="py-32 bg-[var(--bg-sunken)] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge variant="ember">Implementation</Badge>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight font-[var(--ff-display)] text-[var(--text-primary)]"
          >
            From Chaos to <br />
            <span className="text-[var(--text-tertiary)] italic font-light block">Automated Flow.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed font-medium font-[var(--ff-body)]"
          >
            Mantle sits quietly behind your existing tools, removing the friction that slows your team down.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="flex flex-col p-10 bg-[var(--bg-page)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-3xl)] h-full">
                <div className="w-12 h-12 bg-[var(--bg-sunken)] rounded-2xl flex items-center justify-center mb-8 border border-[var(--border-default)] shadow-sm text-[var(--text-primary)]">
                  {step.icon}
                </div>
                
                <div className="mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ember-text)] bg-[var(--ember-subtle)] px-3 py-1 rounded-full">
                    Step 0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-[var(--ff-display)] tracking-tight text-[var(--text-primary)]">{step.title}</h3>
                
                <p className="text-[var(--text-secondary)] text-base mb-10 leading-relaxed font-medium font-[var(--ff-body)]">
                  {step.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
                  <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">{step.time}</span>
                  <ChevronRight size={16} className="text-[var(--ember-text)] opacity-40" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

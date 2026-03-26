import { motion } from 'framer-motion'
import { AlertCircle, MapPin, CalendarDays, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const scenarios = [
  {
    icon: <CalendarDays size={20} />,
    title: "Information Overload",
    scenario: "I spend 2 hours every morning just catching up on messages and searching for documentation across 4 apps.",
    impact: "High mental fatigue."
  },
  {
    icon: <MapPin size={20} />,
    title: "Manual Syncing",
    scenario: "I have to manually sync data between three different tools just to get a single weekly report done.",
    impact: "Massive time leak."
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Fragmented Context",
    scenario: "Project context is scattered across email, Slack, and Jira. I feel like I'm missing the big picture.",
    impact: "Team misalignment."
  }
]

export function ProblemStatement() {
  return (
    <section className="py-32 bg-[var(--bg-page)] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge variant="ember">The Operational Gap</Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-[1.05] font-[var(--ff-display)]"
          >
            When workflows break, <br />
            <span className="text-[var(--text-tertiary)] italic font-light block">productivity stops.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl font-medium font-[var(--ff-body)]"
          >
            Friction isn't just annoying—it's expensive. Context switching and manual 
            overhead drain your most valuable asset: human intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="h-full p-8 bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-500 rounded-[var(--r-2xl)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-page)] flex items-center justify-center mb-8 border border-[var(--border-default)] text-[var(--ember-text)]">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] italic font-medium mb-8 leading-relaxed font-[var(--ff-body)] border-l border-[var(--ember-muted)] pl-4">
                  "{item.scenario}"
                </p>
                
                <div className="pt-6 border-t border-[var(--border-subtle)]">
                  <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Impact</p>
                  <p className="text-sm font-semibold text-[var(--error-text)]">
                    {item.impact}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-[var(--bg-sunken)] border border-[var(--border-subtle)] rounded-full group cursor-pointer hover:bg-[var(--bg-elevated)] transition-colors">
            <p className="text-lg font-bold text-[var(--text-primary)] font-[var(--ff-display)] tracking-tight">
              Eliminate friction. <span className="text-[var(--ember-text)] italic">Automate the manual.</span>
            </p>
            <ArrowRight size={20} className="text-[var(--ember-default)] group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const TESTIMONIALS = [
  {
    quote: "Mantle transformed our operations. We reclaimed 40% of our managers' time in the first quarter alone.",
    author: "Sarah Jenkins",
    role: "VP Operations, Global Tech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The only platform that actually understands the complexity of enterprise scale. It's our operational backbone.",
    author: "Marcus Chen",
    role: "CTO, Forge Logistics",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Elegant, precise, and powerful. Mantle is what enterprise software should have always been.",
    author: "Elena Rodriguez",
    role: "Head of People, Growth Lab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
]

export function Testimonials() {
  return (
    <section className="py-32 bg-[var(--bg-sunken)]">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge variant="ember">Leadership Endorsements</Badge>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] font-[var(--ff-display)] mb-8 tracking-tight leading-tight">
            Trusted by <span className="text-[var(--text-tertiary)] italic font-light block">Global Leaders.</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed font-medium font-[var(--ff-body)]">
            High-performance organizations rely on Mantle to eliminate friction and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="h-full flex flex-col p-10 bg-[var(--bg-page)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-500 rounded-[var(--r-2xl)]">
                <div className="flex-grow">
                  <p className="text-xl font-medium text-[var(--text-primary)] leading-relaxed italic mb-10 font-[var(--ff-body)] relative">
                    <span className="absolute -left-4 -top-2 text-4xl text-[var(--ember-muted)] opacity-30 font-serif">"</span>
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-[var(--border-subtle)]">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-[var(--border-default)]" />
                  <div>
                    <p className="text-sm font-bold text-[var(--text-primary)] font-[var(--ff-display)]">{t.author}</p>
                    <p className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider font-semibold font-[var(--ff-body)]">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

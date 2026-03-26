import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-[var(--bg-page)] relative overflow-hidden">
      {/* Premium Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--ember-subtle)] rounded-full blur-[180px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-sunken)] to-[var(--bg-page)] opacity-60" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <Badge variant="ember" className="px-8 py-2">Deployment Queue v4.0</Badge>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-12 leading-[1] font-[var(--ff-display)]" style={{ letterSpacing: '-0.03em' }}>
            Elevate Your <br />
            <span className="text-[var(--text-tertiary)] italic font-light block">Operational Layer.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Join the elite organizations using Mantle to automate friction and focus on what truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" className="w-full sm:w-auto px-16 py-8 text-xl group shadow-2xl shadow-[var(--ember-default)]/20">
              Start Your Journey <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-16 py-8 text-xl hover:bg-[var(--bg-elevated)] transition-all">
              Speak with Sales
            </Button>
          </div>
          
          <div className="mt-20 flex flex-col items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-tertiary)]">
              Enterprise Infrastructure • Secured by Default
            </p>
            <div className="flex gap-4 opacity-40 grayscale">
              {/* This is where you'd put partner logos / security badges */}
              <div className="w-12 h-6 bg-[var(--text-tertiary)] rounded opacity-20" />
              <div className="w-12 h-6 bg-[var(--text-tertiary)] rounded opacity-20" />
              <div className="w-12 h-6 bg-[var(--text-tertiary)] rounded opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

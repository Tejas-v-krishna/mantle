import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const STAT_ITEMS = [
  { value: '10,000+', label: 'Enterprises worldwide' },
  { value: '40%', label: 'Avg productivity gain' },
  { value: '8 tools', label: 'In one platform' },
  { value: '3× ROI', label: 'Average year one' },
]

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }
  })
}

export function Hero() {
  const { scrollY } = useScroll()
  const mockupY = useTransform(scrollY, [0, 1000], [0, 250])
  const mockupOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: 'var(--bg-page)', padding: '140px 32px 100px' }}
    >
      {/* Glow orbs */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,136,74,0.14) 0%, transparent 70%)' }} />

      {/* Eyebrow */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest"
        style={{ background: 'var(--ember-subtle)', border: '0.5px solid var(--border-ember)', color: 'var(--ember-text)', fontFamily: 'var(--ff-body)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember-default)] animate-pulse" />
        Enterprise Productivity Platform
      </motion.div>

      {/* H1: High-Impact "Mantle Journal" Style */}
      <motion.h1 custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
        className="mb-8 leading-[0.95] text-white tracking-[-0.02em]"
        style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 700 }}
      >
        Run Your Enterprise <br />
        <span className="text-[var(--text-tertiary)] italic font-light block opacity-70">on One System.</span>
      </motion.h1>

      {/* Sub: Focused Visual Tension */}
      <motion.p custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
        className="mb-12 max-w-[520px] mx-auto leading-relaxed font-medium"
        style={{ fontFamily: 'var(--ff-body)', fontSize: '18px', color: 'var(--text-secondary)' }}
      >
        Unified tools for HR, finance, and operations. Built for the modern workforce 
        that demands speed, precision, and elegance.
      </motion.p>

      {/* CTAs */}
      <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
        className="flex gap-4 justify-center flex-wrap mb-18"
      >
        <Button size="lg">Start your free trial →</Button>
        <Button variant="outline" size="lg">Watch a 2-min demo</Button>
      </motion.div>

      {/* Stats strip */}
      <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
        className="flex divide-x overflow-hidden rounded-2xl"
        style={{ border: '0.5px solid var(--border-strong)', background: 'rgba(255,255,255,0.03)' }}
      >
        {STAT_ITEMS.map((stat, i) => (
          <div key={i} className="px-9 py-5 text-center border-[var(--border-default)]">
            <div className="text-2xl font-bold tracking-tight text-white mb-1"
              style={{ fontFamily: 'var(--ff-display)', letterSpacing: '-0.8px' }}>
              <span style={{ color: 'var(--ember-text)' }}>{stat.value}</span>
            </div>
            <div className="text-[11px] uppercase tracking-wider"
              style={{ fontFamily: 'var(--ff-body)', color: 'var(--text-tertiary)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dashboard Preview / Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
        style={{ y: mockupY, opacity: mockupOpacity }}
        className="mt-20 w-full max-w-5xl mx-auto rounded-[var(--r-3xl)] border border-[var(--border-strong)] bg-[var(--bg-sunken)] overflow-hidden shadow-[var(--shadow-xl)]"
      >
        <div className="aspect-[16/9] bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-page)] flex items-center justify-center">
            {/* Placeholder for actual product image */}
            <div className="text-[var(--text-tertiary)] font-[var(--ff-display)] text-2xl italic opacity-30">
                [Product Canvas Preview]
            </div>
        </div>
      </motion.div>

      {/* Arc wave transition */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-20" viewBox="0 0 1440 80"
        fill="none" preserveAspectRatio="none">
        <path d="M0 80 Q720 0 1440 80 L1440 80 L0 80Z" fill="var(--bg-surface)" />
      </svg>
    </section>
  )
}

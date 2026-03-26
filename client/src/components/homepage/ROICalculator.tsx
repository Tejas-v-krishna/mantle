import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, DollarSign, Clock, Info } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

// ── Utility: animated counter hook ─────────────────────────────────────────
function useAnimatedValue(target: number, duration = 800) {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)
  const start = useRef<number | null>(null)
  const from = useRef(0)

  useEffect(() => {
    from.current = display
    start.current = null
    if (raf.current) cancelAnimationFrame(raf.current)

    const step = (ts: number) => {
      if (!start.current) start.current = ts
      const progress = Math.min((ts - start.current) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from.current + (target - from.current) * ease))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [target, duration])

  return display
}

// ── Slider Component ────────────────────────────────────────────────────────
function Slider({ label, sublabel, min, max, step, value, onChange, format }: any) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-sm font-semibold text-[var(--text-primary)] mb-1 font-[var(--ff-body)]">{label}</div>
          <div className="text-xs text-[var(--text-tertiary)] font-[var(--ff-body)]">{sublabel}</div>
        </div>
        <div className="text-xl font-bold text-[var(--ember-text)] tabular-nums font-[var(--ff-display)]">
          {format(value)}
        </div>
      </div>
      <div className="relative h-1.5 rounded-full cursor-pointer bg-[var(--border-default)]">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[var(--ember-default)] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[var(--ember-default)] rounded-full shadow-md z-0 pointer-events-none"
          style={{ left: `${pct}%`, marginLeft: '-8px' }}
        />
      </div>
    </div>
  )
}

export function ROICalculator() {
  const [employees, setEmployees] = useState(500)
  const [avgSalary, setAvgSalary] = useState(85000)
  const [manualHours, setManualHours] = useState(8)
  const [activeStep, setActiveStep] = useState(0)

  // ROI Calculations
  const automationPct = 0.35
  const hourlyRate = avgSalary / 2080
  const annualSavedHours = employees * manualHours * 52 * automationPct
  const dollarSavings = Math.round(annualSavedHours * hourlyRate)
  
  const animatedValue = useAnimatedValue(dollarSavings)

  const steps = [
    { title: "Team Scale", description: "How large is your global workforce?", icon: <Users size={18} /> },
    { title: "Compensation", description: "Average annual talent investment", icon: <DollarSign size={18} /> },
    { title: "Manual Friction", description: "Hours lost to fragmented tasks", icon: <Clock size={18} /> }
  ]

  const formatK = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : (n >= 1000 ? `${(n / 1000).toFixed(0)}K` : `${n}`)

  return (
    <section className="py-32 bg-[var(--bg-page)] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-left mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Badge variant="ember">Efficiency Audit</Badge>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-8 tracking-tight leading-[1.05] font-[var(--ff-display)]">
            Release the <span className="text-[var(--text-tertiary)] italic font-light block">Trapped Focus</span> <br />
            in your workflows.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Card className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[var(--r-2xl)]">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-10 h-10 bg-[var(--bg-page)] rounded-xl flex items-center justify-center text-[var(--ember-text)] border border-[var(--border-default)]">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-0.5">Step {activeStep + 1} of 3</p>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)]">{steps[activeStep].title}</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[140px] flex flex-col justify-center"
                >
                  {activeStep === 0 && <Slider label="Global Workforce" sublabel="Total team members" min={10} max={5000} step={10} value={employees} onChange={setEmployees} format={(n: number) => n} />}
                  {activeStep === 1 && <Slider label="Annual Investment" sublabel="Average salary per role" min={40000} max={250000} step={5000} value={avgSalary} onChange={setAvgSalary} format={(n: number) => `$${formatK(n)}`} />}
                  {activeStep === 2 && <Slider label="Weekly Manual Friction" sublabel="Hours lost per person" min={2} max={20} step={1} value={manualHours} onChange={setManualHours} format={(n: number) => `${n}h`} />}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-10 pt-8 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="text-xs font-semibold text-[var(--text-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors uppercase tracking-widest"
                >
                  Back
                </button>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={cn("h-1 rounded-full transition-all duration-500", i === activeStep ? 'w-6 bg-[var(--ember-default)]' : 'w-1.5 bg-[var(--border-default)]')}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveStep(Math.min(2, activeStep + 1))}
                  disabled={activeStep === 2}
                  className="text-xs font-semibold text-[var(--ember-text)] uppercase tracking-widest disabled:opacity-30"
                >
                  Next
                </button>
              </div>
            </Card>

            <div className="mt-8 flex items-start gap-4 px-2">
              <Info className="text-[var(--text-tertiary)] flex-shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed font-[var(--ff-body)]">
                Calculations based on Mantle enterprise benchmarks. Results represent gross efficiency gains.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[var(--bg-elevated)] rounded-[var(--r-3xl)] p-12 border border-[var(--border-default)] relative overflow-hidden h-full flex flex-col justify-center">
              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-8 font-[var(--ff-body)]">
                  Annual Efficiency Yield
                </p>
                <div className="flex items-start gap-1 mb-8">
                  <span className="text-4xl font-light text-[var(--text-secondary)] mt-2 font-[var(--ff-display)]">$</span>
                  <span className="text-7xl md:text-9xl font-bold tracking-tighter tabular-nums leading-none text-[var(--text-primary)] font-[var(--ff-display)]">
                    {formatK(animatedValue)}
                  </span>
                </div>
                <p className="text-2xl text-[var(--text-secondary)] font-medium mb-12 font-[var(--ff-body)] leading-snug">
                  Reclaiming measurable focus for <span className="text-[var(--text-primary)] font-bold italic underline decoration-[var(--ember-muted)] underline-offset-8">strategic leverage.</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                  <div className="p-6 transition-colors border-l border-[var(--border-subtle)]">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-4">Focus Multiplier</p>
                    <p className="text-4xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)]">8.4×</p>
                  </div>
                  <div className="p-6 transition-colors border-l border-[var(--border-subtle)]">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-4">Implementation Period</p>
                    <p className="text-4xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)]">&lt; 14 <span className="text-base font-medium opacity-40 italic">days</span></p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full mt-6">Get Full Efficiency Audit →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

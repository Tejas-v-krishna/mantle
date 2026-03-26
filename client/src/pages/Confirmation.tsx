import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageTransition } from '@/components/layout/PageTransition'

export default function Confirmation() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center py-20 bg-[var(--bg-page)] px-6">
        <div className="container max-w-2xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--bg-sunken)] border border-[var(--border-subtle)] text-[var(--success-text)] mb-12 shadow-inner">
              <CheckCircle2 size={40} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-8 tracking-tight font-[var(--ff-display)]">
              Transmission <span className="text-[var(--text-tertiary)] italic font-light block">Received.</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-12 leading-relaxed font-medium font-[var(--ff-body)]">
              Your request for a Mantle Efficiency Audit has been securely logged. 
              Our strategic consultants are reviewing your operational context.
            </p>

            <Card className="p-8 bg-[var(--bg-elevated)] border-[var(--border-subtle)] mb-12 flex items-center gap-6 text-left rounded-[var(--r-2xl)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-sunken)] flex items-center justify-center text-[var(--ember-default)] border border-[var(--border-default)]">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Follow-up Window</p>
                <p className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-bold font-[var(--ff-body)]">Expect briefing within 24 business hours</p>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="w-full sm:w-auto">
                <Button size="lg" className="w-full px-10">
                  Return to Control Center
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">
                Review Documentation <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

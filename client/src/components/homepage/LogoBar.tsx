import { motion } from 'framer-motion'

const LOGOS = [
  'Acme Corp', 'Global Dynamics', 'Stark Industries', 'Wayne Ent', 'Initech', 'Hooli'
]

export function LogoBar() {
  return (
    <section className="py-12 bg-[var(--bg-page)] border-b border-[var(--border-subtle)]">
      <div className="container px-6 mx-auto">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-10 font-[var(--ff-body)]">
          Trusted by high-performance teams worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {LOGOS.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-xl font-semibold font-[var(--ff-display)] text-[var(--text-primary)] whitespace-nowrap tracking-tight"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

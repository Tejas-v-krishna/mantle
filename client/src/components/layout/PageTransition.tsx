import { motion } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      {/* Black Curtain Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="fixed inset-0 bg-[#0A0908] z-[9999] pointer-events-none"
      />

      {/* Content Fade + Blur */}
      <motion.div
        initial={{ opacity: 0.4, filter: 'blur(15px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0.4, filter: 'blur(15px)' }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}

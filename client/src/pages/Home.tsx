import { Hero } from '@/components/homepage/Hero'
import { LogoBar } from '@/components/homepage/LogoBar'
import { ProblemStatement } from '@/components/homepage/ProblemStatement'
import { HowItWorks } from '@/components/homepage/HowItWorks'
import { EnterpriseSolutions } from '@/components/homepage/EnterpriseSolutions'
import { ROICalculator } from '@/components/homepage/ROICalculator'
import { Testimonials } from '@/components/homepage/Testimonials'
import { FinalCTA } from '@/components/homepage/FinalCTA'
import { PageTransition } from '@/components/layout/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <LogoBar />
        <ProblemStatement />
        <HowItWorks />
        <EnterpriseSolutions />
        <ROICalculator />
        <Testimonials />
        <FinalCTA />
      </div>
    </PageTransition>
  )
}

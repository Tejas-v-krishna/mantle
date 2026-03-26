import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'

import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { cn } from '@/lib/utils'

// Pages
import Home from '@/pages/Home'
import ServicesOverview from '@/pages/ServicesOverview'
import BenefitLeaders from '@/pages/BenefitLeaders'
import Confirmation from '@/pages/Confirmation'

// Services Pages
import AIAnalyticsDashboard from '@/pages/services/AIAnalyticsDashboard'
import CustomerSupportAutomation from '@/pages/services/CustomerSupportAutomation'
import HROptimization from '@/pages/services/HROptimization'
import FinancialPlanningTools from '@/pages/services/FinancialPlanningTools'
import MarketingCampaignManager from '@/pages/services/MarketingCampaignManager'
import InventoryManagementSystem from '@/pages/services/InventoryManagementSystem'
import ProjectCollaborationSuite from '@/pages/services/ProjectCollaborationSuite'
import DataSecuritySolutions from '@/pages/services/DataSecuritySolutions'

// Mantle Pages
import GettingStartedGuide from '@/pages/mantle/GettingStartedGuide'
import TroubleshootingFAQ from '@/pages/mantle/TroubleshootingFAQ'
import ContactSupport from '@/pages/mantle/ContactSupport'

// Resources Pages
import Articles from '@/pages/resources/Articles'
import Tutorials from '@/pages/resources/Tutorials'
import CaseStudies from '@/pages/resources/CaseStudies'
import Webinars from '@/pages/resources/Webinars'
import Whitepapers from '@/pages/resources/Whitepapers'
import APIDocumentation from '@/pages/resources/APIDocumentation'
import CommunityForum from '@/pages/resources/CommunityForum'
import VideoLibrary from '@/pages/resources/VideoLibrary'
import KnowledgeBase from '@/pages/resources/KnowledgeBase'

// Company Pages
import AboutUs from '@/pages/company/AboutUs'
import Team from '@/pages/company/Team'
import Careers from '@/pages/company/Careers'
import Press from '@/pages/company/Press'

// Legal Pages
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy'
import TermsOfService from '@/pages/legal/TermsOfService'
import CookiePolicy from '@/pages/legal/CookiePolicy'
import Security from '@/pages/legal/Security'

// Demo Flow Pages
import SelectServicesForDemo from '@/pages/demo/SelectServicesForDemo'
import BookDemoForm from '@/pages/demo/BookDemoForm'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  const location = useLocation()
  const isDashboardRoute = location.pathname.startsWith('/services/')

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5 }}>
      <div className={cn("min-h-screen flex flex-col", !isDashboardRoute && "pt-0")}>
        {!isDashboardRoute && <Nav />}
        <main className="flex-grow">
          {isDashboardRoute ? (
            <DashboardLayout>
              <Routes location={location} key={location.pathname}>
                <Route path="/services/ai-analytics" element={<div>Service Dashboard Placeholder</div>} />
                <Route path="/services/customer-support" element={<CustomerSupportAutomation />} />
                <Route path="/services/hr-optimization" element={<div>Service Dashboard Placeholder</div>} />
                <Route path="/services/financial-planning" element={<FinancialPlanningTools />} />
                <Route path="/services/marketing-campaign" element={<MarketingCampaignManager />} />
                <Route path="/services/inventory-management" element={<InventoryManagementSystem />} />
                <Route path="/services/project-collaboration" element={<div>Service Dashboard Placeholder</div>} />
                <Route path="/services/data-security" element={<DataSecuritySolutions />} />
              </Routes>
            </DashboardLayout>
          ) : (
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services-overview" element={<ServicesOverview />} />
                <Route path="/for-benefits-leaders" element={<BenefitLeaders />} />
                <Route path="/confirmation" element={<Confirmation />} />

                {/* Mantle Routes */}
                <Route path="/mantle/getting-started" element={<GettingStartedGuide />} />
                <Route path="/mantle/troubleshooting" element={<TroubleshootingFAQ />} />
                <Route path="/mantle/contact-support" element={<ContactSupport />} />

                {/* Platform Routes */}
                <Route path="/services/ai-analytics" element={<AIAnalyticsDashboard />} />
                <Route path="/services/hr-optimization" element={<HROptimization />} />
                <Route path="/services/project-collaboration" element={<ProjectCollaborationSuite />} />

                {/* Resources Routes */}
                <Route path="/resources/articles" element={<Articles />} />
                <Route path="/resources/tutorials" element={<Tutorials />} />
                <Route path="/resources/case-studies" element={<CaseStudies />} />
                <Route path="/resources/webinars" element={<Webinars />} />
                <Route path="/resources/whitepapers" element={<Whitepapers />} />
                <Route path="/resources/blog" element={<Articles />} />
                <Route path="/resources/api-docs" element={<APIDocumentation />} />
                <Route path="/resources/community" element={<CommunityForum />} />
                <Route path="/resources/videos" element={<VideoLibrary />} />
                <Route path="/resources/knowledge-base" element={<KnowledgeBase />} />

                {/* Company Routes */}
                <Route path="/company/about" element={<AboutUs />} />
                <Route path="/company/team" element={<Team />} />
                <Route path="/company/careers" element={<Careers />} />
                <Route path="/company/press" element={<Press />} />

                {/* Legal Routes */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/security" element={<Security />} />

                {/* Demo Flow Routes */}
                <Route path="/book-demo/select-services" element={<SelectServicesForDemo />} />
                <Route path="/book-demo/form" element={<BookDemoForm />} />

                <Route path="*" element={
                  <div className="h-screen flex items-center justify-center text-[var(--text-primary)] font-[var(--ff-display)] text-4xl">
                    Page Coming Soon
                  </div>
                } />
              </Routes>
            </AnimatePresence>
          )}
        </main>
        {!isDashboardRoute && <Footer />}
      </div>
    </ReactLenis>
  )
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root

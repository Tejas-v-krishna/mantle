import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { FileText } from 'lucide-react'

export default function TermsOfService() {
  return (
    <PublicPageLayout 
      title={<>Operational <span className="text-[var(--text-tertiary)] italic font-light">Terms.</span></>}
      subtitle="The governance framework for utilizing the Mantle operating layer."
      badge="Legal & Trust"
      badgeIcon={<FileText size={14} className="text-[var(--ember-text)]" />}
    >
        <Card className="p-12 md:p-24 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[48px] max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
          <h2 className="text-[var(--text-primary)]">Terms of Service</h2>
          <p>By utilizing the Mantle platform, you agree to the following protocols...</p>
        </div>
      </Card>
    </PublicPageLayout>
  )
}

import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { ShieldCheck } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <PublicPageLayout 
      title={<>Pixel <span className="text-[var(--text-tertiary)] italic font-light">Governance.</span></>}
      subtitle="How we manage session persistence and operational telemetry."
      badge="Legal & Trust"
      badgeIcon={<ShieldCheck size={14} className="text-[var(--ember-text)]" />}
    >
        <Card className="p-12 md:p-24 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[48px] max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
          <h2 className="text-[var(--text-primary)]">Cookie Policy</h2>
          <p>We use minimal telemetry to ensure platform stability...</p>
        </div>
      </Card>
    </PublicPageLayout>
  )
}

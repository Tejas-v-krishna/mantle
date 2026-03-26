import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Shield } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <PublicPageLayout 
      title={<>Data <span className="text-[var(--text-tertiary)] italic font-light">Sovereignty.</span></>}
      subtitle="Our commitment to your privacy and the protection of your enterprise intelligence."
      badge="Legal & Trust"
      badgeIcon={<Shield size={14} className="text-[var(--ember-text)]" />}
    >
      <Card className="p-12 md:p-24 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[48px] max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
          <h2 className="text-[var(--text-primary)]">Privacy Policy v2.1</h2>
          <p>Mantle adheres to strict data sovereignty protocols...</p>
        </div>
      </Card>
    </PublicPageLayout>
  )
}

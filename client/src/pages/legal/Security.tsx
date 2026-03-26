import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { ShieldAlert } from 'lucide-react'

export default function Security() {
  return (
    <PublicPageLayout 
      title={<>Perimeter <span className="text-[var(--text-tertiary)] italic font-light">Security.</span></>}
      subtitle="Enterprise-grade protection for your autonomous infrastructure."
      badge="Legal & Trust"
      badgeIcon={<ShieldAlert size={14} className="text-[var(--ember-text)]" />}
    >
        <Card className="p-12 md:p-24 bg-[var(--bg-elevated)] border-[var(--border-subtle)] rounded-[48px] max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
          <h2 className="text-[var(--text-primary)]">Security Protocols</h2>
          <p>Mantle utilizes AES-256 encryption and zero-knowledge proofs...</p>
        </div>
      </Card>
    </PublicPageLayout>
  )
}

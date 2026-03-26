import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Book } from 'lucide-react'

export default function KnowledgeBase() {
  return (
    <PublicPageLayout 
      title={<>Core <span className="text-[var(--text-tertiary)] italic font-light">Knowledge.</span></>}
      subtitle="Comprehensive documentation for every layer of the Mantle operating infrastructure."
      badge="Support & Documentation"
      badgeIcon={<Book size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="p-8 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group transition-all rounded-3xl">
             <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Getting Started {i}</h3>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

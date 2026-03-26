import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { BookOpen } from 'lucide-react'

export default function Tutorials() {
  return (
    <PublicPageLayout 
      title={<>Advanced <span className="text-[var(--text-tertiary)] italic font-light">Tutorials.</span></>}
      subtitle="Step-by-step guides to mastering the Mantle operating layer and autonomous orchestration."
      badge="Learning Center"
      badgeIcon={<BookOpen size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-3xl h-64 flex flex-col justify-end">
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Module {i}: Foundation</h3>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

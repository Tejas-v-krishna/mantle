import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { FileText } from 'lucide-react'

export default function Whitepapers() {
  return (
    <PublicPageLayout 
      title={<>Master <span className="text-[var(--text-tertiary)] italic font-light">Protocols.</span></>}
      subtitle="In-depth technical research and governance frameworks for the autonomous enterprise."
      badge="Technical Library"
      badgeIcon={<FileText size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-3xl h-80 flex flex-col">
            <div className="w-12 h-12 bg-[var(--bg-sunken)] rounded-xl flex items-center justify-center text-[var(--ember-text)] mb-auto border border-[var(--border-default)]">
               <FileText size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--ff-display)] mt-8">Architecture v{i}.0</h3>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

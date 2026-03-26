import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Play } from 'lucide-react'

export default function VideoLibrary() {
  return (
    <PublicPageLayout 
      title={<>Visual <span className="text-[var(--text-tertiary)] italic font-light">Intelligence.</span></>}
      subtitle="Explore the Mantle platform through high-fidelity demonstrations and architectural overviews."
      badge="Video Library"
      badgeIcon={<Play size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[1, 2, 3].map(i => (
          <Card key={i} className="p-0 overflow-hidden bg-[var(--bg-elevated)] border-[var(--border-subtle)] group rounded-3xl aspect-video relative">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Play className="text-white" size={48} />
            </div>
          </Card>
        ))}
      </div>
    </PublicPageLayout>
  )
}

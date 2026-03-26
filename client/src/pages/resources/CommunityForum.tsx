import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { MessageSquare, Users, Award, ShieldAlert } from 'lucide-react'

export default function CommunityForum() {
  const categories = [
    { title: 'Operational Strategy', count: '1.2k', icon: <Users size={20} /> },
    { title: 'API & Integration', count: '3.4k', icon: <MessageSquare size={20} /> },
    { title: 'Best Practices', count: '890', icon: <Award size={20} /> },
    { title: 'Security & Compliance', count: '450', icon: <ShieldAlert size={20} /> }
  ]

  return (
    <PublicPageLayout 
      title={<>The <span className="text-[var(--text-tertiary)] italic font-light block">Ecosystem.</span></>}
      subtitle="Connect with the thousands of operational leaders and engineers building on Mantle."
      badge="Protocol Community"
      badgeIcon={<Users size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {categories.map((cat, i) => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group cursor-pointer hover:border-[var(--text-secondary)] transition-all rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-sunken)] flex items-center justify-center text-[var(--text-tertiary)] mb-8 border border-[var(--border-default)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-[var(--ff-display)]">{cat.title}</h3>
            <p className="text-[9px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">{cat.count} Discussions</p>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 font-[var(--ff-display)] tracking-tight uppercase">Trending Discussions</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <Card key={i} className="p-8 bg-[var(--bg-sunken)] border border-[var(--border-default)] flex items-center justify-between group cursor-pointer hover:bg-[var(--bg-elevated)] transition-all rounded-[32px]">
              <div className="flex gap-8 items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-page)] flex items-center justify-center border border-[var(--border-default)] group-hover:border-[var(--text-tertiary)] transition-colors">
                  <Users size={18} className="text-[var(--text-tertiary)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1 font-[var(--ff-display)] group-hover:text-[var(--ember-text)] transition-colors">Optimizing payroll sync for global teams of 5000+</h4>
                  <p className="text-[9px] text-[var(--text-tertiary)] font-bold uppercase tracking-widest">Started by @operational_lead • 2h ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                   <div className="font-bold text-[var(--text-primary)] text-lg">24</div>
                   <div className="text-[8px] uppercase font-bold text-[var(--text-tertiary)] tracking-[0.2em]">Replies</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PublicPageLayout>
  )
}

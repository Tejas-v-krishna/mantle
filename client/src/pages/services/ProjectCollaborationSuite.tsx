import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, MessageSquare, Calendar, Workflow } from 'lucide-react'

export default function ProjectCollaborationSuite() {
  const tools = [
    { title: 'Task Orchestration', description: 'Smart assignment based on workload and expertise.', icon: <CheckCircle2 size={20} /> },
    { title: 'Unified Comms', description: 'Centralized messaging within project contexts.', icon: <MessageSquare size={20} /> },
    { title: 'Timeline Sync', description: 'Automatic calendar alignment across global teams.', icon: <Calendar size={20} /> },
    { title: 'Flow Automation', description: 'Trigger actions across tools based on task state.', icon: <Workflow size={20} /> }
  ]

  return (
    <PublicPageLayout 
      title={<>Unity in <span className="text-[var(--text-tertiary)] italic font-light block">Motion.</span></>}
      subtitle="Break down silos and align your team's energy. High-performance projects require a high-performance environment."
      badge="Team Collaboration"
      badgeIcon={<Workflow size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {tools.map((tool, i) => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-500 flex flex-col justify-between group rounded-[var(--r-2xl)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-sunken)] flex items-center justify-center text-[var(--text-primary)] mb-8 border border-[var(--border-default)] transition-colors duration-300">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] tracking-tight">{tool.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium font-[var(--ff-body)]">{tool.description}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest font-[var(--ff-body)]">
              Enterprise Suite Exclusive
            </div>
          </Card>
        ))}
      </div>

      <div className="relative rounded-[var(--r-2xl)] overflow-hidden bg-[var(--bg-sunken)] border border-[var(--border-subtle)] p-12 md:p-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--ember-subtle)] rounded-full blur-[100px] opacity-20 -mr-48 -mt-48" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-[var(--ff-display)] tracking-tight leading-tight">The end of fragmented tools.</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed font-medium font-[var(--ff-body)]">
            Mantle replaces the tangle of spreadsheets and apps with a single, integrated source of truth. 
            Reduce meeting overhead and increase delivery velocity by 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-10">
              View Demo
            </Button>
            <Button variant="outline" size="lg" className="px-10">
              Case Studies
            </Button>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  )
}

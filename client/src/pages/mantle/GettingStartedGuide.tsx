import { useState } from 'react'
import {
   CheckCircle,
   ArrowRight,
   Monitor,
   Layers,
   Shield,
   TrendingUp,
   Video
} from 'lucide-react'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function GettingStartedGuide() {
   const [completedSteps, setCompletedSteps] = useState([1])
   const [activeTab, setActiveTab] = useState('foundation')

   const deploymentMap = [
      { id: 1, title: 'Identity Synchronization', desc: 'Secure enterprise SSO and profile initialization.', time: '5m' },
      { id: 2, title: 'Architecture Mapping', desc: 'Define your organizational topology and agent clusters.', time: '15m' },
      { id: 3, title: 'System Integration', desc: 'Deploy Mantle hubs across your software stack.', time: '20m' },
      { id: 4, title: 'Collective Induction', desc: 'Invite and authorize your architectural team.', time: '10m' },
      { id: 5, title: 'First Benchmark', desc: 'Execute and analyze your first autonomous workflow.', time: '30m' },
   ]

   const resources = [
      { type: 'Masterclass', title: 'The Mantle Genesis Briefing', duration: '12:40', icon: <Video size={16} /> },
      { type: 'Blueprint', title: 'Global Deployment Strategy', size: '4.2 MB', icon: <Layers size={16} /> },
      { type: 'Lab', title: 'Interactive ROI Assessment', icon: <TrendingUp size={16} /> },
   ]

   const modules: Record<string, any[]> = {
      foundation: [
         { title: 'The Sovereignty Protocol', text: 'Understand how Mantle maintains data integrity across hybrid perimeters.' },
         { title: 'Agent Orchestration', text: 'Logic for directing autonomous units in multi-agent environments.' },
      ],
      scaling: [
         { title: 'Cluster Expansion', text: 'Procedures for scaling intelligence horizontally across regions.' },
         { title: 'Resource Throttling', text: 'Optimizing compute overhead for peak efficiency.' },
      ]
   }

   return (
      <PublicPageLayout 
         title={<>Initialize <span className="text-[var(--text-tertiary)] italic font-light block">Sovereignty.</span></>}
         subtitle="The structured roadmap for deploying, securing, and scaling Mantle within your enterprise ecosystem."
         badge="Mantle Induction"
         badgeIcon={<Monitor size={14} className="text-[var(--ember-text)]" />}
      >
         {/* Progress Overview */}
         <Card className="bg-[var(--bg-sunken)] rounded-[48px] p-12 md:p-16 mb-24 relative overflow-hidden group border border-[var(--border-subtle)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--ember-default)] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 italic font-[var(--ff-display)]">Onboarding Pulse</h2>
                  <p className="text-[var(--text-tertiary)] font-bold text-xs uppercase tracking-widest">Step {completedSteps.length} of {deploymentMap.length} verified • {Math.round((completedSteps.length / deploymentMap.length) * 100)}% Complete</p>
               </div>
               <div className="flex-1 max-w-md w-full">
                  <div className="bg-[var(--bg-elevated)] h-3 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                     <div
                        className="bg-[var(--ember-default)] h-full rounded-full shadow-[0_0_20px_rgba(var(--ember-rgb),0.4)] transition-all duration-1000"
                        style={{ width: `${(completedSteps.length / deploymentMap.length) * 100}%` }}
                     />
                  </div>
               </div>
               <Button size="lg" className="px-10 py-5">
                  Resume Induction
               </Button>
            </div>
         </Card>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            {/* Left Column: Map */}
            <div className="lg:col-span-2 space-y-8">
               <h3 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.3em] mb-10">Deployment Map</h3>
               <div className="space-y-6">
                  {deploymentMap.map(step => {
                     const isDone = completedSteps.includes(step.id)
                     return (
                        <Card key={step.id} className={cn(
                           "p-8 border rounded-[32px] transition-all duration-500",
                           isDone ? "bg-[var(--bg-elevated)] border-[var(--ember-muted)]" : "bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                        )}>
                           <div className="flex items-center justify-between gap-6">
                              <div className="flex items-center gap-6">
                                 <div className={cn(
                                    "w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border transition-all",
                                    isDone ? "bg-[var(--ember-default)] text-white border-[var(--ember-default)]" : "bg-[var(--bg-sunken)] text-[var(--text-tertiary)] border-[var(--border-subtle)]"
                                 )}>
                                    {isDone ? <CheckCircle size={24} /> : step.id}
                                 </div>
                                 <div>
                                    <h4 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-[var(--ff-display)]">{step.title}</h4>
                                    <p className="text-sm text-[var(--text-secondary)] font-medium">{step.desc}</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-6">
                                 <span className="text-[10px] font-bold text-[var(--text-tertiary)] font-mono hidden md:block">{step.time}</span>
                                 <button
                                    onClick={() => setCompletedSteps(prev => prev.includes(step.id) ? prev.filter(i => i !== step.id) : [...prev, step.id])}
                                    className={cn(
                                       "px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                                       isDone ? "text-[var(--ember-text)] font-extrabold" : "bg-[var(--text-primary)] text-[var(--bg-page)]"
                                    )}
                                 >
                                    {isDone ? 'Verified' : 'Initialize'}
                                 </button>
                              </div>
                           </div>
                        </Card>
                     )
                  })}
               </div>
            </div>

            {/* Right Column: Assets */}
            <div className="space-y-12">
               <Card className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[40px] p-10">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-10 tracking-tight font-[var(--ff-display)]">Executive Assets</h3>
                  <div className="space-y-8">
                     {resources.map((res, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-[var(--ember-text)]">{res.icon}</span>
                              <span className="text-[9px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">{res.type}</span>
                           </div>
                           <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--ember-text)] transition-colors mb-4">{res.title}</h4>
                           <Button variant="outline" className="w-full py-3 h-10 text-[9px] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-page)] transition-all">
                              Access Asset
                           </Button>
                        </div>
                     ))}
                  </div>
               </Card>

               <Card className="bg-gradient-to-br from-[var(--bg-sunken)] to-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[40px] p-10">
                  <div className="w-12 h-12 bg-[var(--bg-page)] rounded-2xl flex items-center justify-center text-[var(--ember-text)] shadow-xl mb-8 border border-[var(--border-subtle)]">
                     <Shield size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 tracking-tight font-[var(--ff-display)]">Need a Success <br /><span className="italic font-light text-[var(--text-secondary)]">Lead?</span></h3>
                  <p className="text-[var(--text-secondary)] text-sm font-medium leading-relaxed mb-10">
                     Our implementation experts are on standby to accelerate your Mantle deployment.
                  </p>
                  <Button className="w-full py-5 shadow-2xl shadow-[var(--ember-default)]/20">
                     Deploy Support Squad
                  </Button>
               </Card>
            </div>
         </div>

         {/* Modules */}
         <div className="mt-32">
            <div className="flex items-center gap-12 border-b border-[var(--border-subtle)] mb-16">
               <button
                  onClick={() => setActiveTab('foundation')}
                  className={`pb-6 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === 'foundation' ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'}`}
               >
                  Foundation Modules
                  {activeTab === 'foundation' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--ember-default)] rounded-full" />}
               </button>
               <button
                  onClick={() => setActiveTab('scaling')}
                  className={`pb-6 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === 'scaling' ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'}`}
               >
                  Scaling Strategy
                  {activeTab === 'scaling' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--ember-default)] rounded-full" />}
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {modules[activeTab].map((m, i) => (
                  <div key={i} className="group">
                     <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight font-[var(--ff-display)] group-hover:text-[var(--ember-text)] transition-colors">{m.title}</h4>
                     <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-8">{m.text}</p>
                     <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] group-hover:text-[var(--ember-text)] transition-all">
                        Review Blueprint <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform ml-2" />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </PublicPageLayout>
   )
}

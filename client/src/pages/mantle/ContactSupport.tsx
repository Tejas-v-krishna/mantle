import { useState } from 'react'
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Monitor,
  ChevronDown
} from 'lucide-react'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function ContactSupport() {
  const [activeTab, setActiveTab] = useState('support')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const supportOptions = [
    { id: 'support', label: 'Technical Ops', icon: <Monitor size={18} /> },
    { id: 'billing', label: 'Enterprise Billing', icon: <CheckCircle size={18} /> },
    { id: 'sales', label: 'Strategic Partnership', icon: <Globe size={18} /> },
    { id: 'labs', label: 'Feature Labs', icon: <Zap size={18} /> }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <PublicPageLayout 
      title={<>Deploy Support <span className="text-[var(--text-tertiary)] italic font-light block">Squad.</span></>}
      subtitle="Direct encrypted access to Mantle solution architects. Our team is authorized to resolve complex environment bottlenecks with 24/7 priority."
      badge="Secure Transmission Protocol"
      badgeIcon={<ShieldCheck size={14} className="text-[var(--ember-text)]" />}
    >
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <Card className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-[32px]">
          <div className="w-16 h-16 bg-[var(--bg-sunken)] rounded-2xl flex items-center justify-center mb-8 border border-[var(--border-default)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all duration-500">
            <Mail size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)]">Priority Briefing</h3>
          <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-10">Secure transmission sent directly to our architecture squad. Response within 4 hours.</p>
          <Button className="w-full py-6 group/btn">
            Initialize Briefing <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform ml-2" />
          </Button>
        </Card>

        <Card className="p-10 bg-[var(--bg-page)] border border-[var(--ember-muted)] group relative overflow-hidden rounded-[32px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ember-default)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="w-16 h-16 bg-[var(--bg-elevated)] rounded-2xl flex items-center justify-center mb-8 text-[var(--ember-text)] border border-[var(--border-subtle)] group-hover:scale-110 transition-transform">
            <Phone size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 italic font-[var(--ff-display)]">Hotline Alpha</h3>
          <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-10">Immediate voice link for critical enterprise outages. Authorized personnel only.</p>
          <Button variant="outline" className="w-full py-6 border-[var(--ember-muted)] text-[var(--ember-text)] hover:bg-[var(--ember-default)] hover:text-white">
            Join Link: 1-888-MANTLE-X
          </Button>
        </Card>

        <Card className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] group hover:border-[var(--text-secondary)] transition-all rounded-[32px]">
          <div className="w-16 h-16 bg-[var(--bg-sunken)] rounded-2xl flex items-center justify-center mb-8 border border-[var(--border-default)] group-hover:bg-[var(--ember-default)] group-hover:text-white transition-all duration-500">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)]">Live Console</h3>
          <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-10">Direct encrypted chat with a senior solution engineer. Real-time debugging.</p>
          <Button variant="outline" className="w-full py-6">
            Initialize Console
          </Button>
        </Card>
      </div>

      {/* Support Form */}
      <Card className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[48px] p-12 md:p-20 shadow-2xl mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--ember-default)] to-transparent opacity-50" />

        <div className="flex flex-wrap gap-8 border-b border-[var(--border-subtle)] mb-16 pb-2">
          {supportOptions.map(option => (
            <button
              key={option.id}
              className={`px-4 py-4 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-all relative ${activeTab === option.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'}`}
              onClick={() => setActiveTab(option.id)}
            >
              {option.icon}
              {option.label}
              {activeTab === option.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--ember-default)] rounded-full shadow-lg"></div>
              )}
            </button>
          ))}
        </div>

        {isSubmitted ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[var(--bg-sunken)] text-[var(--ember-text)] rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--border-default)]">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6 font-[var(--ff-display)]">Transmission Confirmed.</h2>
            <p className="text-[var(--text-secondary)] font-medium max-w-xl mx-auto mb-12 text-lg">
              Strategic Briefing #MANTLE-{Math.floor(Math.random() * 90000) + 10000} has been received.
              A solution architect will initiate contact within your specified window.
            </p>
            <Button size="lg" className="px-16 py-6" onClick={() => setIsSubmitted(false)}>
              Draft New Briefing
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Input label="Full Identity" placeholder="Your Name" required />
              <Input label="Secure Email" type="email" placeholder="corporate@workspace.com" required />
              <div className="md:col-span-2">
                  <Input label="Strategic Subject" placeholder="Briefly describe the environment bottleneck" required />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest ml-1">Environment Briefing</label>
                <textarea required rows={6} placeholder="Provide full context for the architecture team..." className="w-full bg-[var(--bg-sunken)] border border-[var(--border-default)] rounded-3xl px-8 py-6 text-[var(--text-primary)] text-sm font-medium focus:outline-none focus:border-[var(--ember-default)] transition-all resize-none" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-4 w-full md:w-80">
                   <div className="relative flex-1">
                      <select className="w-full bg-[var(--bg-sunken)] border border-[var(--border-default)] rounded-2xl px-6 py-4 text-[var(--text-primary)] text-xs font-bold appearance-none focus:outline-none focus:border-[var(--ember-default)] transition-all cursor-pointer">
                        <option>Observation (Low)</option>
                        <option>Routine (Medium)</option>
                        <option>Urgent (High)</option>
                        <option>Critical (Operational Blocker)</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none" />
                   </div>
                </div>
                <Button type="submit" size="lg" className="px-16 py-6 shadow-2xl w-full md:w-auto">
                    Initiate Secure Transmission
                </Button>
            </div>
          </form>
        )}
      </Card>

      {/* Global Hubs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="p-12 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[40px]">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[var(--bg-sunken)] rounded-xl flex items-center justify-center text-[var(--text-primary)] border border-[var(--border-default)]">
              <Clock size={20} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Sync Windows</h4>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Global Ops</span>
              <span className="text-xs font-bold text-[var(--text-primary)] font-mono">09:00 - 18:00 IST</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Weekend Guard</span>
              <span className="text-xs font-bold text-[var(--text-primary)] font-mono">10:00 - 14:00 IST</span>
            </div>
            <p className="text-[9px] font-bold text-[var(--ember-text)] uppercase tracking-widest italic pt-2">24/7 priority for enterprise partners</p>
          </div>
        </Card>

        <Card className="p-12 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-[40px]">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[var(--bg-sunken)] rounded-xl flex items-center justify-center text-[var(--text-primary)] border border-[var(--border-default)]">
              <MapPin size={20} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-primary)] font-[var(--ff-display)]">Anchor Points</h4>
          </div>
          <div className="space-y-8">
            <div>
              <h5 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Global Core</h5>
              <p className="text-xs font-bold text-[var(--text-primary)]">Tech Park, Bangalore, KA, India</p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-2">AMER Command</h5>
              <p className="text-xs font-bold text-[var(--text-primary)]">Innovation Drive, SF, CA, USA</p>
            </div>
          </div>
        </Card>
      </div>
    </PublicPageLayout>
  )
}

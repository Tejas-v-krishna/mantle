import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Code2, Terminal, Book, Box } from 'lucide-react'

export default function APIDocumentation() {
  const sections = [
    { icon: <Terminal />, title: 'Authentication', description: 'Zero-trust API key management and OAuth 2.0 implementation.' },
    { icon: <Book />, title: 'Core Endpoints', description: 'Reference for HR, Finance, and Analytics resource management.' },
    { icon: <Box />, title: 'Webhooks', description: 'Real-time event streaming for every operational trigger.' },
    { icon: <Code2 />, title: 'SDKs', description: 'Official libraries for Node.js, Python, and Go environments.' }
  ]

  return (
    <PublicPageLayout 
      title={<>Engineering <span className="text-[var(--text-tertiary)] italic font-light block">Excellence.</span></>}
      subtitle="Built by developers, for developers. Integrate the Mantle operating layer into your existing technical landscape with ease."
      badge="API & Protocols"
      badgeIcon={<Code2 size={14} className="text-[var(--ember-text)]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {sections.map((section, i) => (
          <Card key={i} className="p-10 bg-[var(--bg-elevated)] border-[var(--border-subtle)] flex items-start gap-8 group hover:bg-[var(--bg-page)] transition-all cursor-pointer">
            <div className="w-14 h-14 bg-[var(--bg-sunken)] rounded-2xl flex items-center justify-center text-[var(--text-tertiary)] group-hover:text-[var(--ember-text)] transition-colors border border-[var(--border-default)]">
              {section.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 font-[var(--ff-display)]">{section.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{section.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-[#050505] rounded-[24px] border border-[var(--border-strong)] p-12 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--ember-subtle)] rounded-full blur-[80px] -mr-32 -mt-32 opacity-40" />
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
          </div>
          <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest">GET /v1/ops/velocity</p>
        </div>
        <pre className="text-sm font-mono text-[var(--text-secondary)] leading-loose">
          <code>
            <span className="text-[var(--ember-text)]">const</span> mantle = <span className="text-[var(--ember-text)]">require</span>(<span className="text-green-500">'@mantle/core'</span>);<br />
            <span className="text-[var(--ember-text)]">const</span> client = <span className="text-[var(--ember-text)]">new</span> mantle.Client(<span className="text-green-500">'api_key_0x...'</span>);<br /><br />
            <span className="text-gray-500">// Initialize operational audit</span><br />
            <span className="text-[var(--ember-text)]">await</span> client.audit.initialize({`{`}<br />
            {"  "}department: <span className="text-green-500">'global_hr'</span>,<br />
            {"  "}metrics: [<span className="text-green-500">'velocity'</span>, <span className="text-green-500">'recovery'</span>]<br />
            {`}`});
          </code>
        </pre>
      </div>
    </PublicPageLayout>
  )
}

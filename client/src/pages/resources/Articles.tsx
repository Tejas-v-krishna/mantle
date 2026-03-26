import React, { useState } from 'react'
import { Search, Filter, Clock, User, ArrowRight, Bookmark, Share2, Star, TrendingUp, BookOpen, Tag } from 'lucide-react'
import { PublicPageLayout } from '@/components/layout/PublicPageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  { id: 'all', name: 'All Articles', count: 156 },
  { id: 'ai', name: 'AI & Machine Learning', count: 42 },
  { id: 'business', name: 'Business Strategy', count: 28 },
  { id: 'technology', name: 'Technology Trends', count: 35 },
  { id: 'productivity', name: 'Productivity', count: 22 },
  { id: 'data', name: 'Data Analytics', count: 29 },
]

const ARTICLES = [
  {
    id: 1,
    title: 'The Future of AI in Business Automation',
    excerpt: 'How artificial intelligence is transforming business processes and creating new opportunities for automation across industries.',
    author: 'Dr. Sarah Chen',
    date: '2026-03-15',
    readTime: '8 min',
    category: 'ai',
    featured: true,
    views: 12450,
    likes: 842,
    tags: ['AI', 'Automation', 'Business'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Data-Driven Decision Making: A Practical Guide',
    excerpt: 'Learn how to leverage data analytics to make informed business decisions and gain competitive advantage.',
    author: 'Michael Rodriguez',
    date: '2026-03-10',
    readTime: '12 min',
    category: 'data',
    featured: true,
    views: 9876,
    likes: 721,
    tags: ['Data', 'Analytics', 'Decision Making'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Building Scalable Cloud Infrastructure',
    excerpt: 'Best practices for designing and implementing cloud infrastructure that can scale with your business growth.',
    author: 'Alex Thompson',
    date: '2026-03-05',
    readTime: '15 min',
    category: 'technology',
    featured: false,
    views: 7654,
    likes: 543,
    tags: ['Cloud', 'Infrastructure', 'Scalability'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'The Rise of Remote Work Productivity Tools',
    excerpt: 'An analysis of how remote work tools have evolved and what the future holds for distributed teams.',
    author: 'Jessica Williams',
    date: '2026-02-28',
    readTime: '10 min',
    category: 'productivity',
    featured: false,
    views: 6543,
    likes: 432,
    tags: ['Remote Work', 'Productivity', 'Tools'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Customer Experience in the Digital Age',
    excerpt: 'How digital transformation is reshaping customer expectations and what businesses need to do to keep up.',
    author: 'David Park',
    date: '2026-02-20',
    readTime: '9 min',
    category: 'business',
    featured: false,
    views: 8765,
    likes: 654,
    tags: ['Customer Experience', 'Digital', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Machine Learning Model Deployment Best Practices',
    excerpt: 'A comprehensive guide to deploying machine learning models in production environments.',
    author: 'Dr. Sarah Chen',
    date: '2026-02-15',
    readTime: '14 min',
    category: 'ai',
    featured: false,
    views: 5432,
    likes: 321,
    tags: ['Machine Learning', 'Deployment', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
  }
]

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const filteredArticles = ARTICLES.filter(article => {
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <PublicPageLayout 
      title={<>Mantle <span className="text-[var(--text-tertiary)] italic font-light">Journal.</span></>}
      subtitle="Deep dives into the intersection of enterprise architecture and autonomous intelligence."
      badge="Articles & Insights"
      badgeIcon={<Tag size={12} />}
    >
      {/* Search & Filter Bar */}
      <section className="mb-16">
        <div className="bg-[var(--bg-elevated)]/50 backdrop-blur-xl border border-[var(--border-subtle)] rounded-[var(--r-pill)] p-2 pl-8 flex items-center shadow-2xl group max-w-4xl">
          <Search className="text-[var(--text-tertiary)] group-focus-within:text-[var(--ember-text)] transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search the journal..."
            className="flex-1 px-6 py-4 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] font-medium outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="h-10 w-[1px] bg-[var(--border-subtle)] mx-2" />
          <button className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-sunken)] rounded-full text-[var(--text-primary)] font-bold text-[10px] uppercase tracking-widest hover:bg-[var(--bg-page)] transition-colors border border-[var(--border-default)]">
            <Filter size={14} /> 
            <span>Recent</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-12">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border",
                selectedCategory === category.id
                  ? "bg-[var(--ember-default)] text-white border-[var(--ember-default)] shadow-lg shadow-[var(--ember-default)]/20"
                  : "bg-[var(--bg-elevated)] text-[var(--text-tertiary)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]"
              )}
            >
              {category.name} <span className="ml-2 opacity-50">{category.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-10 text-[var(--text-tertiary)]">
            <Star size={14} className="text-[var(--ember-default)]" fill="currentColor" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em]">Featured Research</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ARTICLES.filter(a => a.featured).map(article => (
              <Card key={article.id} className="p-0 overflow-hidden bg-[var(--bg-elevated)] border-[var(--border-subtle)] group">
                <div className="aspect-[16/9] bg-[var(--bg-sunken)] relative overflow-hidden">
                  <img 
                    src={article.image} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <Badge variant="ember">{CATEGORIES.find(c => c.id === article.category)?.name}</Badge>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
                    <span className="flex items-center gap-2"><TrendingUp size={14} /> {article.views.toLocaleString()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] leading-tight group-hover:text-[var(--ember-text)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[var(--bg-sunken)] rounded-full flex items-center justify-center text-[var(--text-tertiary)] border border-[var(--border-default)]">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{article.author}</p>
                        <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">{article.date}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-[var(--bg-sunken)] rounded-full flex items-center justify-center text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--ember-default)] transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="mb-32">
        <div className="flex items-center gap-2 mb-10 text-[var(--text-tertiary)]">
          <BookOpen size={14} className="text-[var(--ember-default)]" />
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em]">
            {searchQuery ? `Search Results (${filteredArticles.length})` : 'Recent Publications'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <Card key={article.id} className="p-8 bg-[var(--bg-surface)] border-[var(--border-subtle)] group hover:border-[var(--text-tertiary)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="neutral" showDot={false} className="bg-[var(--bg-sunken)] text-[var(--text-tertiary)] text-[9px] px-3">
                  {CATEGORIES.find(c => c.id === article.category)?.name}
                </Badge>
                <div className="flex gap-3">
                  <button className="text-[var(--text-tertiary)] hover:text-[var(--ember-text)] transition-colors"><Bookmark size={14} /></button>
                  <button className="text-[var(--text-tertiary)] hover:text-[var(--ember-text)] transition-colors"><Share2 size={14} /></button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-[var(--ff-display)] line-clamp-2 group-hover:text-[var(--ember-text)] transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {article.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest flex items-center gap-1 opacity-70">
                    <Tag size={10} className="text-[var(--ember-muted)]" /> {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--bg-sunken)] rounded-full flex items-center justify-center text-[var(--text-tertiary)] border border-[var(--border-default)]">
                    <User size={14} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--text-primary)]">{article.author}</span>
                </div>
                <span className="text-[10px] font-bold text-[var(--text-tertiary)]">{article.readTime}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[var(--bg-elevated)] rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden border border-[var(--border-subtle)]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--ember-default)]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-[var(--ff-display)] tracking-tight">Stay optimized.</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
            Get weekly insights on enterprise AI architecture, governance, and autonomous workflows delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="work@company.com"
              className="flex-1 px-8 py-5 bg-[var(--bg-sunken)] border border-[var(--border-default)] rounded-2xl text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--ember-default)] transition-all font-medium"
            />
            <Button size="lg" className="px-12 py-5">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-tertiary)] mt-10">
            Joining 12,000+ industry leaders.
          </p>
        </div>
      </section>
    </PublicPageLayout>
  )
}

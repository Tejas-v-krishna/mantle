import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  LifeBuoy, 
  Wallet, 
  Megaphone, 
  Package, 
  Layout, 
  ShieldCheck,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  { id: 'analytics', name: 'AI Analytics', icon: BarChart3, path: '/services/ai-analytics' },
  { id: 'hr', name: 'HR Optimization', icon: Users, path: '/services/hr-optimization' },
  { id: 'support', name: 'Customer Support', icon: LifeBuoy, path: '/services/customer-support' },
  { id: 'finance', name: 'Financial Planning', icon: Wallet, path: '/services/financial-planning' },
  { id: 'marketing', name: 'Marketing Campaign', icon: Megaphone, path: '/services/marketing-campaign' },
  { id: 'inventory', name: 'Inventory Management', icon: Package, path: '/services/inventory-management' },
  { id: 'projects', name: 'Project Collaboration', icon: Layout, path: '/services/project-collaboration' },
  { id: 'security', name: 'Data Security', icon: ShieldCheck, path: '/services/data-security' },
];

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] flex flex-col fixed left-0 top-0 z-[var(--z-nav)] shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-[var(--ember-default)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--shadow-ember)]">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-[var(--text-primary)] font-[var(--ff-display)] text-xl font-bold tracking-tight">Mantle</span>
        </div>
      </div>

      <nav className="flex-grow px-4 space-y-1.5 overflow-y-auto custom-scrollbar pt-4">
        <p className="text-[var(--text-tertiary)] text-[10px] uppercase font-bold tracking-[0.2em] px-3 mb-4">Enterprise Modules</p>
        {pillars.map((pillar) => (
          <NavLink
            key={pillar.id}
            to={pillar.path}
            className={({ isActive }) => 
              cn(
                "group flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-[var(--ember-muted)] text-[var(--ember-text)] border border-[rgba(212,136,74,0.15)] shadow-sm shadow-[var(--shadow-ember)]/5" 
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              )
            }
          >
            {({ isActive }) => (
              <>
                <pillar.icon className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110", isActive && "text-[var(--ember-default)]")} />
                <span className="font-semibold text-[13px] flex-grow font-[var(--ff-body)]">{pillar.name}</span>
                {isActive && (
                  <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-[var(--ember-default)]" />
                )}
                {!isActive && (
                  <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-[var(--border-subtle)] bg-[var(--bg-sunken)]/50">
        <button className="flex items-center space-x-3 px-3 py-3 w-full text-[var(--text-tertiary)] hover:text-[var(--error-text)] hover:bg-[var(--error-bg)] rounded-xl transition-all duration-300 group">
          <LogOut className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-[13px] font-[var(--ff-body)]">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

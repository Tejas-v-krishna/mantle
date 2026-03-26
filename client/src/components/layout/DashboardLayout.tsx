import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] overflow-hidden">
      <Sidebar />
      <main className="flex-grow ml-64 min-h-screen overflow-y-auto relative bg-[var(--bg-sunken)]">
        {/* Subtle Crimson Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--ember-default)]/3 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--ember-hover)]/3 blur-[120px] rounded-full pointer-events-none opacity-40" />
        
        <div className="relative p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Users,
  DollarSign,
  Megaphone,
  Package,
  Handshake,
  ShieldCheck,
  Cpu,
  Zap,
  Workflow
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 'ai-analytics', name: 'AI Analytics Dashboard', icon: <BarChart3 size={24} />, desc: 'Real-time efficiency mapping.' },
  { id: 'customer-support', name: 'Customer Support Automation', icon: <MessageSquare size={24} />, desc: 'Autonomous resolution agents.' },
  { id: 'hr-optimization', name: 'HR Optimization', icon: <Users size={24} />, desc: 'Strategic workforce leveling.' },
  { id: 'financial-planning', name: 'Financial Planning Tools', icon: <DollarSign size={24} />, desc: 'Automated fiscal forecasting.' },
  { id: 'marketing-campaign', name: 'Marketing Campaign Manager', icon: <Megaphone size={24} />, desc: 'AI-driven growth orchestration.' },
  { id: 'inventory-management', name: 'Inventory Management System', icon: <Package size={24} />, desc: 'Predictive supply chain ops.' },
  { id: 'project-collaboration', name: 'Project Collaboration Suite', icon: <Handshake size={24} />, desc: 'Unified team sync layer.' },
  { id: 'data-security', name: 'Data Security Solutions', icon: <ShieldCheck size={24} />, desc: 'Zero-trust perimeter guard.' },
];

export default function SelectServicesForDemo() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleContinue = () => {
    if (selectedServices.length === 0) {
      return;
    }
    navigate('/book-demo/form');
  };

  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-0">
        {/* Header Section */}
        <section className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-8 text-[#373f51] font-bold text-[10px] tracking-[0.2em] uppercase bg-sand-50 px-5 py-2 rounded-full">
            <Cpu size={14} />
            <span>Demonstration Briefing • Step 01</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display text-obsidian-900 mb-6 tracking-tight">
            Configure Your <br /><span className="italic text-[#373f51]">Experience.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Select the architectural modules you wish to see in operation. Our solution architects will prepare a custom environment for your briefing.
          </p>
        </section>

        {/* Services Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map(service => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                className={`card p-8 cursor-pointer transition-all duration-500 rounded-[2.5rem] border-2 flex flex-col justify-between group ${isSelected
                    ? 'bg-obsidian-900 border-obsidian-900 shadow-2xl scale-[1.02]'
                    : 'bg-white border-stone-100 hover:border-stone-300'
                  }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${isSelected ? 'bg-ember-600 text-offwhite shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-sand-50 text-obsidian-900 group-hover:bg-offwhite group-hover:scale-110'
                    }`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-display mb-3 tracking-tight ${isSelected ? 'text-offwhite' : 'text-obsidian-900'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-xs font-medium leading-relaxed ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-ember-600 border-ember-600' : 'border-stone-200'
                    }`}>
                    {isSelected && <Check size={14} className="text-offwhite" />}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${isSelected ? 'text-stone-400' : 'text-stone-300'}`}>
                    {isSelected ? 'Ready' : 'Initialize'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className={`fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-lg px-8 transition-all duration-700 ${selectedServices.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
          <div className="bg-obsidian-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-between gap-6">
            <div className="pl-4">
              <p className="text-offwhite font-bold text-xs">{selectedServices.length} Modules Selected</p>
              <p className="text-stone-400 text-[9px] font-bold uppercase tracking-widest">Initialization Ready</p>
            </div>
            <button
              className="btn btn-primary px-10 py-4 flex items-center gap-3 shadow-2xl"
              onClick={handleContinue}
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

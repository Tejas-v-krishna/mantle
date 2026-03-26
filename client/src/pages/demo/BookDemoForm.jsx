import React, { useState } from 'react';
import {
   Calendar,
   Clock,
   User,
   Mail,
   Building,
   ArrowLeft,
   ShieldCheck,
   CheckCircle,
   ArrowRight,
   Globe,
   Zap,
   ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BookDemoForm() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      date: '',
      time: '',
      timezone: 'IST',
      additionalInfo: ''
   });
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
      // Simulate API delay
      setTimeout(() => {
         // In a real app, navigate after confirmation
      }, 2000);
   };

   return (
      <div className="pt-32 pb-24 bg-offwhite min-h-screen font-sans">
         <div className="max-w-7xl mx-auto px-8 md:px-0">

            <button
               className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-obsidian-900 mb-12 transition-colors group"
               onClick={() => navigate(-1)}
            >
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
               Back to selection
            </button>

            {isSubmitted ? (
               <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-[4rem] p-12 md:p-24 text-center shadow-2xl animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-inner">
                     <CheckCircle size={48} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display text-obsidian-900 mb-8 tracking-tight">Initialization <br /><span className="text-emerald-600 italic">Confirmed.</span></h2>
                  <p className="text-stone-500 font-medium text-lg leading-relaxed mb-12">
                     Your demonstration briefing has been scheduled. A Mantle solution architect will contact you within 24 hours to finalize the environment configuration.
                  </p>
                  <button
                     className="btn btn-primary px-16 py-6 shadow-2xl"
                     onClick={() => navigate('/')}
                  >
                     Return to Command Center
                  </button>
               </div>
            ) : (
               <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
                  {/* Left Column: Context */}
                  <div className="lg:col-span-2 space-y-12">
                     <div>
                        <div className="inline-flex items-center gap-2 mb-8 text-[#373f51] font-bold text-[10px] tracking-[0.2em] uppercase bg-sand-50 px-5 py-2 rounded-full">
                           <Globe size={14} />
                           <span>Briefing Schedule • Step 02</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display text-obsidian-900 mb-8 tracking-tight leading-tight">
                           Synchronize <br /><span className="italic text-[#373f51]">Command.</span>
                        </h1>
                        <p className="text-stone-600 font-medium leading-relaxed">
                           Finalize your demonstration environment parameters and schedule your interactive session with our core team.
                        </p>
                     </div>

                     <div className="space-y-8">
                        <div className="flex gap-6">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#373f51] shadow-sm border border-stone-100 flex-shrink-0">
                              <Zap size={20} />
                           </div>
                           <div>
                              <h4 className="text-sm font-bold text-obsidian-900 mb-2 uppercase tracking-widest">Live Execution</h4>
                              <p className="text-xs text-stone-500 font-medium">Real-time demonstration of Mantle agents operating within a secure sandbox environment.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#373f51] shadow-sm border border-stone-100 flex-shrink-0">
                              <ShieldCheck size={20} />
                           </div>
                           <div>
                              <h4 className="text-sm font-bold text-obsidian-900 mb-2 uppercase tracking-widest">Security Audit</h4>
                              <p className="text-xs text-stone-500 font-medium">Detailed review of Mantle's data sovereignty protocols and encryption standards.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="lg:col-span-3">
                     <div className="bg-white border border-stone-200 rounded-[3.5rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-ember-600/5 rounded-full blur-3xl" />

                        <form onSubmit={handleSubmit} className="space-y-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                 <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Identity</label>
                                 <div className="relative">
                                    <User size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                                    <input
                                       type="text"
                                       name="name"
                                       placeholder="Full Name"
                                       value={formData.name}
                                       onChange={handleChange}
                                       required
                                       className="w-full pl-14 pr-8 py-5 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all placeholder:text-stone-300"
                                    />
                                 </div>
                              </div>
                              <div className="space-y-4">
                                 <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Transmission</label>
                                 <div className="relative">
                                    <Mail size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                                    <input
                                       type="email"
                                       name="email"
                                       placeholder="corp@workspace.com"
                                       value={formData.email}
                                       onChange={handleChange}
                                       required
                                       className="w-full pl-14 pr-8 py-5 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all placeholder:text-stone-300"
                                    />
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-4">
                              <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Organization</label>
                              <div className="relative">
                                 <Building size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                                 <input
                                    type="text"
                                    name="company"
                                    placeholder="Enterprise Identity"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-14 pr-8 py-5 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all placeholder:text-stone-300"
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                 <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Sync Date</label>
                                 <div className="relative">
                                    <Calendar size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                                    <input
                                       type="date"
                                       name="date"
                                       value={formData.date}
                                       onChange={handleChange}
                                       required
                                       className="w-full pl-14 pr-8 py-5 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all"
                                    />
                                 </div>
                              </div>
                              <div className="space-y-4">
                                 <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Sync Time</label>
                                 <div className="relative">
                                    <Clock size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                                    <input
                                       type="time"
                                       name="time"
                                       value={formData.time}
                                       onChange={handleChange}
                                       required
                                       className="w-full pl-14 pr-8 py-5 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all"
                                    />
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-4">
                              <label className="text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] ml-2">Strategic Objectives</label>
                              <textarea
                                 name="additionalInfo"
                                 rows="4"
                                 placeholder="Any specific environment bottlenecks or integration goals?"
                                 value={formData.additionalInfo}
                                 onChange={handleChange}
                                 className="w-full px-8 py-6 bg-stone-50 border border-stone-100 rounded-[2rem] text-sm font-bold text-obsidian-900 focus:outline-none focus:border-ember-600 transition-all placeholder:text-stone-300 resize-none"
                              />
                           </div>

                           <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-stone-50">
                              <div className="flex items-center gap-3 text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em]">
                                 <ShieldCheck size={14} className="text-[#373f51]" />
                                 Authorized Sync Protocol
                              </div>
                              <button
                                 type="submit"
                                 className="btn btn-primary px-12 py-5 shadow-2xl flex items-center gap-3 group"
                              >
                                 Complete Sync <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

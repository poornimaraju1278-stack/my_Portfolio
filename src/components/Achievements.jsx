import React from 'react';
import { achievementsData } from '../data/achievements';
import { Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>MILESTONES & LEARNING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              ACHIEVEMENTS & OPPORTUNITIES
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Factual technical milestones, competitive event participation, independent portfolio engineering, and continuous skill building.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 space-y-4 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#111827] border border-slate-800 text-[#38BDF8]">
                    {item.category}
                  </span>
                  <span className="text-[#8B5CF6] font-semibold">{item.tag}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-[#F8FAFC] group-hover:text-[#38BDF8]">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Verified Milestone</span>
                </div>
                <span>Factual Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

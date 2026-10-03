import React from 'react';
import { journeyData } from '../data/journey';
import { Sparkles, GitCommit, CheckCircle2 } from 'lucide-react';

export default function DeveloperJourney() {
  return (
    <section className="py-24 relative border-t border-slate-800/80 bg-[#0D1220]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>EVOLUTION & LEARNING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              DEVELOPER JOURNEY
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Key progression milestones from foundational C/C++/Java programming to applied AI, computer vision, connected IoT systems, and full-stack web development.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyData.map((item) => (
            <div 
              key={item.step}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-xl font-display font-extrabold text-[#38BDF8]">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#111827] border border-slate-800 text-[#8B5CF6] text-[10px]">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-[#F8FAFC]">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-[#38BDF8]">
                <CheckCircle2 size={14} />
                <span>Completed Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

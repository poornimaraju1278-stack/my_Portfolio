import React from 'react';
import { exploringData } from '../data/exploring';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Exploring() {
  return (
    <section className="py-24 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>CONTINUOUS LEARNING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              WHAT I'M EXPLORING
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Topics and technical domains currently under active investigation and experimental practice.
          </p>
        </div>

        {/* Exploring Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploringData.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Compass size={18} />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#111827] border border-slate-800 text-[#8B5CF6]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                  {item.topic}
                </h3>

                <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-[#38BDF8]">
                <span>ACTIVE STUDY</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { experienceData } from '../data/experience';
import { Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>PRACTICAL TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              EXPERIENCE & ACTIVITIES
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Practical experience gained through hackathon participation, portfolio engineering, collaborative project development, and continuous learning.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {experienceData.map((item) => (
            <div key={item.number} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070B14] border-2 border-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:shadow-lg group-hover:shadow-[#38BDF8]/50 transition-all duration-300" />

              <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4 hover:border-[#38BDF8]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-display font-bold text-[#38BDF8]">
                      {item.number}
                    </span>
                    <span className="text-[#F8FAFC] font-semibold tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-[#111827] border border-slate-800 text-[#94A3B8]">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-[#94A3B8] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-[#94A3B8]">
                      <CheckCircle2 size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

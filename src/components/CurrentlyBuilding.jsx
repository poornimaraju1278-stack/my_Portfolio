import React from 'react';
import { currentlyBuildingData } from '../data/currentlyBuilding';
import { Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CurrentlyBuilding() {
  return (
    <section className="py-12 relative border-t border-slate-800/80 bg-[#0D1220]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4 border border-slate-800 relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Activity size={18} className="animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block font-bold">
                  CURRENTLY BUILDING & EXPLORING
                </span>
                <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                  {currentlyBuildingData.projectTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                {currentlyBuildingData.statusBadge}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#94A3B8] font-mono text-xs">
                {currentlyBuildingData.updatedPeriod}
              </span>
            </div>
          </div>

          {/* Focus bullets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-[#94A3B8]">
            {currentlyBuildingData.focusAreas.map((area, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#070B14] border border-slate-800/80 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{area}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#94A3B8]">
            <span className="text-slate-500">Active Tech Stack:</span>
            {currentlyBuildingData.techTags.map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded bg-[#111827] border border-slate-800 text-[#38BDF8]">
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

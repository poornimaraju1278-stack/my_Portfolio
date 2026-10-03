import React from 'react';
import { techStackList } from '../data/skills';
import { Sparkles, Code2, Terminal, Cpu, Layers, GitBranch, Layout, Globe, Zap, Eye } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>CORE TECHNOLOGIES & TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              TECH STACK
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Interactive index of technologies, languages, web frameworks, and developer tools used across practical projects.
          </p>
        </div>

        {/* Tech Stack Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStackList.map((tech) => (
            <div
              key={tech.name}
              className="group glass-panel p-4 md:p-5 rounded-2xl border border-slate-800 hover:border-[#38BDF8]/50 hover:bg-[#111827] hover:scale-[1.02] transition-all duration-200 cursor-default flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] group-hover:bg-[#8B5CF6] transition-colors" />
                <span className="text-[10px] font-mono text-[#94A3B8] bg-[#070B14] px-2 py-0.5 rounded border border-slate-800">
                  {tech.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-display font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[11px] font-mono text-[#94A3B8] mt-1">
                  {tech.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

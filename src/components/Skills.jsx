import React from 'react';
import { skillsData } from '../data/skills';
import { Code2, Terminal, Cpu, Layout, Sparkles, Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>STACK & COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              TECHNICAL SKILLS
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Practical skills, tools, programming languages, and specialized domains utilized in software engineering projects.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => (
            <div 
              key={category.category}
              className="glass-panel rounded-2xl p-6 space-y-6 hover:border-[#38BDF8]/40 transition-all duration-300 gradient-border-hover"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 flex items-center justify-center text-[#38BDF8] font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#F8FAFC] tracking-wider">
                      {category.category}
                    </h3>
                    <p className="text-xs font-mono text-[#94A3B8]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group px-4 py-2.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#38BDF8]/50 hover:bg-[#111827] transition-all duration-200 flex items-center gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8] group-hover:bg-[#8B5CF6] transition-colors" />
                    <span className="text-xs font-mono font-semibold text-[#F8FAFC]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8] opacity-70 group-hover:opacity-100 transition-opacity">
                      · {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

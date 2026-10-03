import React, { useState } from 'react';
import { developerDnaData } from '../data/skills';
import { Sparkles, Code2, Hammer, Cpu, Wrench } from 'lucide-react';

export default function DeveloperDNA() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categoryIcons = {
    'CODE': Code2,
    'BUILD': Hammer,
    'CREATE': Cpu,
    'TOOLS': Wrench
  };

  const filteredCategories = activeCategory === 'ALL'
    ? developerDnaData
    : developerDnaData.filter(c => c.category === activeCategory);

  return (
    <section id="developer-dna" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>SKILL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              DEVELOPER DNA
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {['ALL', 'CODE', 'BUILD', 'CREATE', 'TOOLS'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg border transition-all uppercase ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] font-bold border-transparent shadow-md shadow-[#38BDF8]/20'
                    : 'glass-card border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Developer DNA Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((dnaGroup) => {
            const IconComponent = categoryIcons[dnaGroup.category] || Code2;

            return (
              <div 
                key={dnaGroup.category}
                className="glass-panel rounded-2xl p-6 md:p-8 space-y-6 border border-slate-800 hover:border-[#38BDF8]/40 transition-all duration-300 gradient-border-hover"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 text-[#38BDF8]">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                        {dnaGroup.category}
                      </h3>
                      <p className="text-xs font-mono text-[#94A3B8]">
                        {dnaGroup.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#38BDF8] font-bold px-2.5 py-1 rounded bg-[#0D1220] border border-slate-800">
                    {dnaGroup.items.length} SKILLS
                  </span>
                </div>

                {/* Items List with Contextual Hover */}
                <div className="space-y-3">
                  {dnaGroup.items.map((item) => (
                    <div 
                      key={item.name}
                      className="group p-3.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#38BDF8]/50 hover:bg-[#111827] hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-[#94A3B8] opacity-60 group-hover:opacity-100 transition-opacity">
                          Hover to inspect
                        </span>
                      </div>
                      <p className="text-xs font-sans text-[#94A3B8] mt-1 group-hover:text-[#F8FAFC] transition-colors leading-relaxed">
                        "{item.context}"
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

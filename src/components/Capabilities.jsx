import React, { useState } from 'react';
import { capabilitiesData } from '../data/capabilities';
import { Code2, Terminal, Cpu, Layout, Sparkles } from 'lucide-react';

export default function Capabilities() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'LANGUAGES', 'FRONTEND', 'TOOLS', 'DOMAINS'];

  const filterMap = {
    'LANGUAGES': '01 / PROGRAMMING LANGUAGES',
    'FRONTEND': '02 / FRONTEND DEVELOPMENT',
    'TOOLS': '03 / DEVELOPMENT TOOLS & ENVIRONMENT',
    'DOMAINS': '04 / DOMAINS & SPECIALIZED TECHNOLOGIES'
  };

  const filteredData = activeCategory === 'ALL'
    ? capabilitiesData
    : capabilitiesData.filter(c => c.category === filterMap[activeCategory]);

  return (
    <section id="capabilities" className="py-24 md:py-32 hairline-b bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 hairline-b mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#6F6C65] uppercase tracking-widest mb-3">
              <span>02 / TECHNICAL INDEX</span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span>SKILLS & STACK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#F4F1EA] uppercase tracking-tight">
              CAPABILITIES
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 hairline-border transition-colors uppercase ${
                  activeCategory === cat
                    ? 'bg-[#F4F1EA] text-[#0B0B0B] font-bold'
                    : 'bg-[#121212] text-[#A6A39C] hover:text-[#F4F1EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((group, gIdx) => (
            <div key={gIdx} className="bg-[#121212] hairline-border p-8 space-y-6">
              <div className="pb-4 hairline-b">
                <h3 className="text-xs font-mono text-[#D8D1C3] tracking-widest uppercase font-semibold mb-1">
                  {group.category}
                </h3>
                <p className="text-xs font-sans text-[#6F6C65]">
                  {group.description}
                </p>
              </div>

              <div className="space-y-4">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="p-4 bg-[#181818] hairline-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#D8D1C3]/40 transition-colors">
                    <span className="text-sm font-mono font-bold text-[#F4F1EA] group-hover:text-[#D8D1C3]">
                      {item.name}
                    </span>
                    <span className="text-xs font-sans text-[#A6A39C] max-w-xs text-left sm:text-right">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="mt-12 p-6 bg-[#121212] hairline-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6A39C]">
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-[#D8D1C3]" />
            <span>PRACTICAL ENGINEERING PHILOSOPHY: TOOLS ADAPT TO PURPOSE, NOT BUZZWORDS.</span>
          </div>
          <span className="text-[#6F6C65]">NO SYNTHETIC RATING BARS · ALL SKILLS DRIVEN BY REAL PROJECTS</span>
        </div>

      </div>
    </section>
  );
}

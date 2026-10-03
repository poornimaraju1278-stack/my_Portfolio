import React from 'react';
import { ArrowUpRight, Cpu, Layers, Terminal, Activity, FileText, CheckCircle2 } from 'lucide-react';

export default function ProjectCaseStudy({ project, onSelectProject }) {
  return (
    <article className="group relative bg-[#121212] hairline-border p-8 md:p-12 hover:border-[#D8D1C3]/60 transition-all duration-300">
      
      {/* Top Bar: Index & Category */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 hairline-b mb-8 text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-display font-extrabold text-[#D8D1C3]">
            {project.number}
          </span>
          <span className="text-[#6F6C65]">/ 03</span>
        </div>
        
        <div className="px-3 py-1 bg-[#181818] hairline-border text-[#A6A39C] uppercase tracking-widest text-[11px]">
          {project.category}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Narrative details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#F4F1EA] group-hover:text-[#D8D1C3] transition-colors leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-[#A6A39C] tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {/* Problem & Concept Summary */}
          <div className="space-y-4 text-sm font-sans text-[#A6A39C] leading-relaxed">
            <div className="p-4 bg-[#181818] hairline-border border-l-2 border-l-[#D8D1C3]">
              <span className="block text-xs font-mono uppercase text-[#F4F1EA] mb-1 font-semibold">
                PROBLEM
              </span>
              <p className="text-xs text-[#A6A39C]">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <span className="block text-xs font-mono uppercase text-[#F4F1EA] mb-1 font-semibold">
                CONCEPT & APPROACH
              </span>
              <p>
                {project.conceptSummary}
              </p>
            </div>
          </div>

          {/* Technology Pills */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-widest text-[#6F6C65] mb-3">
              STACK & TOOLS
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#181818] hairline-border text-xs font-mono text-[#D8D1C3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action to view complete case study modal */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#181818] text-[#F4F1EA] hairline-border font-mono text-xs font-semibold uppercase tracking-widest hover:bg-[#F4F1EA] hover:text-[#0B0B0B] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D8D1C3]"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Visual Mock / Schema Diagram */}
        <div className="lg:col-span-5 bg-[#0B0B0B] hairline-border p-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#6F6C65] uppercase pb-3 hairline-b mb-4">
              <span className="flex items-center gap-2">
                <Layers size={14} className="text-[#D8D1C3]" /> ARCHITECTURE SCHEMA
              </span>
              <span className="text-[10px] text-[#A6A39C] bg-[#181818] px-2 py-0.5 border border-[#292929]">
                {project.visualMock.badge}
              </span>
            </div>

            {/* Architecture Node Workflow */}
            <div className="space-y-3 my-4">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-3 bg-[#121212] hairline-border flex items-start gap-3">
                  <span className="text-[10px] font-mono text-[#D8D1C3] bg-[#181818] px-1.5 py-0.5 border border-[#292929] shrink-0">
                    {arch.step.split('.')[0]}
                  </span>
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-[#F4F1EA]">
                      {arch.title}
                    </h4>
                    <p className="text-[11px] font-sans text-[#6F6C65] leading-tight mt-0.5">
                      {arch.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metric Indicators */}
          <div className="pt-4 hairline-t grid grid-cols-3 gap-2">
            {project.visualMock.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#121212] p-2 text-center hairline-border">
                <span className="block text-[9px] font-mono text-[#6F6C65] uppercase truncate">
                  {m.label}
                </span>
                <span className="block text-xs font-mono text-[#D8D1C3] font-medium truncate mt-1">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </article>
  );
}

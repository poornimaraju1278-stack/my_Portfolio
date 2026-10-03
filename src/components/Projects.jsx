import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
import { Sparkles } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'AI / ML', 'PYTHON', 'VISION & IOT'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#0D1220]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl transition-all uppercase tracking-wider ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] font-bold shadow-md shadow-[#38BDF8]/20'
                    : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

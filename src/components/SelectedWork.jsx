import React from 'react';
import ProjectCaseStudy from './ProjectCaseStudy';
import { projectsData } from '../data/projects';

export default function SelectedWork({ onSelectProject }) {
  return (
    <section id="work" className="py-24 md:py-32 hairline-b relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 hairline-b mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#6F6C65] uppercase tracking-widest mb-3">
              <span>01 / CASE STUDIES</span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#F4F1EA] uppercase tracking-tight">
              SELECTED WORK
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#A6A39C] leading-relaxed">
            In-depth case studies detailing problem definitions, architectural concepts, visual previews, and applied technologies.
          </p>
        </div>

        {/* Case Study Cards Stack */}
        <div className="space-y-16">
          {projectsData.map((project) => (
            <ProjectCaseStudy
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

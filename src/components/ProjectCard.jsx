import React from 'react';
import { ArrowUpRight, ShieldAlert, Calendar, Eye, Layers, Cpu, Activity, MapPin } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article 
      onClick={() => onSelectProject(project)}
      className="group cursor-pointer glass-panel rounded-2xl p-6 md:p-8 space-y-6 hover:border-[#38BDF8]/50 hover:shadow-2xl hover:shadow-[#38BDF8]/5 transition-all duration-300 gradient-border-hover relative overflow-hidden"
    >
      
      {/* Top Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-display font-extrabold text-[#38BDF8]">
            {project.number}
          </span>
          <span className="text-[#94A3B8]">/ 03</span>
        </div>

        <span className="px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#8B5CF6] uppercase tracking-wider font-semibold text-[11px]">
          {project.category}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#94A3B8]">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
            "{project.description}"
          </p>

          {/* Technology Badges */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0D1220] border border-slate-800 text-xs font-mono text-[#F8FAFC] group-hover:border-[#38BDF8]/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2 flex items-center gap-3 text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Right Custom Visual Representation */}
        <div className="lg:col-span-5 bg-[#0D1220] rounded-xl border border-slate-800 p-5 group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden min-h-[200px] flex flex-col justify-between">
          
          {/* Project 01: Environmental Risk Map Preview */}
          {project.visualType === 'risk_map' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-[#38BDF8]">
                  <ShieldAlert size={14} /> TERRAIN RISK CONTOUR
                </span>
                <span className="text-emerald-400">MONITORING ACTIVE</span>
              </div>

              {/* Simulated Map Visual Nodes */}
              <div className="h-28 rounded-lg bg-[#070B14] border border-slate-800 p-3 relative flex items-center justify-center overflow-hidden">
                {/* SVG Contour lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 text-[#38BDF8]" fill="none">
                  <path d="M0 20 Q 50 80, 100 30 T 200 60 T 300 20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 60 Q 70 10, 140 70 T 260 40 T 360 80" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                {/* Risk Nodes */}
                <div className="relative z-10 flex items-center justify-around w-full text-xs font-mono">
                  <div className="p-2 rounded bg-rose-500/20 border border-rose-500/50 text-rose-300 text-[10px]">
                    <MapPin size={12} className="inline mr-1" /> Zone A: High Risk
                  </div>
                  <div className="p-2 rounded bg-amber-500/20 border border-amber-500/50 text-amber-300 text-[10px]">
                    <Activity size={12} className="inline mr-1" /> Telemetry Stream
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project 02: Planner Matrix Grid Preview */}
          {project.visualType === 'planner_grid' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-[#8B5CF6]">
                  <Calendar size={14} /> HEURISTIC ROUTINE MATRIX
                </span>
                <span className="text-[#38BDF8]">PYTHON ENGINE</span>
              </div>

              {/* Simulated Planner Blocks */}
              <div className="space-y-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-[#111827] border border-slate-800 flex items-center justify-between">
                  <span className="text-[#F8FAFC]">08:00 AM · High-Energy Focus Block</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8]">Optimized</span>
                </div>
                <div className="p-2 rounded bg-[#111827] border border-slate-800 flex items-center justify-between">
                  <span className="text-[#F8FAFC]">02:00 PM · Habit Consistency Check</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#8B5CF6]/20 text-[#8B5CF6]">Streak Active</span>
                </div>
              </div>
            </div>
          )}

          {/* Project 03: Camera Bounding Box Frame Preview */}
          {project.visualType === 'vision_frame' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-[#38BDF8]">
                  <Eye size={14} /> CAMERA BOUNDING OVERLAY
                </span>
                <span className="text-amber-400">YOLO / OPENCV</span>
              </div>

              {/* Camera Frame Simulation */}
              <div className="h-28 rounded-lg bg-[#070B14] border border-slate-800 p-3 relative flex items-center justify-center">
                <div className="w-32 h-20 rounded border-2 border-dashed border-rose-500/80 bg-rose-500/10 flex flex-col items-center justify-center text-[10px] font-mono text-rose-300">
                  <span>SMARTPHONE DETECTED</span>
                  <span className="text-[9px] text-[#94A3B8]">Conf: 94.8% | &gt; 3.0s</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 text-[10px] font-mono text-[#94A3B8] text-right">
            <span>PROTOTYPE SPECIFICATION</span>
          </div>

        </div>

      </div>
    </article>
  );
}

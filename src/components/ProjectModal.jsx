import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Sparkles, Layers, ShieldAlert, Cpu, Terminal } from 'lucide-react';
import ArchitectureVisualizer from './ArchitectureVisualizer';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('PROBLEM');

  const tabs = ['PROBLEM', 'SOLUTION', 'TECHNOLOGY', 'ARCHITECTURE', 'CURRENT STATE'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#070B14]/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-2xl border border-slate-800 overflow-y-auto p-6 md:p-10 text-[#F8FAFC] shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#0D1220] border border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            <Sparkles size={14} className="text-[#8B5CF6]" />
            <span>INTERACTIVE PROJECT EXPLORER</span>
            <span>·</span>
            <span className="text-[#94A3B8]">{project.categoryTag}</span>
          </div>

          <h2 id="modal-title" className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8FAFC] leading-tight">
            {project.title}
          </h2>

          <p className="text-sm font-mono text-[#38BDF8]">
            {project.subtitle}
          </p>
        </div>

        {/* 5 Explorer Tabs Bar */}
        <div className="flex flex-wrap gap-2 text-xs font-mono border-b border-slate-800 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl transition-all font-bold uppercase tracking-wider ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] shadow-md shadow-[#38BDF8]/20'
                  : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="py-4 space-y-6">
          
          {activeTab === 'PROBLEM' && (
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800 space-y-3 animate-fadeIn">
              <h3 className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                01. PROBLEM DEFINITION
              </h3>
              <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                "{project.problemStatement}"
              </p>
            </div>
          )}

          {activeTab === 'SOLUTION' && (
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800 space-y-3 animate-fadeIn">
              <h3 className="text-xs font-mono text-[#8B5CF6] uppercase font-bold tracking-wider">
                02. CONCEPT & SOLUTION APPROACH
              </h3>
              <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                "{project.approach}"
              </p>
            </div>
          )}

          {activeTab === 'TECHNOLOGY' && (
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800 space-y-4 animate-fadeIn">
              <h3 className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                03. TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-[#070B14] border border-slate-800 text-xs font-mono text-[#F8FAFC] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ARCHITECTURE' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                  04. ARCHITECTURE STEPS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.architecture.map((arch) => (
                    <div key={arch.step} className="p-4 rounded-xl bg-[#0D1220] border border-slate-800 space-y-2">
                      <span className="text-xs font-mono text-[#38BDF8] font-bold">
                        {arch.step}
                      </span>
                      <h4 className="text-xs font-mono font-semibold text-[#F8FAFC]">
                        {arch.title}
                      </h4>
                      <p className="text-[11px] font-sans text-[#94A3B8] leading-relaxed">
                        {arch.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Architecture Visualizer for BhoomiRakshak AI */}
              {project.id === 'bhoomirakshak-ai' && <ArchitectureVisualizer />}
            </div>
          )}

          {activeTab === 'CURRENT STATE' && (
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800 space-y-3 animate-fadeIn">
              <h3 className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                05. CURRENT STATE & PROTOTYPE SCOPE
              </h3>
              <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                "{project.currentState}"
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38BDF8] hover:underline flex items-center gap-1 font-bold"
          >
            <span>View Code on GitHub</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            CLOSE EXPLORER
          </button>
        </div>

      </div>
    </div>
  );
}

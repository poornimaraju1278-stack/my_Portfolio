import React from 'react';
import { GitBranch, GitCommit, ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function GitHubSection() {
  const realGithub = "https://github.com/poornimaraju1278-stack";

  const weeks = Array.from({ length: 24 });
  const days = Array.from({ length: 7 });

  const repos = [
    {
      name: "bhoomirakshak-ai-prototype",
      desc: "AI-based Landslide Risk Monitoring & Early Warning System (FastAPI + React)",
      lang: "Python / React",
      color: "bg-[#38BDF8]"
    },
    {
      name: "routine-recommender-planner",
      desc: "Python intelligent task scheduler & habit tracking engine",
      lang: "Python",
      color: "bg-[#8B5CF6]"
    },
    {
      name: "phone-detection-iot-alert",
      desc: "Computer vision smartphone detection using OpenCV, YOLO & Arduino serial GPIO",
      lang: "C++ / Python",
      color: "bg-[#38BDF8]"
    }
  ];

  return (
    <section id="github" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#0D1220]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>OPEN SOURCE REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              BUILDING IN PUBLIC
            </h2>
          </div>

          <a
            href={realGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] border border-slate-800 text-xs font-mono text-[#F8FAFC] hover:border-[#38BDF8]/50 transition-colors"
          >
            <GithubIcon size={16} />
            <span>VISIT GITHUB PROFILE</span>
            <ArrowUpRight size={14} className="text-[#38BDF8]" />
          </a>
        </div>

        {/* GitHub Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Repositories List */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-[#94A3B8] uppercase block mb-2">
              FEATURED CODE REPOSITORIES
            </span>

            {repos.map((repo, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl glass-panel space-y-3 hover:border-[#38BDF8]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={realGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold hover:underline"
                  >
                    <FolderGit2 size={16} />
                    <span>{repo.name}</span>
                  </a>
                  <span className="text-[10px] font-mono text-[#94A3B8] bg-[#070B14] px-2 py-0.5 rounded border border-slate-800">
                    PUBLIC
                  </span>
                </div>

                <p className="text-xs font-sans text-[#94A3B8]">
                  {repo.desc}
                </p>

                <div className="flex items-center gap-2 text-[11px] font-mono text-[#94A3B8]">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.color}`} />
                  <span>{repo.lang}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Static Developer Activity Map */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <GitCommit size={16} className="text-[#38BDF8]" />
                <span className="text-[#F8FAFC] font-semibold">DEVELOPER COMMIT MAP</span>
              </div>
              <span className="text-[#94A3B8]">ACTIVE CODE COMMITS</span>
            </div>

            {/* Static Activity Grid */}
            <div className="space-y-3">
              <div className="flex gap-1.5 overflow-x-auto pb-2">
                {weeks.map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 shrink-0">
                    {days.map((_, dIdx) => {
                      const active = (wIdx * 7 + dIdx) % 3 === 0 || (wIdx * 7 + dIdx) % 5 === 1;
                      const opacity = active ? ((wIdx + dIdx) % 3 === 0 ? 'bg-[#38BDF8]' : 'bg-[#8B5CF6]') : 'bg-[#111827]';
                      return (
                        <div 
                          key={dIdx}
                          className={`w-3 h-3 rounded-sm ${opacity} transition-all`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-2">
                <span>Less active</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#111827]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#38BDF8]/40" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#38BDF8]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#8B5CF6]" />
                </div>
                <span>More active</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-slate-800 text-xs font-mono text-[#94A3B8] flex items-center justify-between">
              <span>WORKFLOW: GIT / GITHUB REPOSITORIES</span>
              <span className="text-[#38BDF8] font-bold">STRUCTURED COMMITS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Mail, Code2, Terminal, Cpu, GitBranch, Sparkles } from 'lucide-react';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Hero({ onOpenTerminal }) {
  const realEmail = "poornimaraju1278@gmail.com";
  const realGithub = "https://github.com/poornimaraju1278-stack";
  const realLinkedin = "https://www.linkedin.com/in/poornima-r-7b11b4438/";
  const realInstagram = "https://www.instagram.com/poornima06_11/";

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-ambient-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Line */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-slate-800 text-xs font-mono tracking-wider text-[#38BDF8]">
                <Sparkles size={14} className="text-[#8B5CF6]" />
                <span>COMPUTER SCIENCE ENGINEERING · SOFTWARE DEVELOPMENT</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNSHIPS & TECHNICAL OPPORTUNITIES</span>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#F8FAFC] tracking-tight leading-none">
                Poornima R
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#94A3B8] leading-tight">
                Computer Science Engineering Student & Aspiring Software Engineer
              </h2>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg font-sans text-[#94A3B8] max-w-2xl leading-relaxed">
              "Passionate about building practical technology solutions, exploring software development, and continuously improving my problem-solving skills."
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] font-display font-bold text-sm shadow-lg shadow-[#38BDF8]/20 hover:shadow-[#8B5CF6]/30 hover:scale-[1.02] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl glass-card text-[#F8FAFC] font-display font-semibold text-sm hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111827] border border-slate-800 text-[#38BDF8] font-mono text-xs font-bold hover:border-[#38BDF8]/60 hover:bg-[#1E293B] transition-all"
              >
                <Terminal size={16} />
                <span>OPEN TERMINAL</span>
              </button>

              {/* Social Icons Row: Email, GitHub, LinkedIn, Instagram */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${realEmail}`}
                  className="p-3.5 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors"
                  aria-label="Email Me"
                  title={`Email: ${realEmail}`}
                >
                  <Mail size={18} />
                </a>

                <a
                  href={realGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors"
                  aria-label="GitHub Profile"
                  title={`GitHub: ${realGithub}`}
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={realLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                  title={`LinkedIn: ${realLinkedin}`}
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={realInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors"
                  aria-label="Instagram Profile"
                  title={`Instagram: ${realInstagram}`}
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Context Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs font-mono text-[#94A3B8]">
              <div>
                <span className="text-[#38BDF8]">DEGREE:</span> B.Tech CSE (CSE-D) · REVA University
              </div>
              <div>
                <span className="text-emerald-400">EMAIL:</span> {realEmail}
              </div>
            </div>

          </div>

          {/* Right Floating Developer Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#38BDF8]/10 to-[#8B5CF6]/10 blur-2xl -z-10" />

            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>SOFTWARE ENGINEER PROFILE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-slate-700 text-[#38BDF8]">
                  REVA CSE-D
                </span>
              </div>

              {/* Tech Node Cards Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#38BDF8]/40 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[#F8FAFC] font-semibold">React & Web</span>
                    <span className="block text-[10px] text-[#94A3B8]">Modular UI</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#8B5CF6]/40 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <span className="block text-[#F8FAFC] font-semibold">Python</span>
                    <span className="block text-[10px] text-[#94A3B8]">FastAPI & Logic</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#38BDF8]/40 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <span className="block text-[#F8FAFC] font-semibold">AI & Vision</span>
                    <span className="block text-[10px] text-[#94A3B8]">OpenCV / YOLO</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#8B5CF6]/40 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    <GitBranch size={18} />
                  </div>
                  <div>
                    <span className="block text-[#F8FAFC] font-semibold">Git & GitHub</span>
                    <span className="block text-[10px] text-[#94A3B8]">Repository Flow</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#38BDF8]/10 to-[#8B5CF6]/10 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span>REVA University · Bengaluru</span>
                <span className="text-[#38BDF8] font-bold">CSE-D</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

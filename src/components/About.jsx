import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#0D1220]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>PROFILE & IDENTITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              ABOUT ME
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] glass-card px-4 py-2 rounded-lg">
            <MapPin size={14} className="text-[#38BDF8]" />
            <span>BENGALURU, INDIA</span>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg font-sans text-[#94A3B8] leading-relaxed">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
              <p className="text-[#F8FAFC] font-medium leading-relaxed">
                "I’m Poornima R, a Computer Science Engineering student at REVA University, Bengaluru, passionate about software development, problem solving, emerging technologies, and building practical solutions to real-world problems."
              </p>

              <p>
                "I enjoy learning new technologies, working on collaborative projects, exploring AI and software development, and turning ideas into functional applications."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#94A3B8] pt-2">
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-1">
                <span className="text-[#38BDF8] font-bold block uppercase">TECHNICAL FOCUS</span>
                <span>Software Engineering & Web Apps</span>
              </div>
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-1">
                <span className="text-[#8B5CF6] font-bold block uppercase">APPLIED DOMAINS</span>
                <span>AI / ML, Vision & IoT Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Profile Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 text-[#38BDF8]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#F8FAFC]">
                    ACADEMIC PROFILE
                  </h3>
                  <span className="text-xs font-mono text-[#94A3B8]">REVA UNIVERSITY</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 font-mono text-xs font-bold">
                CSE-D
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-[#94A3B8]">NAME</span>
                <span className="text-[#F8FAFC] font-semibold">Poornima R</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-[#94A3B8]">DEGREE</span>
                <span className="text-[#F8FAFC] font-semibold">B.Tech — Computer Science & Engineering</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-[#94A3B8]">UNIVERSITY</span>
                <span className="text-[#F8FAFC]">REVA University, Bengaluru</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-[#94A3B8]">SECTION</span>
                <span className="text-[#38BDF8] font-bold">CSE-D</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-[#94A3B8]">CAREER GOAL</span>
                <span className="text-[#8B5CF6] font-bold">Software Engineer</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1220] border border-slate-800 text-xs font-sans text-[#94A3B8] flex items-start gap-3">
              <Target size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
              <span>Preparing for software engineering placements, internships, hackathons, and technology-driven roles.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

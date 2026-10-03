import React from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#0D1220]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-16 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              EDUCATION
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Formal computer science engineering degree curriculum focusing on software design, algorithms, systems, and practical projects.
          </p>
        </div>

        {/* Education Timeline Node */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10">
          
          <div className="relative group">
            {/* Glowing Timeline Indicator Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-[#38BDF8] shadow-lg shadow-[#38BDF8]/60 animate-pulse" />

            <div className="glass-panel rounded-2xl p-6 md:p-10 space-y-6 hover:border-[#38BDF8]/40 transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="text-[#F8FAFC] font-bold text-sm block">UNDERGRADUATE DEGREE</span>
                    <span className="text-[#94A3B8]">B.TECH COMPUTER SCIENCE & ENGINEERING</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#111827] border border-slate-800 text-[#38BDF8]">
                  <span>SECTION: CSE-D</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F8FAFC]">
                  REVA University
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                  <MapPin size={14} className="text-[#8B5CF6]" />
                  <span>Bengaluru, Karnataka, India</span>
                  <span>·</span>
                  <span>School of Computer Science & Engineering</span>
                </div>
              </div>

              {/* Core Coursework Grid */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="block text-xs font-mono uppercase text-[#94A3B8] mb-4">
                  CORE CSE CURRICULUM & SUBJECT AREAS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#94A3B8]">
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Object-Oriented Programming (Java/C++)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Database Management Systems & SQL</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Operating Systems & Networks</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Software Engineering & Web Apps</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#38BDF8]" />
                    <span>Artificial Intelligence & Machine Learning</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

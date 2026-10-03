import React from 'react';
import { journalData } from '../data/journal';
import { ArrowUpRight, BookOpen, FileCode, Clock } from 'lucide-react';

export default function Journal({ onSelectArticle }) {
  return (
    <section id="journal" className="py-24 md:py-32 hairline-b relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 hairline-b mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#6F6C65] uppercase tracking-widest mb-3">
              <span>05 / TECHNICAL JOURNAL & LOGS</span>
              <span className="w-8 h-[1px] bg-[#292929]" />
              <span>EXPERIMENTS & PROOF OF WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#F4F1EA] uppercase tracking-tight">
              EXPERIMENTS / JOURNAL
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#A6A39C] leading-relaxed">
            Proof of work, architectural reflections, and learning notes covering project development, computer vision, and system engineering.
          </p>
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journalData.map((article) => (
            <article 
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#121212] hairline-border p-8 cursor-pointer hover:border-[#D8D1C3]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#181818] text-[#D8D1C3] hairline-border uppercase tracking-widest text-[11px]">
                    {article.tag}
                  </span>
                  <span className="text-[#6F6C65]">{article.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#F4F1EA] group-hover:text-[#D8D1C3] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs font-sans text-[#A6A39C] leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 hairline-t flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-[#6F6C65] bg-[#181818] px-2 py-0.5 border border-[#292929]">
                  {article.status}
                </span>

                <div className="flex items-center gap-1 text-[#F4F1EA] group-hover:text-[#D8D1C3] font-semibold uppercase tracking-wider">
                  <span>READ NOTE</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import { X, BookOpen, Clock, Tag } from 'lucide-react';

export default function JournalModal({ article, onClose }) {
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

  if (!article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0B0B0B]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-journal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#121212] hairline-border overflow-y-auto p-6 md:p-10 text-[#F4F1EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-[#181818] text-[#A6A39C] hover:text-[#F4F1EA] hairline-border focus:outline-none focus:ring-1 focus:ring-[#D8D1C3]"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-4 pb-6 hairline-b">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2 py-0.5 bg-[#181818] text-[#D8D1C3] hairline-border uppercase">
              {article.tag}
            </span>
            <span className="text-[#6F6C65]">•</span>
            <span className="text-[#A6A39C]">{article.date}</span>
            <span className="text-[#6F6C65]">•</span>
            <span className="text-[#D8D1C3] font-bold">{article.status}</span>
          </div>

          <h2 id="modal-journal-title" className="text-2xl sm:text-4xl font-display font-bold text-[#F4F1EA] leading-tight">
            {article.title}
          </h2>

          <p className="text-sm font-sans text-[#A6A39C] italic">
            "{article.summary}"
          </p>
        </div>

        {/* Article Markdown-style body */}
        <div className="py-8 text-sm font-sans text-[#A6A39C] leading-relaxed space-y-4 whitespace-pre-line border-b border-[#292929]">
          {article.content}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 flex items-center justify-between text-xs font-mono">
          <span className="text-[#6F6C65]">POORNIMA — TECHNICAL JOURNAL</span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#F4F1EA] text-[#0B0B0B] font-bold uppercase tracking-widest hover:bg-[#D8D1C3] transition-colors"
          >
            CLOSE ENTRY
          </button>
        </div>
      </div>
    </div>
  );
}

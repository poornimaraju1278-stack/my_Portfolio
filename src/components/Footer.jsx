import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const realEmail = "poornimaraju1278@gmail.com";
  const realGithub = "https://github.com/poornimaraju1278-stack";
  const realLinkedin = "https://www.linkedin.com/in/poornima-r-7b11b4438/";
  const realInstagram = "https://www.instagram.com/poornima06_11/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] text-[#94A3B8] py-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-[#F8FAFC]">
              POORNIMA R
            </h3>
            <p className="text-xs font-mono text-[#94A3B8]">
              Computer Science Engineer · Aspiring Software Engineer · Bengaluru, India
            </p>
          </div>

          {/* Contact Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a
              href={`mailto:${realEmail}`}
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>

            <a
              href={realGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={realLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href={realInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111827] border border-slate-800 text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} POORNIMA R. ALL RIGHTS RESERVED.
          </div>
          <div>
            REVA UNIVERSITY · B.TECH CSE (CSE-D)
          </div>
        </div>

      </div>
    </footer>
  );
}

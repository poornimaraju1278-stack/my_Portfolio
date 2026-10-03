import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowUpRight, Sparkles, CheckCircle2, Copy } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const SendIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Contact() {
  const realEmail = "poornimaraju1278@gmail.com";
  const realGithub = "https://github.com/poornimaraju1278-stack";
  const realLinkedin = "https://www.linkedin.com/in/poornima-r-7b11b4438/";
  const realInstagram = "https://www.instagram.com/poornima06_11/";

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(realEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-4">
          <Sparkles size={14} className="text-[#8B5CF6]" />
          <span>RECRUITER & DIRECT CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Headline & Contact Details */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-tight leading-none">
              LET'S CONNECT.
            </h2>

            <p className="text-lg sm:text-xl font-display text-[#94A3B8] leading-relaxed">
              "Open to internships, technical opportunities, hackathons, collaborations and interesting software projects."
            </p>

            {/* Email Card with Mailto & Copy */}
            <div className="p-6 rounded-2xl glass-panel space-y-4 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-bold">
                  PRIMARY EMAIL
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  DIRECT CONTACT ACTIVE
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${realEmail}`}
                  className="text-base sm:text-xl font-mono text-[#F8FAFC] font-bold hover:text-[#38BDF8] transition-colors break-all"
                >
                  {realEmail}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-slate-800 text-xs font-mono text-[#F8FAFC] hover:border-[#38BDF8]/40 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-[#38BDF8]" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Link Cards Grid: GitHub, LinkedIn, Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              
              {/* GitHub */}
              <a
                href={realGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between hover:border-[#38BDF8]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon size={20} className="text-[#38BDF8]" />
                  <div>
                    <span className="block font-bold text-[#F8FAFC]">GITHUB</span>
                    <span className="block text-[11px] text-[#94A3B8]">poornimaraju1278-stack</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#94A3B8]" />
              </a>

              {/* LinkedIn */}
              <a
                href={realLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between hover:border-[#38BDF8]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={20} className="text-[#38BDF8]" />
                  <div>
                    <span className="block font-bold text-[#F8FAFC]">LINKEDIN</span>
                    <span className="block text-[11px] text-[#94A3B8]">poornima-r-7b11b4438</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#94A3B8]" />
              </a>

              {/* Instagram */}
              <a
                href={realInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between hover:border-[#38BDF8]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon size={20} className="text-[#8B5CF6]" />
                  <div>
                    <span className="block font-bold text-[#F8FAFC]">INSTAGRAM</span>
                    <span className="block text-[11px] text-[#94A3B8]">poornima06_11</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#94A3B8]" />
              </a>

            </div>

            <div className="p-4 rounded-xl bg-[#0D1220] border border-slate-800 flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
              <MapPin size={16} className="text-[#38BDF8]" />
              <span>LOCATION: Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="pb-4 border-b border-slate-800">
              <h3 className="text-base font-display font-bold text-[#F8FAFC]">
                DIRECT MESSAGE FORM
              </h3>
              <p className="text-xs font-mono text-[#94A3B8] mt-1">
                Send a message directly to Poornima R.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#0D1220] border border-emerald-500/40 text-xs font-mono space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 size={16} />
                  <span>FORM VALIDATED & SIMULATED</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  Thank you for reaching out! Form inputs have been validated. Direct email delivery to {realEmail} can be connected via Formspree or EmailJS.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label htmlFor="user-name" className="block text-[#94A3B8] uppercase mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-slate-800 text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label htmlFor="user-email" className="block text-[#94A3B8] uppercase mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-slate-800 text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label htmlFor="user-message" className="block text-[#94A3B8] uppercase mb-1.5">
                    MESSAGE / OPPORTUNITY SCOPE
                  </label>
                  <textarea
                    id="user-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about internship, hackathon, or collaborative project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-slate-800 text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#38BDF8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#070B14] font-bold uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  <SendIcon size={16} />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

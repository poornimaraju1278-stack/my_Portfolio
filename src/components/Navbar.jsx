import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Circle, Terminal as TerminalIcon } from 'lucide-react';

export default function Navbar({ activeSection, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'DNA', href: '#developer-dna' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Proof', href: '#proof-of-work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand identity */}
        <a 
          href="#home"
          className="group flex items-center gap-3 font-display text-lg font-bold tracking-tight text-[#F8FAFC] hover:text-[#38BDF8] transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] p-[1px]">
            <div className="w-full h-full bg-[#070B14] rounded-[7px] flex items-center justify-center font-display font-bold text-sm text-[#F8FAFC]">
              PR
            </div>
          </div>
          <span>POORNIMA R</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono tracking-wider text-[#94A3B8]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-[#F8FAFC] relative py-1 ${
                activeSection === item.href.replace('#', '') ? 'text-[#38BDF8] font-semibold' : ''
              }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Terminal Trigger & Internship Status */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono text-[#38BDF8] hover:border-[#38BDF8]/60 transition-colors"
          >
            <TerminalIcon size={14} />
            <span>OPEN TERMINAL</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#F8FAFC] glass-card rounded-lg hover:border-[#38BDF8]/40 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#070B14]/95 backdrop-blur-xl border-b border-slate-800/80 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} className="text-[#38BDF8]" />
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-2.5 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono text-[#38BDF8] flex items-center justify-center gap-2"
              >
                <TerminalIcon size={16} />
                <span>LAUNCH INTERACTIVE TERMINAL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

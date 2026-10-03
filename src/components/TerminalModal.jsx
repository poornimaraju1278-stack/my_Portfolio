import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'POORNIMA R — INTERACTIVE DEVELOPER TERMINAL v1.0', type: 'system' },
    { text: 'Type "help" to view list of available commands.', type: 'info' }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${inputVal}`, type: 'cmd' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  whoami    - Display developer identity
  about     - View academic background & university details
  skills    - List programming languages, web tools & domain stack
  projects  - List featured software engineering projects
  github    - Launch Poornima's GitHub profile
  contact   - Display direct recruiter email, LinkedIn & social links
  clear     - Clear terminal buffer
  exit      - Close terminal modal`,
          type: 'response'
        });
        break;

      case 'whoami':
        newHistory.push({
          text: `Poornima R
Computer Science Engineering Student
Aspiring Software Engineer
Location: Bengaluru, Karnataka, India`,
          type: 'response'
        });
        break;

      case 'about':
        newHistory.push({
          text: `Degree: B.Tech — Computer Science and Engineering
University: REVA University, Bengaluru
Section: CSE-D
Career Goal: Software Engineer
Focus: Practical software development, AI models, computer vision & connected systems.`,
          type: 'response'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `CODE: C, C++, Java, Python
BUILD: JavaScript, React, HTML, CSS, Tailwind CSS, FastAPI
CREATE: AI/ML, Computer Vision (OpenCV, YOLO), IoT (Arduino, ESP32)
TOOLS: Git, GitHub, VS Code, GitHub CLI`,
          type: 'response'
        });
        break;

      case 'projects':
        newHistory.push({
          text: `1. BhoomiRakshak AI — AI-Based Landslide Risk Monitoring System (React + FastAPI)
2. Routine Recommender & Productive Planner — Python Productivity Engine
3. Phone Detection & Alert System — Computer Vision + IoT Hardware Alert`,
          type: 'response'
        });
        break;

      case 'github':
        newHistory.push({
          text: `Opening GitHub profile: https://github.com/poornimaraju1278-stack...`,
          type: 'response'
        });
        window.open('https://github.com/poornimaraju1278-stack', '_blank');
        break;

      case 'contact':
        newHistory.push({
          text: `Email: poornimaraju1278@gmail.com
GitHub: https://github.com/poornimaraju1278-stack
LinkedIn: https://www.linkedin.com/in/poornima-r-7b11b4438/
Instagram: https://www.instagram.com/poornima06_11/
Location: Bengaluru, India`,
          type: 'response'
        });
        break;

      case 'clear':
        setHistory([{ text: 'Terminal buffer cleared. Type "help" for commands.', type: 'info' }]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
          type: 'error'
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#070B14]/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terminal-title"
    >
      <div 
        className="relative w-full max-w-3xl h-[520px] bg-[#0A0E17] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#F8FAFC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#111827] px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span id="terminal-title" className="text-[#94A3B8] font-bold flex items-center gap-1.5 ml-2">
              <TerminalIcon size={14} className="text-[#38BDF8]" />
              <span>poornima@digital-house:~</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-colors"
            aria-label="Close terminal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Command Output Buffer */}
        <div 
          className="flex-1 p-5 font-mono text-xs overflow-y-auto space-y-3 bg-[#070B14]"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((h, idx) => (
            <div key={idx} className="space-y-1">
              {h.type === 'cmd' ? (
                <div className="text-[#38BDF8] font-bold">{h.text}</div>
              ) : h.type === 'system' ? (
                <div className="text-[#8B5CF6] font-bold">{h.text}</div>
              ) : h.type === 'error' ? (
                <div className="text-rose-400">{h.text}</div>
              ) : h.type === 'info' ? (
                <div className="text-slate-400">{h.text}</div>
              ) : (
                <pre className="text-[#F8FAFC] font-mono text-xs whitespace-pre-wrap leading-relaxed">{h.text}</pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="bg-[#0D1220] border-t border-slate-800 p-3 flex items-center gap-2 font-mono text-xs">
          <span className="text-[#38BDF8] font-bold shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'whoami', 'projects', 'github')..."
            className="flex-1 bg-transparent text-[#F8FAFC] focus:outline-none placeholder-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-colors"
            aria-label="Execute command"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}

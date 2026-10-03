import React, { useState } from 'react';
import { Sparkles, Brain, PenTool, Code, CheckCircle, RefreshCw } from 'lucide-react';

export default function BuildProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: "01",
      title: "UNDERSTAND",
      icon: Brain,
      summary: "Analyze core problem requirements before selecting tools.",
      detail: "Understand the problem thoroughly, identify constraints, and frame real-world objectives before choosing the technical stack."
    },
    {
      number: "02",
      title: "DESIGN",
      icon: PenTool,
      summary: "Architect data models, interfaces, and component boundaries.",
      detail: "Plan system architecture, data flow, API endpoints, schema definitions, and clean modular component boundaries."
    },
    {
      number: "03",
      title: "BUILD",
      icon: Code,
      summary: "Write clean, modular code following software engineering standards.",
      detail: "Turn the concept into a working implementation using React, Python, or C++ with structured directory organization."
    },
    {
      number: "04",
      title: "TEST",
      icon: CheckCircle,
      summary: "Verify features, debug edge cases, and ensure responsiveness.",
      detail: "Validate component functionality, inspect build logs, test keyboard accessibility, and ensure responsive layout stability."
    },
    {
      number: "05",
      title: "IMPROVE",
      icon: RefreshCw,
      summary: "Iterate based on testing feedback and continuous learning.",
      detail: "Refine user experience, optimize code performance, and incorporate learnings into future engineering iterations."
    }
  ];

  return (
    <section id="build-process" className="py-24 relative border-t border-slate-800/80 bg-[#0D1220]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>ENGINEERING METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8FAFC]">
              BUILD PROCESS
            </h2>
          </div>

          <p className="max-w-md text-xs font-mono text-[#94A3B8]">
            Structured 5-step methodology applied across software projects, from problem formulation to iterative improvement.
          </p>
        </div>

        {/* 5-Step Process Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.title}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`group p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#111827] border-[#38BDF8] shadow-xl shadow-[#38BDF8]/10 scale-[1.02]'
                    : 'glass-card border-slate-800 hover:border-[#38BDF8]/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className={`font-extrabold ${isActive ? 'text-[#38BDF8]' : 'text-slate-500'}`}>
                      {step.number}
                    </span>
                    <IconComp size={18} className={isActive ? 'text-[#38BDF8]' : 'text-slate-400'} />
                  </div>

                  <h3 className={`text-base font-display font-bold tracking-wider ${isActive ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'}`}>
                    {step.title}
                  </h3>

                  <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Explanation Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-[#070B14] border border-slate-800 text-xs font-mono space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between text-[#38BDF8] font-bold uppercase">
            <span>STEP {processSteps[activeStep].number}: {processSteps[activeStep].title} METHODOLOGY</span>
            <span className="text-[#8B5CF6]">PRACTICAL APPROACH</span>
          </div>
          <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
            "{processSteps[activeStep].detail}"
          </p>
        </div>

      </div>
    </section>
  );
}

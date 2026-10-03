import React, { useState } from 'react';
import { Layers, Database, Cpu, ShieldAlert, Bell, LayoutDashboard, ArrowRight, Sparkles } from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "sensors",
      title: "01. Environmental & Sensor Data",
      shortTitle: "Data Ingestion",
      icon: Database,
      desc: "Ingests GIS spatial coordinates, rainfall telemetry, and ground moisture sensor feeds.",
      tech: "GIS + Weather APIs + IoT Sensors"
    },
    {
      id: "processing",
      title: "02. Data Processing",
      shortTitle: "Data Normalization",
      icon: Layers,
      desc: "Normalizes heterogeneous sensor telemetry and structures incoming payload streams.",
      tech: "Python Async Stream Parser"
    },
    {
      id: "analysis",
      title: "03. Risk Analysis",
      shortTitle: "Model Evaluation",
      icon: Cpu,
      desc: "Evaluates environmental parameters against slope stability models in FastAPI.",
      tech: "FastAPI Engine"
    },
    {
      id: "detection",
      title: "04. Risk Detection",
      shortTitle: "Threat Classification",
      icon: ShieldAlert,
      desc: "Classifies threat levels into Low, Elevated, or Critical risk categories.",
      tech: "Risk Threshold Matrix"
    },
    {
      id: "alerts",
      title: "05. Automated Alerts",
      shortTitle: "Warning Dispatch",
      icon: Bell,
      desc: "Triggers automated warning notifications when risk indices exceed safe thresholds.",
      tech: "Alert Broadcast Pipeline"
    },
    {
      id: "dashboard",
      title: "06. Dashboard / Response",
      shortTitle: "Emergency Interface",
      icon: LayoutDashboard,
      desc: "Renders spatial risk heatmaps and supports emergency response coordination.",
      tech: "React Real-Time UI"
    }
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6 border border-slate-800 my-6">
      
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#38BDF8]" />
          <span className="text-[#F8FAFC] font-bold">BHOOMIRAKSHAK AI — SYSTEM ARCHITECTURE VISUALIZER</span>
        </div>
        <span className="text-[#38BDF8] bg-[#070B14] px-2.5 py-1 rounded border border-slate-800">
          INTERACTIVE DATA FLOW
        </span>
      </div>

      {/* Nodes Flow Map */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          const isActive = activeStep === idx;

          return (
            <div
              key={step.id}
              onMouseEnter={() => setActiveStep(idx)}
              onClick={() => setActiveStep(idx)}
              className={`group p-4 rounded-xl cursor-pointer border transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#111827] border-[#38BDF8] shadow-lg shadow-[#38BDF8]/10 scale-[1.03]'
                  : 'bg-[#0D1220] border-slate-800 hover:border-[#38BDF8]/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className={`text-[11px] font-bold ${isActive ? 'text-[#38BDF8]' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <IconComp size={16} className={isActive ? 'text-[#38BDF8]' : 'text-slate-400'} />
              </div>

              <div className="space-y-1">
                <h4 className={`text-xs font-mono font-bold ${isActive ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'}`}>
                  {step.shortTitle}
                </h4>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 z-10 pointer-events-none text-slate-700">
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Step Details Banner */}
      <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-2 text-xs font-mono animate-fadeIn">
        <div className="flex items-center justify-between text-[#38BDF8]">
          <span className="font-bold uppercase">{steps[activeStep].title}</span>
          <span className="text-[#8B5CF6] text-[11px]">{steps[activeStep].tech}</span>
        </div>
        <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
          "{steps[activeStep].desc}"
        </p>
      </div>

    </div>
  );
}

"use client";

import { Search, Compass, Sparkles, TrendingUp } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Market Insights",
      desc: "Deep dive into your industry ecosystem, competitor landscapes, target buyer personas, and current digital funnel bottlenecks.",
    },
    {
      num: "02",
      icon: Compass,
      title: "Brand Strategy & Positioning",
      desc: "Architecting a unique brand narrative, core visual aesthetics, messaging hierarchy, and tailored campaign roadmaps.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Creative Graphic Production",
      desc: "Crafting high-converting ad creatives, scroll-stopping social graphic packages, and memorable visual collateral.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Execution, Analytics & Scaling",
      desc: "Launching performance campaigns, monitoring real-time engagement data, and iteratively optimizing for maximum ROI.",
    },
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative overflow-hidden">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201a18] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Strategic Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            How Strategy Meets <span className="coral-text-vintage inline-block">Creativity</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/70 font-sans">
            A battle-tested 4-step execution framework engineered to deliver consistent growth and standout branding.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-3xl bg-white/80 p-6 border-2 border-[#201a18] shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-display-vintage coral-text-vintage">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#201a18] text-white flex items-center justify-center border border-[#201a18]">
                      <Icon className="w-6 h-6 text-[#ee4b56]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#201a18] font-sans mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#201a18]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#201a18]/10 flex items-center justify-between text-xs font-bold text-[#ee4b56] uppercase tracking-wider">
                  <span>Phase {step.num}</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

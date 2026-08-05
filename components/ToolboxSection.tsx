"use client";

import { Wrench, Palette, Megaphone, Lightbulb, GraduationCap, Award, BookOpen, Quote, CheckCircle2 } from "lucide-react";

export default function ToolboxSection() {
  const designSkills = [
    "Brand Identity",
    "Social Media Design",
    "Typography",
    "Layout Design",
    "Visual Storytelling",
    "Creative Direction",
    "Presentation Design",
  ];

  const digitalMarketingPlatforms = [
    "Google Ads (Learning)",
    "Meta Ads (Learning)",
    "LinkedIn Ads (Learning)",
    "Email Marketing",
    "Content Strategy",
    "SEO Fundamentals",
    "CRM Management",
  ];

  const marketingSkills = [
    "Brand Management",
    "Marketing Research",
    "Content Creation",
    "Campaign Planning",
    "Social Media Marketing",
    "Audience Understanding",
    "Creative Problem Solving",
  ];

  const certifications = [
    { title: "HubSpot Marketing Hub Certification", provider: "HubSpot Academy", badge: "Certified" },
    { title: "Digital Marketing Learning Programs", provider: "Professional Growth", badge: "Completed" },
    { title: "Adobe Photoshop Beginner Course", provider: "Design Foundations", badge: "Coursework" },
  ];

  return (
    <section id="toolbox" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f3eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Capabilities &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            MY <span className="coral-text-vintage inline-block">TOOLBOX</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/80 font-sans">
            A collection of tools, skills, and strategic mindsets I use to bring ideas to life.
          </p>
        </div>

        {/* TOOLBOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* DESIGN CARD */}
          <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-card-hover p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ee4b56] text-white flex items-center justify-center border border-[#201a18]">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#201a18] font-sans">DESIGN</h3>
                    <p className="text-xs text-[#ee4b56] font-bold">Visual &amp; Brand Aesthetics</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4ed] text-[#201a18] border border-[#201a18]/15">
                  Core Area
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Primary Tool:</span>
                <div className="flex">
                  <span className="px-3 py-1.5 rounded-xl bg-[#201a18] text-white font-bold text-xs shadow-sm">
                    Canva
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Core Skills:</span>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-semibold text-[#201a18]">
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#201a18]/10 text-xs font-bold text-[#ee4b56]">
              Design &amp; Visual Storytelling
            </div>
          </div>

          {/* DIGITAL MARKETING CARD */}
          <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-card-hover p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#201a18] text-white flex items-center justify-center border border-[#201a18]">
                    <Megaphone className="w-6 h-6 text-[#ee4b56]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#201a18] font-sans">DIGITAL MARKETING</h3>
                    <p className="text-xs text-[#201a18]/70 font-bold">Tools &amp; Platforms</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4ed] text-[#201a18] border border-[#201a18]/15">
                  Growth &amp; CRM
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Marketing Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["HubSpot CRM", "Mailchimp", "ContentPace"].map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-[#ee4b56] text-white font-bold text-xs shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Platforms &amp; Concepts:</span>
                <div className="flex flex-wrap gap-2">
                  {digitalMarketingPlatforms.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-semibold text-[#201a18]">
                      • {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#201a18]/10 text-xs font-bold text-[#201a18]">
              Automated Workflows &amp; Funnels
            </div>
          </div>

          {/* MARKETING SKILLS CARD */}
          <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-card-hover p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ee4b56] text-white flex items-center justify-center border border-[#201a18]">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#201a18] font-sans">MARKETING SKILLS</h3>
                    <p className="text-xs text-[#ee4b56] font-bold">Strategic Competencies</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4ed] text-[#201a18] border border-[#201a18]/15">
                  Strategy
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Core Expertise:</span>
                <div className="flex flex-wrap gap-2">
                  {marketingSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-semibold text-[#201a18]">
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#201a18]/10 text-xs font-bold text-[#ee4b56]">
              Creative Problem Solving
            </div>
          </div>

        </div>

        {/* CERTIFICATIONS & LEARNING SECTION */}
        <div id="certifications" className="rounded-3xl bg-white border-2 border-[#201a18] shadow-2xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#201a18]/10 pb-6">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#201a18] text-white uppercase">
                Professional Growth
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#201a18] font-display-vintage mt-2">
                CERTIFICATIONS &amp; LEARNING
              </h3>
              <p className="text-sm italic font-serif-vintage text-[#201a18]/70">
                &ldquo;Continuous learning has been an important part of my journey.&rdquo;
              </p>
            </div>
            <GraduationCap className="w-10 h-10 text-[#ee4b56]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#ee4b56] text-white">
                    {cert.badge}
                  </span>
                  <h4 className="text-base font-black text-[#201a18] font-sans">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#201a18]/70 font-medium">
                    {cert.provider}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#ee4b56]">
                  <CheckCircle2 className="w-4 h-4" /> Verified Credentials
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESIGN PHILOSOPHY SECTION */}
        <div id="philosophy" className="rounded-3xl bg-[#201a18] text-white border-2 border-[#201a18] shadow-2xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Quote className="w-48 h-48 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest">
              Core Belief
            </span>

            <h3 className="text-2xl sm:text-4xl font-black font-display-vintage text-white">
              DESIGN PHILOSOPHY
            </h3>

            <p className="text-2xl sm:text-3xl font-serif-vintage italic text-[#ee4b56] leading-snug">
              &ldquo;Design should communicate before it decorates.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans pt-2">
              I believe meaningful design starts with understanding people, their needs and the message a brand wants to share. Every colour, layout and visual element has a purpose. Whether creating a brand identity, social media content or marketing creative, my goal is to create designs that are simple, intentional and memorable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

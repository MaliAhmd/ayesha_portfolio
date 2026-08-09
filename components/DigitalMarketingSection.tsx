"use client";

import { Sparkles, CheckCircle2, Building2, Calendar, Wrench, ChevronRight, Layers, Layout, Mail, FileText, Check, ArrowRight, Film, Play, Image as ImageIcon, Presentation, ExternalLink, FolderOpen } from "lucide-react";

export default function DigitalMarketingSection() {
  const contributions = [
    "Brand Naming",
    "Brand Positioning",
    "Website Sitemap",
    "Website Content",
    "Blog Content Planning",
    "30-Day Content Calendar",
    "Email Marketing Workflow",
    "HubSpot CRM Setup",
  ];

  const deliverables = [
    "Brand Naming",
    "Brand Positioning",
    "Website Sitemap",
    "Website Content",
    "Blog Content Planning",
    "30-Day Content Calendar",
    "Email Marketing Workflow",
    "HubSpot CRM Setup",
  ];

  return (
    <section id="digital-marketing" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative overflow-hidden">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            DIGITAL MARKETING
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/70 font-sans">
            Hands-on experience in content workflows, brand building, email automation, and digital strategy.
          </p>
        </div>

        {/* INTERNSHIP HIGHLIGHT BANNER */}
        <div className="rounded-3xl p-8 bg-white border-2 border-[#201a18] shadow-card-hover flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#ee4b56] text-white font-bold text-xs uppercase">
                Digital Marketing Intern
              </span>
              <span className="text-xs font-bold text-[#201a18]/60 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ee4b56]" /> June 2025 – August 2025
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#201a18] font-display-vintage">
              LANTROTECH
            </h3>
            <p className="text-sm text-[#201a18]/80 max-w-2xl">
              Hands-on experience with digital marketing tools, content workflows and branding projects collaborating with MarCom &amp; design Team.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-bold text-[#201a18]">
              HubSpot CRM
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-bold text-[#201a18]">
              Mailchimp
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#f7f4ed] border border-[#201a18]/15 text-xs font-bold text-[#201a18]">
              ContentPace
            </span>
          </div>
        </div>

        {/* FEATURED PROJECT: INTELLECTRA */}
        <div id="intellectra" className="rounded-3xl p-5 sm:p-8 lg:p-12 bg-white border-2 border-[#201a18] shadow-2xl space-y-8 sm:space-y-12">
          
          {/* Project Title Block */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-[#201a18]/10 pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] text-xs font-bold uppercase tracking-wider">
                Featured Project
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
                INTELLECTRA
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#ee4b56] uppercase tracking-wide">
                Engineering Consultancy • Branding • Website Content • Content Strategy
              </p>
              <p className="text-sm italic font-serif-vintage text-[#201a18]/70">
                &ldquo;Building a professional brand from the ground up.&rdquo;
              </p>
              <p className="text-xs font-bold text-[#201a18]/60">
                Completed during my Digital Marketing Internship at LantroTech
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 w-full lg:w-80 shrink-0 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60 block">Brand Marks</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-white rounded-xl border border-[#201a18]/15 p-2 flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="/Logo/logo1.jpeg" alt="Intellectra Logo 1" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-16 bg-white rounded-xl border border-[#201a18]/15 p-2 flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="/Logo/logo2.jpeg" alt="Intellectra Logo 2" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
              <div className="border-t border-[#201a18]/10 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#201a18]/60">Primary Tools</span>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["Canva", "Mailchimp", "HubSpot CRM", "ContentPace"].map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-white border border-[#201a18]/20 text-[10px] font-bold text-[#201a18]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="w-full space-y-3 p-5 sm:p-6 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/10">
            <h4 className="text-base sm:text-lg font-black text-[#201a18] uppercase tracking-wider font-sans">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-[#201a18]/80 leading-relaxed">
              Developed during my internship at LantroTech, <strong>Intellectra</strong> was a branding project focused on establishing a professional identity and digital presence for an engineering consultancy specializing in estimation and design services.
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#201a18] text-white space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ee4b56]">
              Project Deliverables Checklist:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#ee4b56] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INTELLECTRA SLIDES & STRATEGY DECK */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#201a18] text-white border-2 border-[#201a18] shadow-card-hover flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-wider">
                <Presentation className="w-3.5 h-3.5" /> Presentation Deck
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-display-vintage text-white">
                INTELLECTRA PRESENTATION SLIDES
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-sans max-w-xl">
                Access the official slide deck outlining brand strategy, sitemap structure, typography guidelines, and digital marketing execution.
              </p>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1jPi585-W7vMLbWJwRdNZyGRYHynKLZJx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ee4b56] text-white hover:bg-[#d32f3a] font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 border-2 border-[#201a18] shrink-0 transform hover:-translate-y-0.5"
            >
              <span>Open in Google Drive</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>          {/* INTELLECTRA PROMO REEL SHOWCASE */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#201a18] text-white border-2 border-[#201a18] shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-wider">
                  <Film className="w-3.5 h-3.5" /> Featured Video Reel
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-display-vintage text-white">
                  INTELLECTRA PROMO REEL
                </h4>
                <p className="text-xs text-white/70">
                  Short promotional video reel created to showcase Intellectra brand identity and digital presence.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border-2 border-[#ee4b56] shadow-2xl bg-black relative">
                <video
                  src="/reel/short_reel.mp4"
                  controls
                  controlsList="nodownload"
                  playsInline
                  className="w-full max-h-[460px] object-contain mx-auto"
                />
              </div>
            </div>
          </div>

        </div>

        {/* INTERNSHIP EXPOSURE & TOOLBOX EXPOSURE */}
        {/* TOOLS & PLATFORMS */}
        <div className="rounded-3xl p-8 bg-white border-2 border-[#201a18] shadow-card-hover space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Worked With */}
            <div className="p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ee4b56]">
                Tools Worked With:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Mailchimp", "HubSpot CRM", "SEMrush", "ContentPace"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-xl bg-white border border-[#201a18]/20 text-xs font-bold text-[#201a18] shadow-sm">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Explored */}
            <div className="p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]">
                Concepts &amp; Platforms Explored:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO Fundamentals", "AI Tools for Marketing"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-xl bg-[#201a18] text-white text-xs font-bold shadow-sm">
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

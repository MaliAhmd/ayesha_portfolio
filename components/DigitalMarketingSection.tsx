"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Building2, Calendar, Wrench, ChevronRight, Layers, Layout, Mail, FileText, Check, ArrowRight, Film, Play, Image as ImageIcon } from "lucide-react";

export default function DigitalMarketingSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const showcaseItems = [
    {
      id: "logo",
      title: "1. Brand Logo",
      subtitle: "Custom Engineering Consultancy Emblem & Wordmark",
      desc: "Designed a clean, modern aesthetic reflecting precision engineering, estimation accuracy, and strategic consultancy.",
      visualType: "logo",
    },
    {
      id: "color",
      title: "2. Color Palette",
      subtitle: "Corporate Navy, Precision Teal & Architectural Cream",
      desc: "Curated a trustworthy color system engineered to build authority with B2B enterprise clients.",
      visualType: "color",
    },
    {
      id: "typography",
      title: "3. Typography",
      subtitle: "Editorial Serif & Clean Technical Sans Pairings",
      desc: "Selected robust font hierarchies for clear technical communication and professional documentation.",
      visualType: "typography",
    },
    {
      id: "card",
      title: "4. Business Card Mockup",
      subtitle: "Double-sided Minimalist Executive Cards",
      desc: "Premium tactile card layout showcasing engineering credentials, contact details, and brand mark.",
      visualType: "card",
    },
    {
      id: "letterhead",
      title: "5. Letterhead",
      subtitle: "Official Consultancy Document Template",
      desc: "Formal corporate letterhead header and footer styling for client proposals and estimation reports.",
      visualType: "letterhead",
    },
    {
      id: "homepage",
      title: "6. Website Homepage",
      subtitle: "High-Converting Consultancy Landing Page",
      desc: "Structured homepage layout featuring value propositions, service highlights, and CTA lead forms.",
      visualType: "homepage",
    },
    {
      id: "innerpages",
      title: "7. Website Inner Pages",
      subtitle: "Services, Estimation Process & About Pages",
      desc: "Structured internal sitemap architecture and comprehensive copywriting for specialized engineering services.",
      visualType: "innerpages",
    },
    {
      id: "calendar",
      title: "8. Content Calendar",
      subtitle: "30-Day Multi-Channel Content Execution Plan",
      desc: "Strategic monthly calendar scheduling educational posts, industry insights, and client case studies.",
      visualType: "calendar",
    },
    {
      id: "email",
      title: "9. Email Marketing Flow",
      subtitle: "HubSpot Automated Lead Nurturing Sequence",
      desc: "Crafted automated email workflows to nurture engineering leads from inquiry to client consultation.",
      visualType: "email",
    },
  ];

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

          {/* PROJECT SHOWCASE (EXACT ORDER REQUESTED) */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#201a18]/10 pb-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-[#201a18] font-display-vintage">
                  Project Showcase Flow
                </h4>
                <p className="text-xs text-[#201a18]/60 font-semibold">
                  Click through the sequence below to view each deliverable mockup.
                </p>
              </div>
              <span className="text-xs font-bold text-[#ee4b56] px-3 py-1 rounded-full bg-[#ee4b56]/10 border border-[#ee4b56]/20 self-start sm:self-auto">
                Step {activeTab + 1} of {showcaseItems.length}
              </span>
            </div>

            {/* Showcase Tab Controls */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border-2 shrink-0 ${
                    activeTab === idx
                      ? "bg-[#ee4b56] text-white border-[#201a18] shadow-md"
                      : "bg-[#f7f4ed] text-[#201a18] border-[#201a18]/15 hover:border-[#201a18]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Showcase Display Screen */}
            <div className="relative rounded-3xl p-6 sm:p-10 bg-[#f7f4ed] border-2 border-[#201a18] shadow-inner space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#201a18]/15 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#ee4b56] uppercase tracking-wider">
                    Deliverable {activeTab + 1}
                  </span>
                  <h5 className="text-xl sm:text-2xl font-black text-[#201a18] font-sans">
                    {showcaseItems[activeTab].title.replace(/^\d+\.\s*/, '')}
                  </h5>
                  <p className="text-xs sm:text-sm text-[#201a18]/70 mt-0.5">
                    {showcaseItems[activeTab].subtitle}
                  </p>
                </div>
                <p className="text-xs text-[#201a18]/80 max-w-sm">
                  {showcaseItems[activeTab].desc}
                </p>
              </div>

              {/* Dynamic Visual Mockup Container */}
              <div className="min-h-[280px] sm:min-h-[360px] rounded-2xl bg-white border-2 border-[#201a18] shadow-md p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
                
                {activeTab === 0 && (
                  /* 1. Brand Logo */
                  <div className="w-full max-w-2xl space-y-6 text-center py-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ee4b56] bg-[#ee4b56]/10 px-3 py-1 rounded-full border border-[#ee4b56]/20">
                        Official Brand Logos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                      {/* Logo 1 */}
                      <div className="p-4 rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-md space-y-3 flex flex-col justify-between transition-transform hover:scale-105">
                        <div className="h-28 bg-white rounded-xl border border-[#201a18]/15 flex items-center justify-center p-2">
                          <img src="/Logo/logo1.jpeg" alt="Intellectra Logo 1" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#201a18] block">Logo Option 1</span>
                          <span className="text-[10px] font-bold text-[#ee4b56] uppercase">Primary Emblem</span>
                        </div>
                      </div>

                      {/* Logo 2 */}
                      <div className="p-4 rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-md space-y-3 flex flex-col justify-between transition-transform hover:scale-105">
                        <div className="h-28 bg-white rounded-xl border border-[#201a18]/15 flex items-center justify-center p-2">
                          <img src="/Logo/logo2.jpeg" alt="Intellectra Logo 2" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#201a18] block">Logo Option 2</span>
                          <span className="text-[10px] font-bold text-[#ee4b56] uppercase">Primary Wordmark</span>
                        </div>
                      </div>

                      {/* Logo 3 */}
                      <div className="p-4 rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18]/20 shadow-sm space-y-3 flex flex-col justify-between transition-transform hover:scale-105">
                        <div className="h-28 bg-white rounded-xl border border-[#201a18]/15 flex items-center justify-center p-2">
                          <img src="/Logo/logo3.jpeg" alt="Intellectra Logo 3" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#201a18] block">Logo Option 3</span>
                          <span className="text-[10px] text-[#201a18]/60 uppercase">Alternate Mark</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#201a18]/70 italic font-sans">
                      Official brand identity marks created for Intellectra Engineering Consultancy.
                    </p>
                  </div>
                )}

                {activeTab === 1 && (
                  /* 2. Color Palette */
                  <div className="w-full max-w-md space-y-6 text-center">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#201a18]">Brand Color System</h5>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="space-y-1">
                        <div className="h-20 sm:h-24 rounded-xl bg-[#0f172a] shadow-md border border-[#201a18]" />
                        <span className="text-[11px] font-bold text-[#201a18] block">Corporate Navy</span>
                        <span className="text-[10px] text-[#201a18]/60 block">#0F172A</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-20 sm:h-24 rounded-xl bg-[#0d9488] shadow-md border border-[#201a18]" />
                        <span className="text-[11px] font-bold text-[#201a18] block">Precision Teal</span>
                        <span className="text-[10px] text-[#201a18]/60 block">#0D9488</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-20 sm:h-24 rounded-xl bg-[#ee4b56] shadow-md border border-[#201a18]" />
                        <span className="text-[11px] font-bold text-[#201a18] block">Accent Red</span>
                        <span className="text-[10px] text-[#201a18]/60 block">#EE4B56</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-20 sm:h-24 rounded-xl bg-[#f7f4ed] shadow-md border border-[#201a18]" />
                        <span className="text-[11px] font-bold text-[#201a18] block">Ivory Cream</span>
                        <span className="text-[10px] text-[#201a18]/60 block">#F7F4ED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  /* 3. Typography */
                  <div className="space-y-6 text-left w-full max-w-md">
                    <div className="p-4 rounded-xl bg-[#f7f4ed] border border-[#201a18]/20">
                      <span className="text-[10px] font-bold uppercase text-[#ee4b56]">Primary Display Serif</span>
                      <h4 className="text-2xl font-black font-display-vintage text-[#201a18] mt-1">Playfair &amp; Italiana</h4>
                      <p className="text-xs text-[#201a18]/70">Used for executive headers, logos, and report titles.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f7f4ed] border border-[#201a18]/20">
                      <span className="text-[10px] font-bold uppercase text-[#0d9488]">Body &amp; Technical Sans</span>
                      <h4 className="text-xl font-bold font-sans text-[#201a18] mt-1">Plus Jakarta Sans</h4>
                      <p className="text-xs text-[#201a18]/70">Used for estimation tables, sitemaps, and web content.</p>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  /* 4. Business Card Mockup */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                    {/* Front */}
                    <div className="p-6 rounded-2xl bg-[#201a18] text-white shadow-xl border border-[#201a18] flex flex-col justify-between h-40">
                      <span className="text-xs font-bold text-[#ee4b56] tracking-widest">INTELLECTRA</span>
                      <div>
                        <p className="text-xs font-bold">Engineering Consultancy</p>
                        <p className="text-[10px] text-white/60">Estimation &amp; Design Services</p>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="p-6 rounded-2xl bg-white text-[#201a18] shadow-xl border-2 border-[#201a18] flex flex-col justify-between h-40">
                      <div>
                        <p className="text-sm font-black">Alex Vance</p>
                        <p className="text-[10px] text-[#ee4b56] font-bold">Lead Technical Director</p>
                      </div>
                      <div className="text-[10px] space-y-0.5 font-semibold text-[#201a18]/70">
                        <p>contact@intellectra-consulting.com</p>
                        <p>www.intellectra-consulting.com</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  /* 5. Letterhead */
                  <div className="w-full max-w-md p-6 rounded-xl bg-white border-2 border-[#201a18] shadow-lg space-y-4">
                    <div className="flex items-center justify-between border-b-2 border-[#ee4b56] pb-3">
                      <div>
                        <h5 className="font-black text-sm text-[#201a18]">INTELLECTRA</h5>
                        <p className="text-[9px] text-[#201a18]/60 font-semibold">Engineering Consultancy Services</p>
                      </div>
                      <span className="text-[9px] text-right text-[#201a18]/60">Date: August 2025</span>
                    </div>
                    <div className="space-y-2 text-[10px] text-[#201a18]/70">
                      <p className="font-bold text-[#201a18]">SUBJECT: Engineering Estimation &amp; Structural Design Proposal</p>
                      <p>Dear Client, We are pleased to present the strategic sitemap and technical estimation report for your upcoming commercial engineering project...</p>
                    </div>
                    <div className="pt-4 border-t border-[#201a18]/10 text-[9px] text-center text-[#201a18]/50">
                      Intellectra Engineering Consultancy • All Rights Reserved
                    </div>
                  </div>
                )}

                {activeTab === 5 && (
                  /* 6. Website Homepage */
                  <div className="w-full max-w-lg rounded-xl border-2 border-[#201a18] overflow-hidden shadow-lg bg-white">
                    <div className="bg-[#201a18] px-4 py-2 flex items-center justify-between text-white text-xs">
                      <span className="font-bold text-[#ee4b56]">INTELLECTRA</span>
                      <span className="text-[10px] text-white/60">www.intellectra-engineering.com</span>
                    </div>
                    <div className="p-6 text-center space-y-3 bg-gradient-to-b from-[#f7f4ed] to-white">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ee4b56]/10 text-[#ee4b56]">ENGINEERING CONSULTANCY</span>
                      <h4 className="text-xl font-black text-[#201a18]">Precision Structural Estimation &amp; Engineering Design</h4>
                      <p className="text-xs text-[#201a18]/70 max-w-sm mx-auto">Building a professional brand from the ground up with data-driven accuracy.</p>
                      <button className="px-4 py-1.5 rounded-full bg-[#201a18] text-white font-bold text-xs shadow-md">Get Consultation</button>
                    </div>
                  </div>
                )}

                {activeTab === 6 && (
                  /* 7. Website Inner Pages */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                    <div className="p-4 rounded-xl bg-[#f7f4ed] border border-[#201a18]/20 space-y-2">
                      <span className="text-[10px] font-bold text-[#ee4b56] uppercase">Services Page</span>
                      <h5 className="font-bold text-xs text-[#201a18]">Structural Estimation</h5>
                      <p className="text-[10px] text-[#201a18]/70">Cost modeling, CAD design review, and material takeoff breakdowns.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#f7f4ed] border border-[#201a18]/20 space-y-2">
                      <span className="text-[10px] font-bold text-[#ee4b56] uppercase">About Page</span>
                      <h5 className="font-bold text-xs text-[#201a18]">Engineering Purpose</h5>
                      <p className="text-[10px] text-[#201a18]/70">Establishing brand positioning and technical consultancy heritage.</p>
                    </div>
                  </div>
                )}

                {activeTab === 7 && (
                  /* 8. Content Calendar */
                  <div className="w-full max-w-md p-5 rounded-xl bg-white border-2 border-[#201a18] shadow-md space-y-3">
                    <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-2">
                      <span className="font-bold text-xs text-[#201a18]">30-Day Content Calendar</span>
                      <span className="text-[10px] font-bold text-[#ee4b56]">LantroTech Internship</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-[#f7f4ed] border border-[#201a18]/10">
                        <span className="font-bold text-[#ee4b56] block">Week 1</span>
                        Brand Launch Posts
                      </div>
                      <div className="p-2 rounded bg-[#f7f4ed] border border-[#201a18]/10">
                        <span className="font-bold text-[#ee4b56] block">Week 2</span>
                        Case Study Highlights
                      </div>
                      <div className="p-2 rounded bg-[#f7f4ed] border border-[#201a18]/10">
                        <span className="font-bold text-[#ee4b56] block">Week 3</span>
                        Estimation Tips
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 8 && (
                  /* 9. Email Marketing Flow */
                  <div className="w-full max-w-md p-5 rounded-xl bg-[#201a18] text-white shadow-xl space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-bold text-xs text-[#ee4b56]">HubSpot Email Automation Sequence</span>
                      <span className="text-[10px] text-white/60">Mailchimp Flow</span>
                    </div>
                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 rounded bg-white/10 flex items-center justify-between">
                        <span>Email 1: Welcome &amp; Consultancy Overview</span>
                        <span className="text-[#ee4b56] font-bold">Trigger: Lead Form</span>
                      </div>
                      <div className="p-2 rounded bg-white/10 flex items-center justify-between">
                        <span>Email 2: Engineering Case Studies &amp; Sample Reports</span>
                        <span className="text-[#ee4b56] font-bold">Day 3</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Showcase Navigation Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeTab === 0}
                  onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-white border border-[#201a18]/20 text-xs font-bold text-[#201a18] disabled:opacity-40 hover:bg-[#201a18] hover:text-white transition-colors"
                >
                  ← Previous Item
                </button>
                
                <span className="text-xs font-bold text-[#201a18]">
                  {showcaseItems[activeTab].title}
                </span>

                <button
                  disabled={activeTab === showcaseItems.length - 1}
                  onClick={() => setActiveTab((prev) => Math.min(showcaseItems.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-[#ee4b56] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#d32f3a] transition-colors border border-[#201a18]"
                >
                  Next Item →
                </button>
              </div>

            </div>

          </div>

          {/* INTELLECTRA PROMO REEL SHOWCASE */}
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

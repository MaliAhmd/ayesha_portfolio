"use client";

import { useState } from "react";
import { Sparkles, Palette, Camera, Heart, Layers, ArrowRight, Layout, Trophy } from "lucide-react";

export default function SocialMediaDesignSection() {
  const [selectedOrg, setSelectedOrg] = useState<string>("tedx");

  const orgs = [
    {
      id: "tedx",
      name: "TEDxQAU",
      role: "Executive Graphic Designer",
      desc: "Event branding, social media promotions, speaker announcements, and digital creatives for official TEDx event.",
      badge: "Executive Design",
      tagline: "Inspiring Ideas & Event Aesthetics",
      deliverables: ["Event Branding", "Social Media Posts", "Event Promotions", "Digital Creatives"],
      tools: ["Canva"],
      showcase: [
        "Instagram Feed Designs",
        "Instagram Stories",
        "Event Posters",
        "Speaker Announcements",
        "Event Day Creatives",
        "Event Photography with Designed Assets",
        "Certificate of Appreciation",
      ],
      colorAccent: "from-[#ee4b56]/20 to-[#201a18]/10",
    },
    {
      id: "quaidian",
      name: "QUAIDIAN MEDIA CLUB",
      role: "Creative Director and Lead Graphic Designer",
      desc: "Designing creative experiences for campus events and student initiatives.",
      badge: "Creative Leadership",
      tagline: "Campus Campaigns & Visual Experiences",
      deliverables: ["Creative Direction", "Event Branding", "Social Media Campaigns", "Promotional Graphics", "Campaign Visuals"],
      tools: ["Canva"],
      showcase: [
        "Movie Day Campaign",
        "Photowalk Campaign",
        "Event Posters",
        "Instagram Posts",
        "Carousel Designs",
        "Stories",
        "Branding Assets",
        "Creative Campaigns",
      ],
      colorAccent: "from-[#201a18]/20 to-[#ee4b56]/15",
    },
    {
      id: "wallofhope",
      name: "WALL OF HOPE",
      role: "Graphic Designer",
      desc: "Designing with purpose for social causes, awareness drives, and community engagement.",
      badge: "Purpose-Driven Design",
      tagline: "Community Impact & Awareness Drives",
      deliverables: ["Awareness Campaigns", "Event Promotions", "Social Media Graphics", "Digital Creatives"],
      tools: ["Canva"],
      showcase: [
        "Campaign Posters",
        "Social Media Posts",
        "Event Graphics",
        "Awareness Campaigns",
        "Volunteer Drive Designs",
      ],
      colorAccent: "from-[#ee4b56]/15 to-[#201a18]/20",
    },
  ];

  const currentOrg = orgs.find((o) => o.id === selectedOrg) || orgs[0];

  return (
    <section id="social-media" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f3eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Creative Content Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            SOCIAL MEDIA <span className="coral-text-vintage inline-block">DESIGN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/80 font-sans">
            A collection of social media campaigns, branding assets and creative content designed for university organizations and community initiatives.
          </p>
        </div>

        {/* ORGANIZATION TOGGLE BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {orgs.map((org) => (
            <button
              key={org.id}
              onClick={() => setSelectedOrg(org.id)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all border-2 flex items-center gap-2 ${
                selectedOrg === org.id
                  ? "bg-[#201a18] text-white border-[#201a18] shadow-lg scale-105"
                  : "bg-white text-[#201a18] border-[#201a18]/15 hover:border-[#201a18]"
              }`}
            >
              <span>{org.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ee4b56] text-white font-semibold">
                {org.badge}
              </span>
            </button>
          ))}
        </div>

        {/* ACTIVE ORGANIZATION FEATURE CARD */}
        <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-2xl p-8 sm:p-12 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-[#201a18]/10 pb-8">
            <div className="space-y-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] border border-[#ee4b56]/20 uppercase">
                {currentOrg.badge}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#201a18] font-display-vintage">
                {currentOrg.name}
              </h3>
              <p className="text-sm font-bold text-[#ee4b56] uppercase tracking-wide">
                {currentOrg.role}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 space-y-3 lg:w-72 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#201a18]/60">Primary Tool</span>
                <span className="px-2.5 py-1 rounded-md bg-[#ee4b56] text-white text-xs font-bold">
                  Canva
                </span>
              </div>
              <div className="border-t border-[#201a18]/10 pt-2 space-y-1">
                <span className="text-[11px] font-bold text-[#201a18]/60 uppercase">Key Deliverables:</span>
                <div className="flex flex-wrap gap-1">
                  {currentOrg.deliverables.map((del, i) => (
                    <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-[#201a18]/15 text-[#201a18]">
                      • {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL SHOWCASE GRID (Generous white space, large mockups, minimal captions) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-3">
              <h4 className="text-xl font-black text-[#201a18] font-display-vintage">
                Design Showcase &amp; Campaign Visuals
              </h4>
              <span className="text-xs font-bold text-[#201a18]/60 uppercase">
                {currentOrg.showcase.length} Visual Assets
              </span>
            </div>

            {/* Grid of Large Mockup Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentOrg.showcase.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Mockup Preview Area */}
                  <div className={`h-56 p-6 bg-gradient-to-br ${currentOrg.colorAccent} border-b-2 border-[#201a18] flex flex-col justify-between relative overflow-hidden`}>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#201a18] border border-[#201a18]/20 backdrop-blur-sm">
                        {currentOrg.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ee4b56] text-white">
                        Canva
                      </span>
                    </div>

                    {/* Central Design Element Graphic */}
                    <div className="text-center my-auto py-2">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#201a18] group-hover:bg-[#ee4b56] group-hover:text-white flex items-center justify-center mx-auto border border-[#201a18] shadow-md transition-colors">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-black text-[#201a18] mt-2 font-display-vintage">
                        {item}
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <span className="text-[9px] font-bold text-[#201a18]/50 uppercase tracking-widest">
                        Asset #{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Minimal Caption Footer */}
                  <div className="p-4 bg-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#201a18] group-hover:text-[#ee4b56] transition-colors">
                        {item}
                      </p>
                      <p className="text-[10px] text-[#201a18]/60">Minimal Caption • Canva Asset</p>
                    </div>
                    <span className="text-xs text-[#201a18] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

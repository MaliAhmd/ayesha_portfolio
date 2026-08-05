"use client";

import { useState } from "react";
import { Sparkles, Heart, Gift, Calendar, ArrowUpRight } from "lucide-react";

export default function CreativeCollectionSection() {
  const invitations = [
    { title: "Wedding Invitations", theme: "Luxury Gold & Floral Serif", bg: "from-[#ee4b56]/20 to-[#201a18]/10" },
    { title: "Engagement Invitations", theme: "Minimalist Blush & Gold Foil", bg: "from-[#201a18]/15 to-[#ee4b56]/15" },
    { title: "Nikkah Invitations", theme: "Traditional Islamic Calligraphy & Emerald", bg: "from-[#ee4b56]/25 to-[#201a18]/5" },
    { title: "Mehndi Invitations", theme: "Vibrant Folk Pattern & Warm Terracotta", bg: "from-[#201a18]/20 to-[#ee4b56]/20" },
    { title: "Birthday Invitations", theme: "Modern Geometric & Pastel Typography", bg: "from-[#ee4b56]/15 to-[#201a18]/15" },
    { title: "Bridal Shower Invitations", theme: "Soft Botanical & Elegant Script", bg: "from-[#201a18]/10 to-[#ee4b56]/25" },
    { title: "Baby Shower Invitations", theme: "Whimsical Watercolor & Soft Pastels", bg: "from-[#ee4b56]/20 to-[#201a18]/10" },
    { title: "Party Invitations", theme: "Chic Noir & Sparkling Gold Accents", bg: "from-[#201a18]/25 to-[#ee4b56]/10" },
    { title: "Eid Invitations", theme: "Crescent Moon Motif & Royal Navy", bg: "from-[#ee4b56]/15 to-[#201a18]/20" },
    { title: "Holiday Greeting Cards", theme: "Warm Seasonal Foil & Editorial Serif", bg: "from-[#201a18]/15 to-[#ee4b56]/15" },
    { title: "Announcement Cards", theme: "Clean Typography & Cardstock Texture", bg: "from-[#ee4b56]/20 to-[#201a18]/5" },
  ];

  return (
    <section id="creative-collection" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative overflow-hidden">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201a18] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Independent Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            CREATIVE <span className="coral-text-vintage inline-block">COLLECTION</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/80 font-sans leading-relaxed">
            A curated collection of independent creative work, invitation designs and visual explorations created beyond internships and university organizations.
          </p>
        </div>

        {/* INVITATION DESIGNS SUBSECTION */}
        <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-2xl p-8 sm:p-12 space-y-10">
          
          <div className="border-b-2 border-[#201a18]/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56] text-white uppercase">
                Personalized Design Suite
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#201a18] font-display-vintage mt-2">
                INVITATION DESIGNS
              </h3>
              <p className="text-sm text-[#201a18]/75 mt-1 font-sans">
                Elegant, modern and customized invitation designs created for personal celebrations and special occasions.
              </p>
            </div>
            <span className="text-xs font-bold text-[#ee4b56] px-3.5 py-1.5 rounded-full bg-[#ee4b56]/10 border border-[#ee4b56]/20 shrink-0">
              11 Custom Mockup Cards
            </span>
          </div>

          {/* ELEGANT MOCKUP CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {invitations.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Mockup Frame Container */}
                <div className={`h-64 p-6 bg-gradient-to-br ${item.bg} border-b-2 border-[#201a18] flex flex-col justify-between relative overflow-hidden`}>
                  
                  {/* Subtle Frame Corner Accent Markers */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#201a18]/40" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#201a18]/40" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#201a18]/40" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#201a18]/40" />

                  {/* Header Badge inside card */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#201a18] border border-[#201a18]/20 backdrop-blur-sm">
                      Custom Stationery
                    </span>
                    <Heart className="w-4 h-4 text-[#ee4b56] fill-[#ee4b56]/30" />
                  </div>

                  {/* Card Center Mockup Graphic */}
                  <div className="relative z-10 text-center my-auto py-2">
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#201a18] group-hover:bg-[#ee4b56] group-hover:text-white flex items-center justify-center mx-auto border-2 border-[#201a18] shadow-lg transition-colors">
                      <Gift className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-black text-[#201a18] mt-3 font-display-vintage">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-bold text-[#ee4b56] uppercase mt-0.5 tracking-wider">
                      {item.theme}
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-between items-center text-[9px] font-bold text-[#201a18]/60 uppercase">
                    <span>Card #{idx + 1}</span>
                    <span>High-Res Mockup</span>
                  </div>

                </div>

                {/* Minimal Footer */}
                <div className="p-4 bg-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#201a18] group-hover:text-[#ee4b56] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-[#201a18]/60">Personalized Celebration Suite</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#f7f4ed] group-hover:bg-[#ee4b56] group-hover:text-white flex items-center justify-center text-[#201a18] border border-[#201a18]/20 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

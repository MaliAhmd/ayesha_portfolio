"use client";

import { Sparkles, Palette, Megaphone, LayoutGrid, HeartHandshake, ArrowDown } from "lucide-react";

export default function AboutSection() {
  const whatsInside = [
    {
      title: "Branding",
      subtitle: "Creating visual identities that build recognition and trust.",
      icon: Palette,
      badge: "Identity & Trust",
      anchor: "#intellectra",
      bgColor: "bg-white",
    },
    {
      title: "Digital Marketing",
      subtitle: "Exploring content strategy, email marketing, CRM and digital marketing tools.",
      icon: Megaphone,
      badge: "Strategy & Growth",
      anchor: "#digital-marketing",
      bgColor: "bg-white",
    },
    {
      title: "Social Media Design",
      subtitle: "Designing content that informs, engages and connects with audiences.",
      icon: LayoutGrid,
      badge: "Engagement & Content",
      anchor: "#social-media",
      bgColor: "bg-white",
    },
    {
      title: "Creative Projects",
      subtitle: "A selection of branding, campaigns and visual communication work.",
      icon: HeartHandshake,
      badge: "Invitations & Exploration",
      anchor: "#creative-collection",
      bgColor: "bg-white",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f3eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ABOUT MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#ee4b56]/20 to-[#201a18]/10 blur-xl" />
              
              <div className="relative rounded-3xl p-5 sm:p-8 bg-white shadow-2xl border-2 border-[#201a18] text-[#201a18] space-y-6">
                <div className="flex items-center justify-between border-b border-[#201a18]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ee4b56] text-white flex items-center justify-center font-bold text-lg sm:text-xl border-2 border-[#201a18] shrink-0">
                      AK
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base font-sans leading-tight">AYESHA ARSHAD KHAN</h4>
                      <p className="text-[11px] sm:text-xs text-[#ee4b56] font-semibold">Marketing Graduate &amp; Designer</p>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#ee4b56] shrink-0" />
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 space-y-2">
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ee4b56]">Core Mantra</p>
                  <p className="text-sm sm:text-base font-serif-vintage italic font-bold text-[#201a18]">
                    &ldquo;Marketing is where strategy meets creativity.&rdquo;
                  </p>
                </div>

                <div className="space-y-2 text-xs font-semibold text-[#201a18]/70">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#201a18]/10 gap-0.5 sm:gap-2">
                    <span className="text-[#201a18]/60">Education:</span>
                    <span className="font-bold text-[#201a18] sm:text-right">Bachelors of Business Administration</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#201a18]/10 gap-0.5 sm:gap-2">
                    <span className="text-[#201a18]/60">Specialization:</span>
                    <span className="font-bold text-[#201a18] sm:text-right">Marketing</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-0.5 sm:gap-2">
                    <span className="text-[#201a18]/60">Focus:</span>
                    <span className="font-bold text-[#ee4b56] sm:text-right">Purpose-Driven Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bio Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] text-xs font-bold uppercase tracking-widest border border-[#ee4b56]/20">
              About Ayesha
            </div>

            <p className="text-base sm:text-lg text-[#201a18]/85 leading-relaxed font-sans font-medium">
              I'm <strong className="text-[#201a18] font-bold">Ayesha Arshad Khan</strong>, a Marketing graduate passionate about building brands, creating meaningful content and exploring the intersection of creativity and digital marketing.
            </p>

            <p className="text-base sm:text-lg text-[#201a18]/85 leading-relaxed font-sans font-medium">
              With experience in branding, social media design and digital marketing gained through internships and creative leadership roles, I enjoy transforming ideas into visuals and campaigns that communicate with purpose.
            </p>

            <p className="text-base sm:text-lg text-[#201a18]/85 leading-relaxed font-sans font-medium">
              This portfolio is a curated collection of projects that reflect my creativity, continuous learning and passion for meaningful marketing.
            </p>
          </div>

        </div>

        {/* WHAT'S INSIDE SECTION */}
        <div id="whats-inside" className="pt-12 border-t-2 border-[#201a18]/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#201a18] text-white text-xs font-bold uppercase tracking-widest">
              Portfolio Overview
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-[#201a18] font-display-vintage">
              WHAT'S INSIDE
            </h3>
            <p className="text-sm text-[#201a18]/70 font-sans">
              Explore the core categories featured across this interactive portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsInside.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.anchor}
                  className="group rounded-3xl p-6 bg-white border-2 border-[#201a18] shadow-card-hover hover:border-[#ee4b56] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#ee4b56] text-white flex items-center justify-center border border-[#201a18] shadow-md group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f7f4ed] text-[#201a18] border border-[#201a18]/10">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-[#201a18] group-hover:text-[#ee4b56] transition-colors font-sans">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#201a18]/75 leading-relaxed font-sans">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#201a18]/10 flex items-center justify-between text-xs font-bold text-[#201a18] group-hover:text-[#ee4b56]">
                    <span>Explore Category</span>
                    <ArrowDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

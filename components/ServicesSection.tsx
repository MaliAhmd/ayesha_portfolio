"use client";

import { Megaphone, Palette, Layout, BarChart3, ArrowRight, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      icon: Megaphone,
      title: "Digital Marketing & Strategy",
      tagline: "High-ROAS Campaigns & Growth Funnels",
      desc: "Comprehensive marketing campaign planning, Meta & Google ad management, target audience segmentation, and sales funnel optimization built to convert cold traffic into loyal brand advocates.",
      deliverables: [
        "Social Media Ad Campaigns",
        "Conversion Funnel Architecture",
        "Audience Persona & Market Research",
        "Retargeting & ROI Optimization",
      ],
      badge: "Core Service",
      highlight: true,
    },
    {
      id: "02",
      icon: Palette,
      title: "Branding & Visual Identity",
      tagline: "Iconic Aesthetics & Brand Guidelines",
      desc: "Transforming brand concepts into unforgettable visual identities. Includes custom logo suites, bespoke typography pairings, color systems, and comprehensive brand books.",
      deliverables: [
        "Logo Suite & Iconography",
        "Brand Guidelines & Style Guides",
        "Color Palette & Typography System",
        "Brand Messaging Architecture",
      ],
      badge: "Design",
      highlight: false,
    },
    {
      id: "03",
      icon: Layout,
      title: "Graphic Design & Content",
      tagline: "Scroll-Stopping Visual Assets",
      desc: "High-impact visual creative production engineered to grab attention instantly. From carousel graphics and ad banners to promotional collateral and presentation pitch decks.",
      deliverables: [
        "Instagram & LinkedIn Creative Sets",
        "Performance Ad Banners & Creatives",
        "Pitch Decks & Presentation Design",
        "Print & Promotional Collateral",
      ],
      badge: "Creative",
      highlight: false,
    },
    {
      id: "04",
      icon: BarChart3,
      title: "Social Media Management",
      tagline: "End-to-End Account Strategy & Growth",
      desc: "Full-service management of your social channels. Content calendar planning, caption copywriting, reel/shorts graphic assets, community engagement, and monthly analytics reporting.",
      deliverables: [
        "Monthly Content Calendar Strategy",
        "Copywriting & Hashtag Optimization",
        "Short-Form Video Visual Assets",
        "Analytics & Performance Reports",
      ],
      badge: "Management",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201a18] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Strategic Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            Tailored Services For <span className="coral-text-vintage inline-block">Maximum Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/70 font-sans">
            Combining creative artistic vision with empirical marketing methodology to scale your business.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 shadow-card-hover border-2 ${
                  service.highlight
                    ? "bg-white border-[#ee4b56] shadow-xl"
                    : "bg-white/80 border-[#201a18]/15 hover:border-[#201a18]"
                }`}
              >
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-[#201a18] shadow-md ${
                        service.highlight
                          ? "bg-[#ee4b56] text-white"
                          : "bg-[#201a18] text-white"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#ee4b56] tracking-widest uppercase">
                        Service {service.id}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#201a18] font-sans">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f7f4ed] text-[#201a18] border border-[#201a18]/10">
                    {service.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#ee4b56] mb-3 uppercase tracking-wide">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#201a18]/80 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#201a18]/10 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#201a18]">
                      <div className="w-4 h-4 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#201a18] hover:text-[#ee4b56] group transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

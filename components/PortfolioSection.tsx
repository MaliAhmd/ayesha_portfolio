"use client";

import { useState } from "react";
import { ExternalLink, Sparkles, TrendingUp, Layers, Eye, X, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Digital Campaigns" | "Brand Identity" | "Graphic Design" | "Social Media Strategy";
  client: string;
  metrics: string;
  metricLabel: string;
  summary: string;
  fullDetails: {
    challenge: string;
    solution: string;
    results: string[];
    tools: string[];
  };
  colorTheme: string;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Aura Luxe Cosmetics Campaign & Rebrand",
      category: "Digital Campaigns",
      client: "Aura Luxe Beauty",
      metrics: "4.2x ROAS",
      metricLabel: "Meta Ad ROAS",
      summary: "Full digital ad strategy, creative direction, and high-converting video ad graphics yielding 4.2x ROAS on Instagram & TikTok.",
      fullDetails: {
        challenge: "Aura Luxe struggled with high Customer Acquisition Cost (CAC) and low engagement on their legacy ad creative formats.",
        solution: "Redesigned visual ad assets, launched audience targeting funnels, and crafted high-contrast carousel posts and reel templates.",
        results: [
          "Generated $140K+ in sales within 45 days",
          "Reduced CAC by 38%",
          "Increased Click-Through-Rate (CTR) from 1.2% to 3.7%"
        ],
        tools: ["Meta Ads Manager", "Graphic Design Suite", "Brand Strategy", "Copywriting"]
      },
      colorTheme: "from-[#ee4b56]/20 to-[#201a18]/5",
    },
    {
      id: "proj-2",
      title: "Velvet & Vine Organic Tea Visual Identity",
      category: "Brand Identity",
      client: "Velvet & Vine Co.",
      metrics: "+180%",
      metricLabel: "Brand Recognition",
      summary: "Complete visual brand identity system including logo design, luxury packaging graphics, typography guidelines, and social grid aesthetics.",
      fullDetails: {
        challenge: "Needed a premium brand identity that stood out in a competitive luxury wellness market.",
        solution: "Created an elegant serif-based logo system, bespoke color palette (warm cream & deep olive), and social media style guide.",
        results: [
          "Successfully launched across 15+ retail locations",
          "Featured in leading lifestyle blogs",
          "Secured 500+ pre-orders within first week"
        ],
        tools: ["Brand Architecture", "Logo Suite", "Packaging Graphics", "Typography"]
      },
      colorTheme: "from-[#201a18]/20 to-[#ee4b56]/10",
    },
    {
      id: "proj-3",
      title: "NexGen B2B Marketing & Infographic Package",
      category: "Graphic Design",
      client: "NexGen Tech Solutions",
      metrics: "95K+",
      metricLabel: "LinkedIn Impressions",
      summary: "Designed data-dense infographic graphics, executive pitch decks, and digital ad banners for a B2B SaaS product launch.",
      fullDetails: {
        challenge: "Complex technical product features needed to be communicated simply and visually to enterprise decision makers.",
        solution: "Created a series of crisp visual infographics and a 20-page executive presentation pitch deck.",
        results: [
          "Achieved 95,000+ organic impressions on LinkedIn",
          "Increased demo booking conversions by 45%",
          "Adopted as official corporate visual template"
        ],
        tools: ["Graphic Design", "Infographic Design", "Pitch Deck", "B2B Marketing"]
      },
      colorTheme: "from-[#ee4b56]/15 to-[#201a18]/15",
    },
    {
      id: "proj-4",
      title: "Bloom Organics Social Media Strategy & Growth",
      category: "Social Media Strategy",
      client: "Bloom Organics Skincare",
      metrics: "3.5x",
      metricLabel: "Follower Growth",
      summary: "360-degree social media management, content strategy, aesthetic feed curation, and influencer campaign collaterals.",
      fullDetails: {
        challenge: "Stagnant account growth and low organic engagement on Instagram.",
        solution: "Developed an interactive content calendar, high-aesthetic graphic templates, and engagement strategy.",
        results: [
          "Grew follower base from 4K to 14K in 3 months",
          "Average post engagement rate increased by 220%",
          "Generated over 500 user-generated content stories"
        ],
        tools: ["Content Calendar", "Social Media Management", "Short-Form Assets", "Analytics"]
      },
      colorTheme: "from-[#201a18]/10 to-[#ee4b56]/20",
    },
    {
      id: "proj-5",
      title: "Urban Pulse Fashion Ad Creatives",
      category: "Graphic Design",
      client: "Urban Pulse Streetwear",
      metrics: "2.8% CTR",
      metricLabel: "Ad Click Rate",
      summary: "High-energy graphic designs, story templates, and promotional banner assets tailored for gen-z streetwear audiences.",
      fullDetails: {
        challenge: "Needed vibrant visual creative assets to capture youth attention during seasonal flash sales.",
        solution: "Engineered bold typography layouts, neo-vintage graphic elements, and animated ad banners.",
        results: [
          "Sold out summer drop within 72 hours",
          "Ad CTR exceeded industry average by 2.4x",
          "Generated 12,000+ ad website visits"
        ],
        tools: ["Graphic Design", "Ad Creatives", "Banner Ads", "Visual Direction"]
      },
      colorTheme: "from-[#ee4b56]/25 to-[#201a18]/5",
    },
    {
      id: "proj-6",
      title: "Elysian Spa Brand Strategy & Collaterals",
      category: "Brand Identity",
      client: "Elysian Wellness",
      metrics: "100%",
      metricLabel: "Client Satisfaction",
      summary: "End-to-end branding, service menu graphic design, promotional brochures, and digital marketing launch strategy.",
      fullDetails: {
        challenge: "Opening a new luxury wellness location required complete visual collateral and launch campaign.",
        solution: "Designed print and digital menus, VIP invitation cards, and target localized social ad graphics.",
        results: [
          "Fully booked opening month appointments",
          "High client retention rate of 78%",
          "Consistent premium brand image across print & web"
        ],
        tools: ["Brand Identity", "Print Graphic Design", "Local Ads", "Copywriting"]
      },
      colorTheme: "from-[#201a18]/15 to-[#ee4b56]/15",
    },
  ];

  const categories = ["All", "Digital Campaigns", "Brand Identity", "Graphic Design", "Social Media Strategy"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f3eb] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            Marketing Campaigns &amp; <span className="coral-text-vintage inline-block">Design Showcase</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/70 font-sans">
            A collection of real-world brand growth projects, digital campaign graphics, and strategic design work.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border-2 ${
                activeFilter === cat
                  ? "bg-[#201a18] text-white border-[#201a18] shadow-md scale-105"
                  : "bg-white/80 text-[#201a18] border-[#201a18]/15 hover:border-[#201a18]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-white border-2 border-[#201a18] shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Banner Artwork Representation */}
              <div className={`relative h-48 sm:h-56 p-6 bg-gradient-to-br ${project.colorTheme} border-b-2 border-[#201a18] flex flex-col justify-between overflow-hidden`}>
                {/* Background Pattern Elements */}
                <div className="absolute top-2 right-2 text-8xl font-black font-display-vintage text-[#201a18]/5 select-none pointer-events-none">
                  {project.id.replace("proj-", "0")}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-[#201a18] border border-[#201a18]/20 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white text-[#201a18] group-hover:bg-[#ee4b56] group-hover:text-white flex items-center justify-center border border-[#201a18] transition-colors shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Key Metric Badge inside preview */}
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#201a18] font-sans block">
                    {project.metrics}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ee4b56]">
                    {project.metricLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/50 mb-1">
                    Client: {project.client}
                  </p>
                  <h3 className="text-xl font-bold text-[#201a18] group-hover:text-[#ee4b56] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#201a18]/75 mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#201a18]/10 flex items-center justify-between text-xs font-bold text-[#201a18]">
                  <span className="text-[#ee4b56] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> View Strategy &amp; Results
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201a18]/70 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-[#201a18] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#f7f4ed] hover:bg-[#ee4b56] text-[#201a18] hover:text-white transition-colors border border-[#201a18]/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] text-xs font-bold uppercase tracking-wider mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#201a18] font-display-vintage">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-bold text-[#201a18]/60 mt-1 uppercase">
                  Client: {selectedProject.client}
                </p>
              </div>

              {/* Metric Card inside Modal */}
              <div className="p-4 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#201a18]/60 uppercase">Key Outcome Metric</p>
                  <p className="text-2xl font-black text-[#ee4b56]">{selectedProject.metrics}</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-[#201a18] text-white text-xs font-bold">
                  {selectedProject.metricLabel}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-[#201a18] uppercase tracking-wider">The Challenge:</h4>
                  <p className="text-sm text-[#201a18]/80 mt-1">{selectedProject.fullDetails.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#201a18] uppercase tracking-wider">The Creative Strategy:</h4>
                  <p className="text-sm text-[#201a18]/80 mt-1">{selectedProject.fullDetails.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#201a18] uppercase tracking-wider mb-2">Verified Results:</h4>
                  <div className="space-y-2">
                    {selectedProject.fullDetails.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#201a18] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#ee4b56] shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xs text-[#201a18]/60 uppercase tracking-wider mb-2">Skills &amp; Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.fullDetails.tools.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#201a18]/5 border border-[#201a18]/15 text-xs font-semibold text-[#201a18]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#201a18]/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#201a18] text-white font-bold text-xs uppercase hover:bg-[#ee4b56] transition-colors"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

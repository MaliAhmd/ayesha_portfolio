"use client";

import { Sparkles, ArrowRight, Download, Eye, Palette } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center marble-bg-container overflow-hidden"
    >
      {/* Ambient Marble Texture Overlay & Light Effects */}
      <div className="marble-bg-overlay" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ee4b56]/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#201a18]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Main Hero Card Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        
        {/* Top Header Badge / Name */}
        <div className="inline-flex flex-col items-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#201a18]/5 border border-[#201a18]/15 backdrop-blur-md mb-3 shadow-sm hover:border-[#ee4b56] transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-[#ee4b56]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#201a18]">
              AYESHA ARSHAD KHAN
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#ee4b56] uppercase font-sans flex items-center justify-center gap-2 flex-wrap">
            <span>Digital Marketing</span>
            <span className="text-[#201a18]/40">•</span>
            <span>Branding</span>
            <span className="text-[#201a18]/40">•</span>
            <span>Graphic Design</span>
          </p>
        </div>

        {/* Giant Display Artwork Frame (MARKETING PORTFOLIO ONLY) */}
        <div className="relative my-4 py-6 sm:py-12 px-3 sm:px-4 rounded-3xl bg-white/40 border border-white/60 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#ee4b56]/40">
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#201a18]/30" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#201a18]/30" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#201a18]/30" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#201a18]/30" />

          <div className="space-y-0 sm:-space-y-4 select-none overflow-hidden">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display-vintage tracking-tight text-[#201a18] dark-text-vintage leading-none">
              MARKETING
            </h1>
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display-vintage tracking-tight coral-text-vintage leading-none">
              PORTFOLIO
            </h1>
          </div>
        </div>

        {/* Featured Tagline Slogan */}
        <div className="mt-6 mb-8 max-w-2xl mx-auto px-2">
          <p className="text-lg sm:text-2xl font-instrument italic text-[#201a18] font-medium tracking-wide">
            &ldquo;Where creativity meets strategy.&rdquo;
          </p>
          <div className="w-16 h-0.5 bg-[#ee4b56] mx-auto mt-3 rounded-full" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12 w-full max-w-xl sm:max-w-none mx-auto">
          <a
            href="#intellectra"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#ee4b56] text-white hover:bg-[#d32f3a] font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 sm:gap-3 border-2 border-[#201a18]"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View Featured Project</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="#social-media"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#201a18] text-white hover:bg-[#ee4b56] hover:border-[#ee4b56] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 sm:gap-3 border-2 border-[#201a18]"
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4b56] group-hover:text-white" />
            <span>Social Media Design</span>
          </a>

          <a
            href="/Resume (Ayesha Arshad Khan).pdf"
            download="Resume (Ayesha Arshad Khan).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-white/80 text-[#201a18] hover:bg-[#ee4b56] hover:text-white hover:border-[#ee4b56] font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 border border-[#201a18]/20 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-[#ee4b56] group-hover:text-white" />
            <span>Get Resume</span>
          </a>
        </div>

      </div>
    </section>
  );
}


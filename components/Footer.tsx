"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#201a18] text-[#f7f4ed] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#ee4b56]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Branding Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-black font-display-vintage tracking-wider text-white">
              AYESHA ARSHAD KHAN
            </h3>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#ee4b56] uppercase">
              Digital Marketing • Branding • Graphic Design
            </p>
            <p className="text-sm italic font-serif-vintage text-white/70">
              Where creativity meets strategy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/80">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "What's Inside", href: "#whats-inside" },
              { label: "Digital Marketing", href: "#digital-marketing" },
              { label: "Social Media Design", href: "#social-media" },
              { label: "Creative Collection", href: "#creative-collection" },
              { label: "Toolbox", href: "#toolbox" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#ee4b56] transition-colors duration-300 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#ee4b56] text-white hover:bg-white hover:text-[#201a18] flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-white/20 shrink-0 transform hover:-translate-y-1"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Rights & Statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-medium text-center sm:text-left">
          <p>© {new Date().getFullYear()} AYESHA ARSHAD KHAN. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#ee4b56] fill-[#ee4b56]" />
            <span>for Marketing &amp; Graphic Design Excellence</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

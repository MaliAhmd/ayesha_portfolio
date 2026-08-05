"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ee4b56] text-white flex items-center justify-center font-bold font-serif-vintage text-xl shadow-md group-hover:scale-110 group-hover:bg-[#d32f3a] transition-all duration-300 border-2 border-[#201a18]">
            A
          </div>
          <div>
            <span className="block font-bold text-sm tracking-wider text-[#201a18] group-hover:text-[#ee4b56] transition-colors duration-300 font-sans">
              AYESHA ARSHAD KHAN
            </span>
            <span className="block text-[11px] text-[#ee4b56] font-medium tracking-wide uppercase">
              Digital Marketing &amp; Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#201a18]">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "What's Inside", href: "#whats-inside" },
            { label: "Digital Marketing", href: "#digital-marketing" },
            { label: "Social Media Design", href: "#social-media" },
            { label: "Creative Collection", href: "#creative-collection" },
            { label: "Toolbox", href: "#toolbox" },
            { label: "Connect", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-[#201a18] hover:text-[#ee4b56] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-[#ee4b56] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#201a18] text-white hover:bg-[#ee4b56] hover:border-[#ee4b56] text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-[#201a18]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#201a18] hover:text-[#ee4b56] transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-[#201a18]/10 px-6 py-6 space-y-3 shadow-xl text-sm font-semibold">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "What's Inside", href: "#whats-inside" },
            { label: "Digital Marketing (Intellectra)", href: "#digital-marketing" },
            { label: "Social Media Design (TEDx, Quaidian, Hope)", href: "#social-media" },
            { label: "Creative Collection (Invitations)", href: "#creative-collection" },
            { label: "My Toolbox & Philosophy", href: "#toolbox" },
            { label: "Let's Connect", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#ee4b56] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#ee4b56] text-white hover:bg-[#d32f3a] font-semibold text-xs shadow-md mt-4 transition-all duration-300"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

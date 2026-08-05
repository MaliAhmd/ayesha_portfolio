"use client";

import { Star, Quote, Award } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Ayesha transformed our visual brand identity and digital campaign strategy completely. Her creative designs and marketing funnel execution gave us a 4.2x ROAS within 6 weeks!",
      name: "Sophia Reynolds",
      title: "Founder & CEO, Aura Luxe",
      rating: 5,
      impact: "4.2x ROAS Generated",
    },
    {
      quote: "Working with Ayesha was a game-changer. She understands how to combine sleek graphic design aesthetics with hard-hitting marketing metrics. Highly recommended!",
      name: "Marcus Vance",
      title: "Marketing Director, NexGen Tech",
      rating: 5,
      impact: "+180% Brand Engagement",
    },
    {
      quote: "Ayesha Khan is rare talent — she is both an extraordinary graphic designer and a sharp digital marketer. Our social channels grew by over 300% under her leadership.",
      name: "Elena Rostova",
      title: "Brand Manager, Velvet & Vine",
      rating: 5,
      impact: "14K Organic Reach",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f3eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            What Clients Say About <span className="coral-text-vintage inline-block">The Results</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/70 font-sans">
            Real feedback from brand founders and marketing executives.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white p-8 border-2 border-[#201a18] shadow-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-[#ee4b56]/30 fill-[#ee4b56]/20" />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#201a18]/80 italic leading-relaxed mb-6 font-sans">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#201a18]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#201a18]">{item.name}</h4>
                  <p className="text-xs text-[#201a18]/60 font-semibold">{item.title}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56]/10 text-[#ee4b56] border border-[#ee4b56]/20 shrink-0">
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

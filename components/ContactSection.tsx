"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Globe, Download, FileText, Presentation, ExternalLink, Loader2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Marketing",
    budget: "Immediate",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative overflow-hidden">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            LET'S <span className="coral-text-vintage inline-block">CONNECT</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/85 font-sans leading-relaxed">
            Thank you for taking the time to explore my work. I'm always open to learning, collaborating and contributing to meaningful creative and marketing projects.
          </p>
          <p className="text-xl font-black font-display-vintage text-[#ee4b56] pt-2">
            Interested in working together? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display-vintage text-[#201a18]">
                Contact Channels
              </h3>
              <p className="text-sm text-[#201a18]/75 font-sans leading-relaxed">
                Whether you have a branding inquiry, social media campaign, or marketing opportunity — reach out directly via any channel below.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-2 border-[#201a18] shadow-sm flex items-center gap-4 hover:border-[#ee4b56] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#201a18] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#ee4b56]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Email</p>
                  <a href="mailto:kayesha2614@gmail.com" className="text-sm sm:text-base font-bold text-[#201a18] hover:text-[#ee4b56] transition-colors break-all sm:break-normal block">
                    kayesha2614@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-2 border-[#201a18] shadow-sm flex items-center gap-4 hover:border-[#ee4b56] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#ee4b56] text-white flex items-center justify-center shrink-0 border border-[#201a18]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">LinkedIn Profile</p>
                  <a
                    href="https://www.linkedin.com/in/ayeshaarshadkhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#201a18] hover:text-[#ee4b56] transition-colors break-all sm:break-normal block"
                  >
                    www.linkedin.com/in/ayeshaarshadkhan
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-2 border-[#201a18] shadow-sm flex items-center gap-4 hover:border-[#ee4b56] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#201a18] text-white flex items-center justify-center shrink-0">
                  <Presentation className="w-6 h-6 text-[#ee4b56]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Intellectra Presentation Slides</p>
                  <a
                    href="https://drive.google.com/drive/folders/1jPi585-W7vMLbWJwRdNZyGRYHynKLZJx?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#201a18] hover:text-[#ee4b56] transition-colors break-all sm:break-normal flex items-center gap-1"
                  >
                    <span>View Slides (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-2 border-[#201a18] shadow-sm flex items-center gap-4 hover:border-[#ee4b56] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#ee4b56] text-white flex items-center justify-center shrink-0 border border-[#201a18]">
                  <Download className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#201a18]/60">Resume</p>
                  <a
                    href="/Resume (Ayesha Arshad Khan).pdf"
                    download="Resume (Ayesha Arshad Khan).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#201a18] hover:text-[#ee4b56] transition-colors flex items-center gap-1 break-words"
                  >
                    <span>Download Official Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-5 sm:p-8 lg:p-10 border-2 border-[#201a18] shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ee4b56] text-white flex items-center justify-center mx-auto border-2 border-[#201a18] shadow-lg animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display-vintage text-[#201a18]">
                    Thank You, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-base text-[#201a18]/80 max-w-md mx-auto">
                    Your message has been sent successfully. Ayesha will read your project details and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Digital Marketing",
                        budget: "Immediate",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#201a18] text-white font-bold text-xs uppercase hover:bg-[#ee4b56] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#201a18]/10 pb-4">
                    <h3 className="text-2xl font-bold font-display-vintage text-[#201a18]">
                      Send a Message to Ayesha
                    </h3>
                    <p className="text-xs text-[#201a18]/60 mt-1">
                      Fill out the details below to initiate a discussion or collaboration.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border-2 border-red-500 text-red-700 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#201a18] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ed] border-2 border-[#201a18]/20 focus:border-[#ee4b56] focus:outline-none text-sm font-medium text-[#201a18]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#201a18] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ed] border-2 border-[#201a18]/20 focus:border-[#ee4b56] focus:outline-none text-sm font-medium text-[#201a18]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#201a18] mb-2">
                        Area of Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ed] border-2 border-[#201a18]/20 focus:border-[#ee4b56] focus:outline-none text-sm font-medium text-[#201a18]"
                      >
                        <option value="Digital Marketing">Digital Marketing &amp; Strategy</option>
                        <option value="Branding">Branding &amp; Visual Identity</option>
                        <option value="Social Media Design">Social Media Design &amp; Content</option>
                        <option value="Invitation Design">Custom Invitation Design</option>
                        <option value="Career Opportunity">Job Opportunity / Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#201a18] mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ed] border-2 border-[#201a18]/20 focus:border-[#ee4b56] focus:outline-none text-sm font-medium text-[#201a18]"
                      >
                        <option value="Immediate">Immediate / Upcoming</option>
                        <option value="1-2 Weeks">In 1 – 2 Weeks</option>
                        <option value="Flexible">Flexible Timeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#201a18] mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Ayesha, I'd love to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ed] border-2 border-[#201a18]/20 focus:border-[#ee4b56] focus:outline-none text-sm font-medium text-[#201a18]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#ee4b56] text-white hover:bg-[#d32f3a] font-bold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[#201a18] disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Email...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


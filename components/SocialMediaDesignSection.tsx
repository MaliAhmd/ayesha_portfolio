"use client";

import { useState, useEffect } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function SocialMediaDesignSection() {
  const [selectedOrg, setSelectedOrg] = useState<string>("tedx");
  const [activeModalItem, setActiveModalItem] = useState<{
    title: string;
    images?: string[];
    img?: string;
    org: string;
  } | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState<number>(0);
  const [cabinetIdx, setCabinetIdx] = useState<number>(0);
  const [movieIdx, setMovieIdx] = useState<number>(0);
  const [collabIdx, setCollabIdx] = useState<number>(0);
  const [certIdx, setCertIdx] = useState<number>(0);
  const [wohCabinetIdx, setWohCabinetIdx] = useState<number>(0);
  const [wohDonationIdx, setWohDonationIdx] = useState<number>(0);
  const [wohCertIdx, setWohCertIdx] = useState<number>(0);
  const [tedxExecIdx, setTedxExecIdx] = useState<number>(0);
  const [tedxSpeakerIdx, setTedxSpeakerIdx] = useState<number>(0);
  const [tedxIdCardIdx, setTedxIdCardIdx] = useState<number>(0);

  const cabinetImages = [
    "/Cabinet/0.jpeg",
    "/Cabinet/1.jpeg",
    "/Cabinet/2.jpeg",
    "/Cabinet/3.jpeg",
    "/Cabinet/4.jpeg",
    "/Cabinet/5.jpeg",
    "/Cabinet/6.jpeg",
  ];

  const movieImages = [
    "/movie/1.jpeg",
    "/movie/2.jpeg",
  ];

  const collabImages = [
    "/collab/1.jpeg",
    "/collab/2.jpeg",
  ];

  const certImages = [
    "/certificates/1.jpeg",
    "/certificates/2.jpeg",
    "/certificates/3.jpeg",
    "/certificates/4.jpeg",
    "/certificates/5.jpeg",
    "/certificates/6.jpeg",
  ];

  // Wall of Hope Image Collections
  const wohCabinetImages = [
    "/Core Cabinet announcement/1.jpeg",
    "/Core Cabinet announcement/2.jpeg",
    "/Core Cabinet announcement/3.jpeg",
  ];

  const wohDonationImages = [
    "/Donation posts/1.jpeg",
    "/Donation posts/2.jpeg",
    "/Donation posts/3.jpeg",
  ];

  const wohCertImages = [
    "/WOH Certificates/1.jpeg",
    "/WOH Certificates/2.jpeg",
    "/WOH Certificates/3.jpeg",
  ];

  // TEDxQAU Image Collections
  const tedxExecImages = [
    "/Curators and Executives annt/1.jpeg",
    "/Curators and Executives annt/2.jpeg",
    "/Curators and Executives annt/3.jpeg",
    "/Curators and Executives annt/4.jpeg",
    "/Curators and Executives annt/5.jpeg",
    "/Curators and Executives annt/6.jpeg",
    "/Curators and Executives annt/7.jpeg",
  ];

  const tedxSpeakerImages = [
    "/Speakers/1.jpeg",
    "/Speakers/2.jpeg",
    "/Speakers/3.jpeg",
    "/Speakers/4.jpeg",
  ];

  const tedxIdCardImages = [
    "/ID Cards/1.jpeg",
    "/ID Cards/2.jpeg",
    "/ID Cards/3.jpeg",
    "/ID Cards/4.jpeg",
    "/ID Cards/5.jpeg",
    "/ID Cards/6.jpeg",
    "/ID Cards/7.jpeg",
  ];

  // Auto-swipe Cabinet images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCabinetIdx((prev) => (prev + 1) % cabinetImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [cabinetImages.length]);

  // Auto-swipe Movie images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMovieIdx((prev) => (prev + 1) % movieImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [movieImages.length]);

  // Auto-swipe Collab images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCollabIdx((prev) => (prev + 1) % collabImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [collabImages.length]);

  // Auto-swipe Certificates every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCertIdx((prev) => (prev + 1) % certImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [certImages.length]);

  // Auto-swipe Wall of Hope Core Cabinet images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWohCabinetIdx((prev) => (prev + 1) % wohCabinetImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [wohCabinetImages.length]);

  // Auto-swipe Wall of Hope Donation images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWohDonationIdx((prev) => (prev + 1) % wohDonationImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [wohDonationImages.length]);

  // Auto-swipe Wall of Hope Certificates every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWohCertIdx((prev) => (prev + 1) % wohCertImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [wohCertImages.length]);

  // Auto-swipe TEDx Curators & Executives images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTedxExecIdx((prev) => (prev + 1) % tedxExecImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [tedxExecImages.length]);

  // Auto-swipe TEDx Speaker images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTedxSpeakerIdx((prev) => (prev + 1) % tedxSpeakerImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [tedxSpeakerImages.length]);

  // Auto-swipe TEDx ID Card images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTedxIdCardIdx((prev) => (prev + 1) % tedxIdCardImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [tedxIdCardImages.length]);

  // Keyboard navigation for image modal preview
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem || !activeModalItem.images) return;
      const total = activeModalItem.images.length;
      if (e.key === "Escape") {
        setActiveModalItem(null);
      } else if (e.key === "ArrowLeft" && total > 1) {
        setModalImageIdx((prev) => (prev - 1 + total) % total);
      } else if (e.key === "ArrowRight" && total > 1) {
        setModalImageIdx((prev) => (prev + 1) % total);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalItem]);

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
        {
          title: "Curators & Executives Announcement",
          subtitle: "Executive Team Teasers & Reveals (7 Photos)",
          images: tedxExecImages,
          isTedxExec: true,
        },
        {
          title: "Speaker Announcements",
          subtitle: "Official Speaker Teasers & Profiles (4 Photos)",
          images: tedxSpeakerImages,
          isTedxSpeaker: true,
        },
        {
          title: "ID Cards & Event Badges",
          subtitle: "Official Pass & Credentials Design (7 Photos)",
          images: tedxIdCardImages,
          isTedxIdCard: true,
        },
        {
          title: "TEDx Newsletter",
          subtitle: "Official Event Newsletter & Updates",
          img: "/Newsletter/1.jpeg",
        },
        {
          title: "Certificate of Appreciation",
          subtitle: "Official TEDx Certificate • High Res",
          img: "/images/certificate_image.jpeg",
        },
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
        {
          title: "QMC Core Cabinet 2024-2025",
          subtitle: "Official Cabinet Reveal (7 Photos)",
          images: cabinetImages,
          isCabinet: true,
        },
        {
          title: "Movie Day Event Campaign",
          subtitle: "Campus Movie Day Promotion (2 Photos)",
          images: movieImages,
          isMovie: true,
        },
        {
          title: "Collaboration Campaigns",
          subtitle: "Brand & Event Collaborations (2 Photos)",
          images: collabImages,
          isCollab: true,
        },
        {
          title: "Certificates & Recognitions",
          subtitle: "QMC Certificates of Appreciation (6 Photos)",
          images: certImages,
          isCert: true,
        },
        { title: "Core Team Announcement", subtitle: "Official QMC Core Team Reveal", img: "/QMC/Core Team.jpeg" },
        { title: "Media Learning Workshop", subtitle: "Interactive Workshop Series", img: "/QMC/Media Learning Workshop.jpeg" },
        { title: "QAU Media Fest Presents", subtitle: "Annual Media Fest Announcement", img: "/QMC/QAU Medi Fest Presents.jpeg" },
        { title: "QAU Media Fest Official Poster", subtitle: "Flagship Event Campaign Poster", img: "/QMC/QAU Media Fest.jpeg" },
        { title: "QMC Media Learning Fest", subtitle: "Skills & Learning Festival", img: "/QMC/QMC Media Learning FEST.jpeg" },
        { title: "Join QMC Recruitment Campaign", subtitle: "Student Recruitment Drive", img: "/QMC/join our QMC.jpeg" },
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
        {
          title: "Core Cabinet Announcement",
          subtitle: "Official Cabinet Reveal (3 Photos)",
          images: wohCabinetImages,
          isWohCabinet: true,
        },
        {
          title: "Donation Posts",
          subtitle: "Social Cause & Donation Drive (3 Photos)",
          images: wohDonationImages,
          isWohDonation: true,
        },
        {
          title: "Creative Competition",
          subtitle: "Design & Poster Contest",
          img: "/Creative competition/2.jpeg",
        },
        {
          title: "Labour Day",
          subtitle: "Awareness & Tribute Post",
          img: "/Labour day/1.jpeg",
        },
        {
          title: "Old Age Home Visit",
          subtitle: "Community Support & Social Drive",
          img: "/Old age home visit/1.jpeg",
        },
        {
          title: "Online Webinar",
          subtitle: "Virtual Event & Session Banner",
          img: "/Online webinar/1.jpeg",
        },
        {
          title: "WOH Certificates",
          subtitle: "Certificates of Appreciation (3 Photos)",
          images: wohCertImages,
          isWohCert: true,
        },
      ],
      colorAccent: "from-[#ee4b56]/15 to-[#201a18]/20",
    },
  ];

  const currentOrg = orgs.find((o) => o.id === selectedOrg) || orgs[0];

  const handleOpenModal = (item: any) => {
    const itemImages = item.images && item.images.length > 0
      ? item.images
      : item.img
      ? [item.img]
      : [];

    if (itemImages.length > 0) {
      const activeIdx = item.isCabinet
        ? cabinetIdx
        : item.isMovie
        ? movieIdx
        : item.isCollab
        ? collabIdx
        : item.isCert
        ? certIdx
        : item.isWohCabinet
        ? wohCabinetIdx
        : item.isWohDonation
        ? wohDonationIdx
        : item.isWohCert
        ? wohCertIdx
        : item.isTedxExec
        ? tedxExecIdx
        : item.isTedxSpeaker
        ? tedxSpeakerIdx
        : item.isTedxIdCard
        ? tedxIdCardIdx
        : 0;

      setActiveModalItem({
        title: item.title,
        images: itemImages,
        org: currentOrg.name,
      });
      setModalImageIdx(activeIdx < itemImages.length ? activeIdx : 0);
    }
  };

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
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all border-2 flex items-center gap-2 cursor-pointer ${selectedOrg === org.id
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
        <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-2xl p-5 sm:p-8 lg:p-12 space-y-8 sm:space-y-10">

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

            <div className="p-5 rounded-2xl bg-[#f7f4ed] border border-[#201a18]/15 space-y-2 lg:w-72 shrink-0">
              <span className="text-[11px] font-bold text-[#201a18]/60 uppercase block">Key Deliverables:</span>
              <div className="flex flex-wrap gap-1">
                {currentOrg.deliverables.map((del, i) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-[#201a18]/15 text-[#201a18]">
                    • {del}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL SHOWCASE GRID */}
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
              {currentOrg.showcase.map((item: any, idx: number) => {
                const isMultiImage = Boolean(item.images && item.images.length > 0);
                const activeIdx = item.isCabinet
                  ? cabinetIdx
                  : item.isMovie
                  ? movieIdx
                  : item.isCollab
                  ? collabIdx
                  : item.isCert
                  ? certIdx
                  : item.isWohCabinet
                  ? wohCabinetIdx
                  : item.isWohDonation
                  ? wohDonationIdx
                  : item.isWohCert
                  ? wohCertIdx
                  : item.isTedxExec
                  ? tedxExecIdx
                  : item.isTedxSpeaker
                  ? tedxSpeakerIdx
                  : item.isTedxIdCard
                  ? tedxIdCardIdx
                  : 0;
                const currentDisplayImg = isMultiImage ? item.images[activeIdx] : item.img;
                const hasImage = Boolean(currentDisplayImg);


                return (
                  <div
                    key={idx}
                    onClick={() => hasImage && handleOpenModal(item)}
                    className={`group rounded-2xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col justify-between ${hasImage ? "cursor-pointer hover:border-[#ee4b56]" : ""
                      }`}
                  >
                    {/* Mockup Preview Area */}
                    <div className={`h-64 sm:h-72 p-4 bg-gradient-to-br ${currentOrg.colorAccent} border-b-2 border-[#201a18] flex flex-col justify-between relative overflow-hidden`}>

                      <div className="flex items-center justify-between z-10">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#201a18] border border-[#201a18]/20 backdrop-blur-sm">
                          {currentOrg.name}
                        </span>
                      </div>

                      {/* Central Design Element / Real Graphic Image */}
                      {hasImage ? (
                        <div className="absolute inset-0 pt-10 p-3 flex items-center justify-center bg-[#201a18]/5 backdrop-blur-xs">
                          <img
                            src={currentDisplayImg}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain rounded-xl border-2 border-[#201a18] shadow-lg group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      ) : (
                        <div className="text-center my-auto py-2">
                          <div className="w-12 h-12 rounded-xl bg-white text-[#201a18] group-hover:bg-[#ee4b56] group-hover:text-white flex items-center justify-center mx-auto border border-[#201a18] shadow-md transition-colors">
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-black text-[#201a18] mt-2 font-display-vintage">
                            {item.title}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between z-10 w-full">
                        {isMultiImage && (
                          <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                            {item.images.map((_: any, i: number) => (
                              <span
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${activeIdx === i ? "bg-[#ee4b56] w-3" : "bg-white/60"
                                  }`}
                              />
                            ))}
                          </div>
                        )}
                        <span className="text-[9px] font-bold text-[#201a18]/80 bg-white/90 px-2 py-0.5 rounded uppercase tracking-widest border border-[#201a18]/20 ml-auto">
                          {isMultiImage ? `Photo ${activeIdx + 1} of ${item.images.length}` : hasImage ? "Click to Expand" : `Asset #${idx + 1}`}
                        </span>
                      </div>
                    </div>

                    {/* Minimal Caption Footer */}
                    <div className="p-4 bg-white flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#201a18] group-hover:text-[#ee4b56] transition-colors">
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p className="text-[10px] text-[#201a18]/60">
                            {isMultiImage ? `Photo ${activeIdx + 1} of ${item.images.length}` : item.subtitle}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-[#201a18] font-bold group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* UNIVERSAL FULL RESOLUTION IMAGE MODAL WITH ARROW NAVIGATION */}
      {activeModalItem && activeModalItem.images && activeModalItem.images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl border-4 border-[#201a18] shadow-2xl p-4 sm:p-6 space-y-4">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#201a18]/10 pb-3">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56] text-white uppercase">
                  {activeModalItem.org}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#201a18] font-display-vintage mt-1">
                  {activeModalItem.title}
                </h4>
                {activeModalItem.images.length > 1 && (
                  <p className="text-xs font-bold text-[#ee4b56] mt-0.5">
                    Image {modalImageIdx + 1} of {activeModalItem.images.length}
                  </p>
                )}
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-10 h-10 rounded-full bg-[#201a18] text-white font-bold hover:bg-[#ee4b56] transition-colors flex items-center justify-center text-sm shadow-md shrink-0 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Image View & Arrow Navigation */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#201a18] bg-[#f7f4ed] p-2 flex items-center justify-center min-h-[50vh] max-h-[75vh]">

              {/* Left Arrow Button */}
              {activeModalItem.images.length > 1 && (
                <button
                  onClick={() =>
                    setModalImageIdx(
                      (prev) => (prev - 1 + activeModalItem.images!.length) % activeModalItem.images!.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#201a18]/90 text-white hover:bg-[#ee4b56] transition-all flex items-center justify-center shadow-2xl z-20 border-2 border-white hover:scale-110 cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
              )}

              <img
                src={activeModalItem.images[modalImageIdx]}
                alt={`${activeModalItem.title} - Image ${modalImageIdx + 1}`}
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-md transition-all duration-300"
              />

              {/* Right Arrow Button */}
              {activeModalItem.images.length > 1 && (
                <button
                  onClick={() =>
                    setModalImageIdx((prev) => (prev + 1) % activeModalItem.images!.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#201a18]/90 text-white hover:bg-[#ee4b56] transition-all flex items-center justify-center shadow-2xl z-20 border-2 border-white hover:scale-110 cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              )}
            </div>

            {/* Indicator Dots for Multi-Image Modal */}
            {activeModalItem.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-2">
                {activeModalItem.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModalImageIdx(i)}
                    className={`w-3 h-3 rounded-full transition-all border border-[#201a18] cursor-pointer ${
                      modalImageIdx === i ? "bg-[#ee4b56] scale-125" : "bg-[#201a18]/20 hover:bg-[#201a18]/50"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}

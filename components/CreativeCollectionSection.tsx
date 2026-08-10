"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ModalVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      autoPlay
      playsInline
      preload="auto"
      className="max-h-[70vh] max-w-full rounded-xl shadow-md"
    />
  );
}

export default function CreativeCollectionSection() {
  const [activeModalItem, setActiveModalItem] = useState<{
    title: string;
    subtitle?: string;
    images?: string[];
    img?: string;
    video?: string;
    isVideo?: boolean;
  } | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState<number>(0);

  const [lunchIdx, setLunchIdx] = useState<number>(0);
  const [crumbleIdx, setCrumbleIdx] = useState<number>(0);

  const lunchImages = [
    "/Lunch invites/1.jpeg",
    "/Lunch invites/2.jpeg",
  ];

  const crumbleImages = [
    "/Crumble project posters/1.jpeg",
    "/Crumble project posters/2.jpeg",
    "/Crumble project posters/3.jpeg",
  ];

  // 2s Auto-swap for Lunch Invites
  useEffect(() => {
    const timer = setInterval(() => {
      setLunchIdx((prev) => (prev + 1) % lunchImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [lunchImages.length]);

  // 2s Auto-swap for Crumble Project Posters
  useEffect(() => {
    const timer = setInterval(() => {
      setCrumbleIdx((prev) => (prev + 1) % crumbleImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [crumbleImages.length]);

  // Keyboard navigation for preview modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === "Escape") {
        setActiveModalItem(null);
        return;
      }
      if (activeModalItem.images && activeModalItem.images.length > 1) {
        const total = activeModalItem.images.length;
        if (e.key === "ArrowLeft") {
          setModalImageIdx((prev) => (prev - 1 + total) % total);
        } else if (e.key === "ArrowRight") {
          setModalImageIdx((prev) => (prev + 1) % total);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalItem]);

  const collectionItems = [
    {
      title: "Wedding Invitation Reel",
      subtitle: "Animated Motion Video Reel",
      video: "/Wedding Invitation Reel/1.mp4",
      isVideo: true,
      bg: "from-[#ee4b56]/20 to-[#201a18]/10",
      badge: "Video Reel",
    },
    {
      title: "Wedding Card",
      subtitle: "Luxury Celebration Card Design",
      img: "/Weddding Card/1.jpeg",
      bg: "from-[#201a18]/15 to-[#ee4b56]/15",
      badge: "Stationery Suite",
    },
    {
      title: "Lunch Invites",
      subtitle: "Custom Celebration Suite (2 Photos)",
      images: lunchImages,
      isLunch: true,
      bg: "from-[#ee4b56]/25 to-[#201a18]/5",
      badge: "Invitation Suite",
    },
    {
      title: "Graduation Ceremony",
      subtitle: "Commencement Event Graphic",
      img: "/Graduation ceremony/1.jpeg",
      bg: "from-[#201a18]/20 to-[#ee4b56]/20",
      badge: "Event Poster",
    },
    {
      title: "Crumble Project Posters",
      subtitle: "Creative Campaign Series (3 Photos)",
      images: crumbleImages,
      isCrumble: true,
      bg: "from-[#ee4b56]/15 to-[#201a18]/15",
      badge: "Poster Campaign",
    },
    {
      title: "Annual Dinner",
      subtitle: "Gala & Event Invitation",
      img: "/Annual dinner/1.jpeg",
      bg: "from-[#201a18]/10 to-[#ee4b56]/25",
      badge: "Event Invitation",
    },
  ];

  const handleOpenModal = (item: any) => {
    if (item.isVideo) {
      setActiveModalItem({
        title: item.title,
        subtitle: item.subtitle,
        video: item.video,
        isVideo: true,
      });
      setModalImageIdx(0);
    } else if (item.images && item.images.length > 0) {
      const activeIdx = item.isLunch ? lunchIdx : item.isCrumble ? crumbleIdx : 0;
      setActiveModalItem({
        title: item.title,
        subtitle: item.subtitle,
        images: item.images,
      });
      setModalImageIdx(activeIdx < item.images.length ? activeIdx : 0);
    } else if (item.img) {
      setActiveModalItem({
        title: item.title,
        subtitle: item.subtitle,
        images: [item.img],
        img: item.img,
      });
      setModalImageIdx(0);
    }
  };

  return (
    <section id="creative-collection" className="py-24 px-4 sm:px-6 lg:px-8 marble-bg-container relative overflow-hidden">
      <div className="marble-bg-overlay" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ee4b56] text-white text-xs font-bold uppercase tracking-widest border border-[#201a18]">
            Stationery &amp; Visual Explorations
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#201a18] font-display-vintage">
            CREATIVE <span className="coral-text-vintage inline-block">COLLECTION</span>
          </h2>
          <p className="text-base sm:text-lg text-[#201a18]/80 font-sans leading-relaxed">
            A curated collection of creative work, invitation designs, event posters, and motion reels created for special celebrations and personal projects.
          </p>
        </div>

        {/* INVITATION DESIGNS SUBSECTION */}
        <div className="rounded-3xl bg-white border-2 border-[#201a18] shadow-2xl p-5 sm:p-8 lg:p-12 space-y-8 sm:space-y-10">
          
          <div className="border-b-2 border-[#201a18]/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56] text-white uppercase">
                Custom Visual Portfolio
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#201a18] font-display-vintage mt-2">
                INVITATION DESIGNS &amp; CREATIVE ASSETS
              </h3>
              <p className="text-sm text-[#201a18]/75 mt-1 font-sans">
                Elegant invitation cards, campaign posters, and video motion reels.
              </p>
            </div>
            <span className="text-xs font-bold text-[#ee4b56] px-3.5 py-1.5 rounded-full bg-[#ee4b56]/10 border border-[#ee4b56]/20 shrink-0">
              {collectionItems.length} Creative Assets
            </span>
          </div>

          {/* ELEGANT MOCKUP CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionItems.map((item: any, idx: number) => {
              const isMultiImage = Boolean(item.images && item.images.length > 0);
              const activeIdx = item.isLunch ? lunchIdx : item.isCrumble ? crumbleIdx : 0;
              const currentDisplayImg = isMultiImage ? item.images[activeIdx] : item.img;

              return (
                <div
                  key={idx}
                  onClick={() => handleOpenModal(item)}
                  className="group rounded-3xl bg-[#f7f4ed] border-2 border-[#201a18] shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-[#ee4b56]"
                >
                  {/* Mockup Frame Container */}
                  <div className={`h-64 sm:h-72 p-4 bg-gradient-to-br ${item.bg} border-b-2 border-[#201a18] flex flex-col justify-between relative overflow-hidden`}>
                    
                    {/* Header Badge inside card */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#201a18] border border-[#201a18]/20 backdrop-blur-sm">
                        Creative Collection
                      </span>
                    </div>

                    {/* Content Display: Video or Image */}
                    {item.isVideo ? (
                      <div className="absolute inset-0 pt-10 p-3 flex items-center justify-center bg-[#201a18]/5">
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="max-h-full max-w-full object-contain rounded-xl border-2 border-[#201a18] shadow-lg group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 pt-10 p-3 flex items-center justify-center bg-[#201a18]/5">
                        <img
                          src={currentDisplayImg}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain rounded-xl border-2 border-[#201a18] shadow-lg group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    )}

                      <div className="flex items-center justify-between z-10 w-full mt-auto">
                        {isMultiImage && (
                          <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                            {item.images.map((_: any, i: number) => (
                              <span
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  activeIdx === i ? "bg-[#ee4b56] w-3" : "bg-white/60"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        <span className="text-[9px] font-bold text-[#201a18]/80 bg-white/90 px-2 py-0.5 rounded uppercase tracking-widest border border-[#201a18]/20 ml-auto">
                          {isMultiImage ? `Photo ${activeIdx + 1} of ${item.images.length}` : "Click to Expand"}
                        </span>
                      </div>

                  </div>

                  {/* Minimal Footer */}
                  <div className="p-4 bg-white flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#201a18] group-hover:text-[#ee4b56] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-[#201a18]/60">{item.subtitle}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* FULL RESOLUTION MEDIA PREVIEW MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl border-4 border-[#201a18] shadow-2xl p-4 sm:p-6 space-y-4">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#201a18]/10 pb-3">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ee4b56] text-white uppercase">
                  Creative Collection
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#201a18] font-display-vintage mt-1">
                  {activeModalItem.title}
                </h4>
                {activeModalItem.images && activeModalItem.images.length > 1 && (
                  <p className="text-xs font-bold text-[#ee4b56] mt-0.5">
                    Image {modalImageIdx + 1} of {activeModalItem.images.length}
                  </p>
                )}
                {activeModalItem.isVideo && (
                  <p className="text-xs font-bold text-[#ee4b56] mt-0.5">
                    Video Reel • Audio Enabled
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

            {/* Modal Content Frame (Video or Multi-Image) */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#201a18] bg-[#f7f4ed] p-2 flex items-center justify-center min-h-[50vh] max-h-[75vh]">

              {activeModalItem.isVideo ? (
                <ModalVideoPlayer src={activeModalItem.video!} />
              ) : (
                <>
                  {/* Left Arrow Button */}
                  {activeModalItem.images && activeModalItem.images.length > 1 && (
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
                    src={activeModalItem.images ? activeModalItem.images[modalImageIdx] : activeModalItem.img}
                    alt={activeModalItem.title}
                    className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-md transition-all duration-300"
                  />

                  {/* Right Arrow Button */}
                  {activeModalItem.images && activeModalItem.images.length > 1 && (
                    <button
                      onClick={() =>
                        setModalImageIdx(
                          (prev) => (prev + 1) % activeModalItem.images!.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#201a18]/90 text-white hover:bg-[#ee4b56] transition-all flex items-center justify-center shadow-2xl z-20 border-2 border-white hover:scale-110 cursor-pointer"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-7 h-7" />
                    </button>
                  )}
                </>
              )}

            </div>

            {/* Indicator Dots for Multi-Image Modal */}
            {activeModalItem.images && activeModalItem.images.length > 1 && (
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


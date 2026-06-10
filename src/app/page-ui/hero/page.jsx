"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/heromg1.png",
  "/images/heromg2.png",
  "/images/heromg3.png",
];

const verses = [
  { sa: "ॐ असतो मा सद्गमय", en: "Lead me from untruth to truth" },
  { sa: "ॐ तमसो मा ज्योतिर्गमय", en: "Lead me from darkness to light" },
  { sa: "ॐ मृत्योर्मा अमृतं गमय", en: "Lead me from death to immortality" },
  { sa: "ॐ सर्वे भवन्तु सुखिनः", en: "May all beings be happy" },
];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 6500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#1a0a02] -mt-8">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Vedic Pedia hero slide ${i + 1}`}
              className="h-full w-full min-w-full flex-none object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a02]/50 via-[#1a0a02]/35 to-[#1a0a02]/75" />

        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <svg
          width="700"
          height="700"
          viewBox="0 0 200 200"
          className="animate-spin-slow opacity-20"
          fill="none"
          stroke="#d5b267"
          strokeWidth="0.3"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              transform={`rotate(${(360 / 16) * i} 100 100)`}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M100,30 Q120,100 100,170 Q80,100 100,30 Z"
              transform={`rotate(${(360 / 8) * i} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <button
        aria-label="prev"
        onClick={prev}
        className="hidden md:flex items-center justify-center z-30 absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#d5b267]/40 text-[#f5d9a8] hover:bg-[#d5b267]/20 hover:border-[#d5b267] transition backdrop-blur-sm"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        aria-label="next"
        onClick={next}
        className="hidden md:flex items-center justify-center z-30 absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#d5b267]/40 text-[#f5d9a8] hover:bg-[#d5b267]/20 hover:border-[#d5b267] transition backdrop-blur-sm"
      >
        <ChevronRight size={22} />
      </button>

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="mb-6 relative">
          <div className="absolute inset-0 blur-2xl bg-[#d5b267]/50 rounded-full animate-pulse" />
          <span className="relative text-6xl md:text-7xl text-[#f5d9a8] drop-shadow-[0_0_25px_rgba(213,178,103,0.8)]">
            ॐ
          </span>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <span className="block w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#d5b267]" />
          <span className="text-[#d5b267] text-xs tracking-[0.4em] uppercase">
            Sanatan Dharma
          </span>
          <span className="block w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#d5b267]" />
        </div>

        <h1 className="font-serif text-white leading-[1.05] drop-shadow-2xl">
          <span className="block text-2xl md:text-3xl italic font-light text-[#f5e6cf] mb-2">
            Welcome to
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide bg-gradient-to-b from-[#f5d9a8] via-[#d5b267] to-[#8b5a2b] bg-clip-text text-transparent">
            The Vedic Pedia
          </span>
        </h1>

        <div className="mt-8 min-h-[70px] max-w-2xl">
          <p
            key={idx}
            className="text-xl md:text-2xl text-[#f5d9a8] font-serif animate-fade-in"
          >
            {verses[idx % verses.length].sa}
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-200/80 italic">
            {verses[idx % verses.length].en}
          </p>
        </div>

        <p className="mt-6 max-w-xl text-sm md:text-base text-gray-200/80 leading-relaxed">
          Unlock the eternal wisdom of the Vedas — immerse yourself in timeless
          knowledge, sacred mantras, and spiritual revelation.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => (window).openChatbot?.()}
            className="group relative px-7 py-3 bg-gradient-to-b from-[#d5b267] to-[#8b5a2b] text-[#1a0a02] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(213,178,103,0.6)] transition-all duration-300"
          >
            <span className="relative z-10">Ask Your Question</span>
          </button>
          <Link href={"/vedas"}>
            <button className="px-7 py-3 border border-[#d5b267]/60 text-[#f5d9a8] rounded-full hover:bg-[#d5b267]/10 hover:border-[#d5b267] transition backdrop-blur-sm">
              Explore Vedas →
            </button>
          </Link>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-[#d5b267]" : "w-2 bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Corner ornaments */}
      <svg className="absolute top-6 left-6 w-16 h-16 text-[#d5b267]/40 z-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 2 L2 30 M2 2 L30 2" />
        <circle cx="2" cy="2" r="3" />
      </svg>
      <svg className="absolute top-6 right-6 w-16 h-16 text-[#d5b267]/40 z-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M62 2 L62 30 M62 2 L34 2" />
        <circle cx="62" cy="2" r="3" />
      </svg>
      <svg className="absolute bottom-6 left-6 w-16 h-16 text-[#d5b267]/40 z-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 62 L2 34 M2 62 L30 62" />
        <circle cx="2" cy="62" r="3" />
      </svg>
      <svg className="absolute bottom-6 right-6 w-16 h-16 text-[#d5b267]/40 z-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M62 62 L62 34 M62 62 L34 62" />
        <circle cx="62" cy="62" r="3" />
      </svg>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 90s linear infinite; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </section>
  );
};

export default HeroSection;

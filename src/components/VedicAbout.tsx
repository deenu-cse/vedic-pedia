"use client";

import Link from "next/link";
import {  ArrowRight } from "lucide-react";

interface VedicAboutProps {
  pageName?: string;
  description?: string;
  showCtas?: boolean;
}

const VedicAbout = ({
  pageName = "The Vedic Pedia",
  description = "Immerse yourself in the timeless wisdom of the Vedas and ancient spiritual texts. Sacred sounds, divine vibrations — experience the power of ancient mantras.",
  showCtas = true,
}: VedicAboutProps) => {
  return (
    <section className="relative w-full overflow-hidden -mt-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7e9c9] via-[#ede6d6] to-[#e8c987]" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #713700 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <svg
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.12] pointer-events-none"
        viewBox="0 0 200 200"
        style={{ animation: "mandala-spin 120s linear infinite" }}
      >
        <g fill="none" stroke="#411900" strokeWidth="0.6">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="10"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={`p-${i}`}
              d="M100,40 Q120,70 100,100 Q80,70 100,40"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </g>
      </svg>
      <svg
        className="absolute -right-40 top-1/3 w-[480px] h-[480px] opacity-[0.10] pointer-events-none"
        viewBox="0 0 200 200"
        style={{ animation: "mandala-spin 180s linear infinite reverse" }}
      >
        <g fill="none" stroke="#582b0f" strokeWidth="0.6">
          <circle cx="100" cy="100" r="95" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="55" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="5"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
        </g>
      </svg>
      <div className="absolute top-10 right-10 text-7xl text-[#713700]/15 font-serif select-none">ॐ</div>
      <div className="absolute bottom-12 left-12 text-5xl text-[#713700]/15 font-serif select-none">卐</div>

      <div className="relative container mx-auto px-6 py-24 md:py-28">

        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-[#d5b267]/40 rounded-full" />
            <span className="relative text-5xl text-[#411900]" style={{ fontFamily: "Georgia, serif" }}>
              ॐ
            </span>
          </div>
        </div>

        <h1
          className="text-center text-[#411900] text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {pageName}
        </h1>

        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {["Explore", "Learn", "Transform"].map((t) => (
            <span
              key={t}
              className="px-4 py-1 rounded-full bg-[#411900]/5 border border-[#411900]/20 text-[#411900] text-xs uppercase tracking-widest font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="max-w-2xl mx-auto text-center text-[#411900]/80 text-base md:text-lg leading-relaxed mb-10">
          {description}
        </p>

        {showCtas && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="group relative bg-[#582b0f] text-white px-7 py-3 rounded-full hover:bg-[#391f0f] transition-all shadow-lg shadow-[#582b0f]/30 hover:shadow-[#582b0f]/50 hover:-translate-y-0.5">
              <span className="flex items-center gap-2 font-semibold">
                Ask Your Question
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Link href="/vedas">
              <button className="bg-gradient-to-r from-[#d5b267] to-[#b8924a] text-white px-7 py-3 rounded-full hover:from-[#b8924a] hover:to-[#947739] transition-all shadow-lg shadow-[#d5b267]/30 hover:-translate-y-0.5 font-semibold">
                Explore Vedas
              </button>
            </Link>
            <Link href="/SpiritualTeam">
              <button className="px-7 py-3 rounded-full border-2 border-[#411900]/30 text-[#411900] hover:bg-[#411900] hover:text-white transition-all font-semibold">
                Our Spiritual Team
              </button>
            </Link>
          </div>
        )}

        <div className="mt-14 flex justify-center items-center gap-3">
          <span className="h-px w-16 bg-[#411900]/30" />
          <span className="text-[#411900]/60 text-xl">❋</span>
          <span className="h-px w-16 bg-[#411900]/30" />
        </div>
      </div>
    </section>
  );
};

export default VedicAbout;

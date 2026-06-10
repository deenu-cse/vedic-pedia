'use client';
import Image from 'next/image';
import { Card } from '../../../components/ui/card';
import Link from 'next/link';

const vedas = [
  { name: 'Rig Veda', img: '/images/v1.png', desc: 'Hymns of cosmic wisdom' },
  { name: 'Sam Veda', img: '/images/v2.jpg', desc: 'Melodies of the divine' },
  { name: 'Yajur Veda', img: '/images/v3.jpg', desc: 'Sacred rituals & mantras' },
  { name: 'Atharav Veda', img: '/images/v4.jpg', desc: 'Knowledge of daily life' },
];

const FourVedas = () => {
  // duplicate for seamless infinite loop
  const loop = [...vedas, ...vedas, ...vedas];

  return (
    <div className="w-full bg-[#713700cd] p-6 md:p-12 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT — Text */}
        <div className="lg:w-2/5 w-full text-[#EDE6D6] space-y-5">
          <p className="uppercase tracking-[0.3em] text-sm text-[#f5d9a8]">
            Ancient Scriptures
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            The Four Sacred Vedas
          </h2>
          <div className="w-20 h-[2px] bg-[#f5d9a8]" />
          <p className="text-base md:text-lg leading-relaxed text-[#f5e6cf]">
            The Vedas are the oldest sacred texts of Sanatan Dharma — eternal
            knowledge revealed to ancient rishis. Each Veda is a gateway to
            spiritual wisdom, rituals, melodies, and the secrets of existence.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5e6cf]">
            Explore the timeless verses that have guided seekers for thousands
            of years on the path of dharma, truth, and liberation.
          </p>
          <Link
            href="/vedas"
            className="inline-block mt-3 px-6 py-3 bg-[#EDE6D6] text-[#411900] font-semibold hover:bg-[#f5d9a8] transition"
            style={{ boxShadow: '6px -5px #492401' }}
          >
            Explore All Vedas →
          </Link>
        </div>

        {/* RIGHT — Infinite Slider */}
        <div className="lg:w-3/5 w-full relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#713700cd] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#713700cd] to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-veda-scroll w-max py-6">
              {loop.map((v, i) => (
                <Link key={i} href={`/vedas/${v.name}`} className="shrink-0">
                  <Card
                    className="bg-[#EDE6D6] rounded-none p-7 w-56"
                    style={{
                      boxShadow:
                        '-2px 0px #0000, 10px -9px #492401, var(--tw-shadow)',
                    }}
                  >
                    <Image
                      src={v.img}
                      alt={v.name}
                      width={100}
                      height={100}
                      className="w-full h-32 rounded-full object-cover"
                    />
                    <br />
                    <h2 className="text-[#411900] font-semibold text-center">
                      {v.name}
                    </h2>
                    <p className="text-xs text-[#6b3a13] text-center mt-1">
                      {v.desc}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes veda-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-veda-scroll {
          animation: veda-scroll 25s linear infinite;
        }
        .animate-veda-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FourVedas;

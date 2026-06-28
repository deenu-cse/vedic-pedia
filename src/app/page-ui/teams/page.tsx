import React from 'react';

const teamMembers = [
  { id: 1, name: "Source of Energy", designation: "President", image: "/images/s1.jpg" },
  { id: 2, name: "Lord Hanuman ji", designation: "Vice president", image: "/images/s2.jpg" },
  { id: 3, name: "Shri Ram Chandra ji", designation: "", image: "/images/12.jpg" },
  { id: 4, name: "Yogiraj Shri Krishna ji", designation: "", image: "/images/13.jpg" },
  { id: 5, name: "Mahatma Buddha and Vedas", designation: "", image: "/images/14.jpg" },
  { id: 6, name: "Adi Shankaracharya ji and Vedas", designation: "", image: "/images/15.jpg" },
  { id: 7, name: "Sant Kabir Dass ji and Vedas", designation: "", image: "/images/16.png" },
  { id: 8, name: "Guru Nanak Dev ji and Vedas", designation: "", image: "/images/17.jpg" },
  { id: 9, name: "Maharishi Dayananda Saraswati ji and Vedas", designation: "", image: "/images/18.jpg" },
  { id: 10, name: "Sri Aurobindo ji and Vedas", designation: "", image: "/images/19.jpg" },
  { id: 11, name: "Maharishi Mahesh Yogi ji and Vedas", designation: "", image: "/images/20.jpg" },
  { id: 12, name: "Maharishi Ramana's life and Vedas", designation: "", image: "/images/21.jpg" },
];

const leaders = [
  { id: 1, name: "Pujya Swami Chidanand Saraswati Ji", designation: "", image: "/images/s5.jpg" },
  { id: 2, name: "Pujya Swami Atmanand Saraswati", designation: "", image: "/images/s4.jpg" },
];

/** Small ornamental divider — a thin gold line with a rotated diamond center */
const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <span className="h-px w-6 bg-[#C99A3C]/50" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#C99A3C]" />
    <span className="h-px w-6 bg-[#C99A3C]/50" />
  </div>
);

type Member = { id: number; name: string; designation: string; image: string };

const MemberCard = ({ member }: { member: Member }) => (
  <div
    className="
      group relative flex flex-col overflow-hidden
      rounded-t-[2.25rem] rounded-b-xl
      bg-[#FFFDF8] border border-[#C99A3C]/25
      shadow-[0_2px_10px_rgba(107,43,38,0.06)]
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(107,43,38,0.16)]
      hover:border-[#C99A3C]/60
    "
  >
    {/* image niche */}
    <div className="relative overflow-hidden rounded-t-[1.75rem] rounded-b-md aspect-[4/5] bg-[#F1E6D2] ring-1 ring-inset ring-[#C99A3C]/30">
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3B2415]/15 via-transparent to-transparent" />
    </div>

    <div className="flex flex-grow flex-col items-center px-3 pb-4 pt-3 text-center">
      <h3
        className="text-[13px] sm:text-[15px] leading-snug font-semibold text-[#5B2A22] font-['Cormorant_Garamond']"
      >
        {member.name}
      </h3>

      <Ornament className="mt-2 mb-1.5" />

      <p className="min-h-[14px] text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#C9621A] font-['Inter']">
        {member.designation}
      </p>
    </div>
  </div>
);

const LeaderCard = ({ leader }: { leader: Member }) => (
  <div
    className="
      group relative flex flex-col overflow-hidden
      rounded-t-[3rem] rounded-b-2xl
      bg-[#FFFDF8] border-2 border-[#C99A3C]/40
      shadow-[0_4px_16px_rgba(107,43,38,0.10)]
      transition-all duration-300
      hover:-translate-y-1.5 hover:shadow-[0_20px_36px_rgba(107,43,38,0.20)]
      hover:border-[#C99A3C]
    "
  >
    <div className="relative overflow-hidden rounded-t-[2.5rem] rounded-b-lg aspect-[4/3] bg-[#F1E6D2] ring-1 ring-inset ring-[#C99A3C]/35">
      <img
        src={leader.image}
        alt={leader.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3B2415]/20 via-transparent to-transparent" />
    </div>

    <div className="flex flex-grow flex-col items-center px-6 pb-7 pt-4 text-center">
      <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C99A3C] font-['Inter']">
        Spiritual Guide
      </span>
      <h3 className="text-lg sm:text-2xl font-semibold text-[#5B2A22] font-['Cormorant_Garamond']">
        {leader.name}
      </h3>
      <Ornament className="mt-3" />
    </div>
  </div>
);

const TeamsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBF5EA] py-16 px-4 md:px-8">
      {/* subtle gold dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #C99A3C 1px, transparent 1.6px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Ornament className="mb-4" />
          <h2 className="text-3xl md:text-5xl font-semibold text-[#6B2B26] mb-4 font-['Cormorant_Garamond']">
            Our Team
          </h2>
          <p className="text-[#5B4636] max-w-2xl mx-auto font-['Inter'] font-light">
            The divine forms and eternal teachers whose wisdom guides Vedic Pedia&apos;s path.
          </p>
        </div>

        {/* First Section: 12 Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 mb-20">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Second Section: Leaders */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#6B2B26] font-['Cormorant_Garamond']">
            Spiritual Leadership
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-3xl mx-auto">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default TeamsSection;
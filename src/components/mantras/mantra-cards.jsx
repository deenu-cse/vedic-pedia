import { Sparkles, Brain, Shield, TrendingUp, Volume2, Wind, RefreshCw, MapPin } from "lucide-react";
import { Card } from "../ui/card";
const significance = [
  { icon: Sparkles, title: "Spiritual Growth", desc: "Deepen your connection with the divine." },
  { icon: Brain, title: "Mental Clarity & Focus", desc: "Enhance meditation and concentration." },
  { icon: Shield, title: "Healing & Protection", desc: "Purify mind and body from negativity." },
  { icon: TrendingUp, title: "Manifestation & Success", desc: "Attract positive energy and abundance." },
];
const howTo = [
  { icon: MapPin, title: "Find a Quiet Space", desc: "Minimize distractions for deeper focus." },
  { icon: Volume2, title: "Use Proper Pronunciation", desc: "Chant with clarity and intent." },
  { icon: Wind, title: "Breathe Mindfully", desc: "Sync your breath with each chant." },
  { icon: RefreshCw, title: "Stay Consistent", desc: "Regular practice amplifies the effects." },
];
const MantraCards = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#ede6d6] to-[#f0e0bc] py-20 px-4 overflow-hidden">
      {/* Faint sanskrit watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]"
      >
        <span className="text-[28rem] text-[#411900]" style={{ fontFamily: "Georgia, serif" }}>
          ॐ
        </span>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.4em] text-xs text-[#947739] font-semibold">
            The Path of Sound
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#411900] mt-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Why &amp; How to Chant
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Significance card */}
          <Card className="relative group h-full p-8 md:p-10 rounded-3xl border-0 overflow-hidden bg-gradient-to-br from-[#f7e9c9] to-[#f0d99a] shadow-[0_10px_40px_-15px_rgba(88,43,15,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(88,43,15,0.45)] transition-all duration-500">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#d5b267]/40 to-transparent blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl text-[#582b0f]" style={{ fontFamily: "Georgia, serif" }}>
                  ॐ
                </span>
                <span className="uppercase tracking-[0.3em] text-[10px] text-[#947739] font-bold">
                  Significance
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl text-[#411900] font-bold mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The Significance of Mantras
              </h3>
              <ul className="space-y-5">
                {significance.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#d5b267] to-[#947739] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <div>
                      <h4 className="text-[#411900] font-bold">{title}</h4>
                      <p className="text-[#5a3418] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          {/* How to Chant card */}
          <Card className="relative group h-full p-8 md:p-10 rounded-3xl border-0 overflow-hidden bg-gradient-to-br from-[#e88c376d] to-[#d5752eaa] shadow-[0_10px_40px_-15px_rgba(88,43,15,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(88,43,15,0.45)] transition-all duration-500">
            <div
              aria-hidden
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#582b0f]/30 to-transparent blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl text-[#582b0f]" style={{ fontFamily: "Georgia, serif" }}>
                  卐
                </span>
                <span className="uppercase tracking-[0.3em] text-[10px] text-[#582b0f] font-bold">
                  Practice
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl text-[#411900] font-bold mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                How to Chant
              </h3>
              <ul className="space-y-5">
                {howTo.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#582b0f] to-[#391f0f] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-[#f7e9c9]" />
                    </span>
                    <div>
                      <h4 className="text-[#411900] font-bold">{title}</h4>
                      <p className="text-[#5a3418] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default MantraCards;

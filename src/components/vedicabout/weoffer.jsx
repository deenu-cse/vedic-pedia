import { Sparkles, Brain, Shield, TrendingUp } from "lucide-react";

const offerings = [
    { icon: Sparkles, title: "Spiritual Growth", desc: "Deepen your connection with the divine." },
    { icon: Brain, title: "Mental Clarity & Focus", desc: "Enhance meditation and concentration." },
    { icon: Shield, title: "Healing & Protection", desc: "Purify the mind and body from negativity." },
    { icon: TrendingUp, title: "Manifestation & Success", desc: "Attract positive energy and abundance." },
];

const WhatWeOffer = () => {
    return (
        <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-br from-[#f7d9c4] via-[#f3c9a8] to-[#f7d9c4]">
            {/* Decorative rings */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-[#411900]/10" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full border-2 border-[#411900]/10" />
            <span className="absolute top-10 right-12 text-7xl text-[#411900]/10 select-none" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>

            <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-10 bg-[#411900]/50" />
                        <span className="text-[#411900] uppercase tracking-[0.35em] text-xs font-semibold">Our Gifts</span>
                    </div>

                    <h2 className="text-[#411900] text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                        What We Offer
                    </h2>
                    <p className="text-[#411900]/75 mb-8 max-w-md">
                        Four sacred pathways drawn from the timeless wisdom of the Vedas to nurture your body, mind, and soul.
                    </p>

                    <ul className="space-y-4">
                        {offerings.map(({ icon: Icon, title, desc }, i) => (
                            <li
                                key={i}
                                className="group flex items-start gap-4 p-4 rounded-2xl bg-[#ede6d6]/60 backdrop-blur-sm border border-[#d5b267]/40 hover:bg-[#ede6d6]/90 hover:border-[#d5b267] transition-all duration-300"
                            >
                                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#582b0f] to-[#411900] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-[#d5b267]" />
                                </div>
                                <div>
                                    <h3 className="text-[#411900] font-bold text-lg leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                        {title}
                                    </h3>
                                    <p className="text-[#411900]/75 text-sm mt-1">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Image with halo */}
                <div className="relative flex justify-center">
                    {/* Glow halo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#d5b267]/40 via-[#f7e9c9]/30 to-transparent blur-3xl" />
                    </div>
                    {/* Rotating mandala ring */}
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{ animation: 'mandala-spin 60s linear infinite' }}
                    >
                        <div className="w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-2 border-dashed border-[#582b0f]/30" />
                    </div>
                    <img
                        className="relative max-w-60 md:max-w-80 h-auto drop-shadow-2xl"
                        src="/images/vh1.png"
                        alt="Vedic offerings"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;

import { Card } from "../ui/card";
import { Eye, Users, Sparkles } from "lucide-react";

const items = [
    {
        icon: Eye,
        title: "Our Vision & Mission",
        glyph: "ॐ",
        gradient: "from-[#f7d9c4] to-[#f3c9a8]",
        paragraphs: [
            "Our mission is to preserve and spread the ancient wisdom of the Vedas, making it accessible to everyone. We aim to bridge the gap between traditional Vedic teachings and modern life.",
            "By integrating ancient knowledge with today's world, we empower people to discover their spiritual path and unlock their full potential.",
        ],
    },
    {
        icon: Users,
        title: "Who We Are",
        glyph: "卐",
        gradient: "from-[#ece2e1] to-[#e0d0cf]",
        paragraphs: [
            "We are a collective of spiritual seekers, scholars, and educators dedicated to sharing the teachings of the Vedas, including practitioners in meditation, yoga, and Sanskrit scriptures.",
            "Our goal is to create a supportive community where individuals can learn, practice, and grow together in their spiritual journey.",
        ],
    },
    {
        icon: Sparkles,
        title: "Why Vedic Knowledge Matters",
        glyph: "ॐ",
        gradient: "from-[#f7d9c4] to-[#f3c9a8]",
        paragraphs: [
            "The Vedas hold profound insights into the nature of life, consciousness, and the universe. They offer timeless wisdom on ethics, self-discipline, and self-realization.",
            "Understanding Vedic principles can lead to inner peace, a healthier lifestyle, and deeper spiritual fulfillment.",
        ],
    },
];

const VedicVision = () => {
    return (
        <section className="relative w-full py-20 px-4 bg-gradient-to-b from-[#f5f1ed] via-[#f7e9c9] to-[#f5f1ed] overflow-hidden">
            {/* Backdrop dots */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#411900 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            {/* Header */}
            <div className="relative max-w-3xl mx-auto text-center mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-px w-12 bg-[#411900]/40" />
                    <span className="text-[#411900] uppercase tracking-[0.35em] text-xs font-semibold">Our Foundation</span>
                    <span className="h-px w-12 bg-[#411900]/40" />
                </div>
                <h2 className="text-[#411900] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                    Guided by Ancient Wisdom
                </h2>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d5b267]" />
                    <span className="text-2xl text-[#582b0f]" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>
                    <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d5b267]" />
                </div>
            </div>

            {/* Cards */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                {items.map(({ icon: Icon, title, glyph, gradient, paragraphs }, i) => (
                    <Card
                        key={i}
                        className={`relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br ${gradient} border border-[#d5b267]/40 shadow-[0_10px_30px_-12px_rgba(65,25,0,0.25)] hover:shadow-[0_18px_40px_-12px_rgba(65,25,0,0.35)] transition-all duration-500 hover:-translate-y-1 flex flex-col group`}
                    >
                        {/* Watermark glyph */}
                        <span
                            className="absolute -right-3 -bottom-6 text-[140px] text-[#411900]/[0.07] leading-none select-none group-hover:text-[#411900]/[0.12] transition-colors duration-500"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            {glyph}
                        </span>

                        {/* Icon */}
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#582b0f] to-[#411900] flex items-center justify-center mb-5 shadow-lg">
                            <Icon className="w-7 h-7 text-[#d5b267]" />
                        </div>

                        <h3 className="relative text-[#411900] text-2xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                            {title}
                        </h3>
                        <div className="relative h-px w-12 bg-[#582b0f]/40 mb-4" />

                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="relative text-[#411900]/85 text-[15px] leading-relaxed mb-3 last:mb-0">
                                {p}
                            </p>
                        ))}
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default VedicVision;

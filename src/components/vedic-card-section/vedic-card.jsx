import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const vedicItems = [
    {
        title: "Rig Veda",
        sanskrit: "ऋग्वेद",
        description:
            "The oldest sacred text — hymns of praise to the cosmic forces and the eternal order of Rta.",
        gradient: "from-[#ff9a3d] to-[#e07a1f]",
        accent: "#fff5e6",
        glyph: "ॐ",
    },
    {
        title: "Sama Veda",
        sanskrit: "सामवेद",
        description:
            "The Veda of melodies and chants — the musical soul of the Vedas, sung in sacred rituals.",
        gradient: "from-[#F2D2BD] to-[#e8b994]",
        accent: "#5a3418",
        glyph: "卐",
    },
    {
        title: "Yajur Veda",
        sanskrit: "यजुर्वेद",
        description:
            "The Veda of sacred formulas — prose mantras guiding ritual sacrifice and inner discipline.",
        gradient: "from-[#F2D2BD] to-[#d9b48a]",
        accent: "#5a3418",
        glyph: "卍",
    },
    {
        title: "Atharva Veda",
        sanskrit: "अथर्ववेद",
        description:
            "The Veda of everyday wisdom — healing, philosophy, and protective hymns for daily life.",
        gradient: "from-[#F5DEB3] to-[#d5b267]",
        accent: "#5a3418",
        glyph: "🕉",
    },
];
const VedicCard = () => {
    return (
        <section className="relative w-full bg-[#EDE6D6] py-20 px-4 overflow-hidden pb-0">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 relative">
                <span className="uppercase tracking-[0.4em] text-xs text-[#947739] font-semibold">
                    Four Pillars of Eternal Knowledge
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold text-[#411900] mt-3"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    The Four <span className="italic text-[#713700]">Vedas</span>
                </h2>
                <div className="flex justify-center items-center gap-4 mt-5 text-[#d5b267]">
                    <span className="h-px w-16 bg-[#d5b267]/50" />
                    <span className="text-2xl" style={{ fontFamily: "Georgia, serif" }}>ॐ</span>
                    <span className="h-px w-16 bg-[#d5b267]/50" />
                </div>
                <p
                    className="mt-5 text-[#5a3418] text-base md:text-lg"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    Revealed to the rishis at the dawn of creation — timeless scriptures that form the
                    foundation of Sanatan Dharma.
                </p>
            </div>
            {/* Grid */}
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vedicItems.map((item, i) => (
                    <Card
                        key={i}
                        className={`group relative overflow-hidden rounded-2xl border-0 shadow-lg bg-gradient-to-br ${item.gradient} p-6 flex flex-col text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                    >
                        {/* Watermark glyph */}
                        <span
                            className="absolute -right-4 -bottom-6 text-[10rem] text-[#411900]/10 leading-none select-none pointer-events-none"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            {item.glyph}
                        </span>
                        {/* Icon ring */}
                        <div className="relative mx-auto mb-5">
                            <div
                                className="absolute inset-0 rounded-full border-2 border-dashed border-[#411900]/30"
                                style={{ animation: "mandala-spin 30s linear infinite" }}
                            />
                            <div className="w-20 h-20 rounded-full bg-[#411900]/10 backdrop-blur flex items-center justify-center m-1">
                                <BookOpen className="w-9 h-9 text-[#411900]" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div
                            className="text-2xl text-[#411900] mb-1"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            {item.sanskrit}
                        </div>
                        <h3
                            className="text-xl font-bold text-[#411900] mb-3"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            {item.title}
                        </h3>
                        <p
                            className="text-sm text-[#5a3418] mb-6 flex-1"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            {item.description}
                        </p>
                        <Link
                            href={`/vedas/${item.title}`}
                            className="relative inline-flex items-center justify-center gap-2 bg-[#411900] text-[#f7e9c9] py-2.5 px-5 rounded-full font-semibold text-sm transition-all hover:bg-[#713700] hover:gap-3"
                        >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Card>
                ))}
            </div>
            {/* Featured banner */}
            <div className="relative max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://i.pinimg.com/736x/06/22/1e/06221e6b4422e9b31eb22d7d0eb6e003.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#411900]/80 via-[#411900]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <div className="text-3xl text-[#d5b267] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                            ॐ
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#f7e9c9]"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Eternal Wisdom
                        </h3>
                        <p className="text-[#ede6d6] text-sm mt-1" style={{ fontFamily: "Georgia, serif" }}>
                            The Vedas — light that guides every age.
                        </p>
                    </div>
                </div>
                <div
                    className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://i.pinimg.com/736x/af/16/fa/af16fa502f36f30a50571d335d24ede4.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#713700]/80 via-[#713700]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <div className="text-3xl text-[#d5b267] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                            卐
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#f7e9c9]"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Sacred Heritage
                        </h3>
                        <p className="text-[#ede6d6] text-sm mt-1" style={{ fontFamily: "Georgia, serif" }}>
                            Preserved by rishis — gifted to humanity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default VedicCard;
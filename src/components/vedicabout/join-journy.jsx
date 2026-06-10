import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import Image from "next/image";

const JoinJourny = () => {
    return (
        <section className="relative w-full py-24 px-4 overflow-hidden bg-gradient-to-br from-[#ede6d6] via-[#f7e9c9] to-[#ede6d6] pb-0">
            {/* Backdrop */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#411900 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            {/* Rotating mandala */}
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] pointer-events-none opacity-20"
                style={{ animation: 'mandala-spin 120s linear infinite' }}
            >
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#582b0f]" />
                <div className="absolute inset-8 rounded-full border border-[#582b0f]/60" />
            </div>

            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-12 bg-[#411900]/40" />
                    <span className="text-[#411900] uppercase tracking-[0.35em] text-xs font-semibold">Begin Today</span>
                    <span className="h-px w-12 bg-[#411900]/40" />
                </div>

                <span className="text-5xl text-[#582b0f] drop-shadow" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>

                <h2 className="text-[#411900] text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    Join Our Sacred Journey
                </h2>

                <p className="text-[#411900]/80 max-w-2xl text-base md:text-lg leading-relaxed">
                    Step onto an ancient path where wisdom meets the modern soul. Walk with us through the eternal teachings
                    of the Vedas and discover the divine spark that has guided seekers for thousands of years.
                </p>

                <div className="flex items-center gap-3 my-2">
                    <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d5b267]" />
                    <span className="text-xl text-[#582b0f]">✦</span>
                    <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d5b267]" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <button className="group inline-flex items-center justify-center gap-2 bg-[#582b0f] hover:bg-[#411900] text-[#f7e9c9] px-7 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-[#d5b267]/40">
                        <MessageCircleQuestion className="w-5 h-5" />
                        Ask Your Question
                    </button>
                    <Link href={'/vedas'}>
                        <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d5b267] to-[#b8924f] hover:from-[#b8924f] hover:to-[#947739] text-[#411900] px-7 py-3 text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-[#582b0f]/20">
                            Explore Vedas
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-8">
                <Image
                    src="/images/border.png"
                    alt="Vedic Border"
                    width={1920}
                    height={150}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
        </section>
    );
};

export default JoinJourny;

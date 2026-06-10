import Image from "next/image";
import AudioCards from "../../components/mantras/audia-card"
import MantraCards from "../../components/mantras/mantra-cards"
import VedicAbout from "../../components/VedicAbout"

const MantraPedia = () => {
    return (
        <>
            <VedicAbout
                pageName="Mantras"
                tagline="Sacred Vibrations"
                description="Sacred chants for daily practice — vibrations that align body, mind, and soul with the cosmic rhythm."
            />
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f7e9c9] via-[#f1efea] to-[#ede6d6] py-20 px-4">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] opacity-10"
                    style={{ animation: "mandala-spin 140s linear infinite" }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full text-[#582b0f]">
                        <g fill="none" stroke="currentColor" strokeWidth="0.6">
                            <circle cx="100" cy="100" r="90" />
                            <circle cx="100" cy="100" r="70" />
                            <circle cx="100" cy="100" r="50" />
                            {Array.from({ length: 24 }).map((_, i) => (
                                <line
                                    key={i}
                                    x1="100"
                                    y1="10"
                                    x2="100"
                                    y2="190"
                                    transform={`rotate(${i * 15} 100 100)`}
                                />
                            ))}
                        </g>
                    </svg>
                </div>
                <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-40 -left-40 w-[480px] h-[480px] opacity-10"
                    style={{ animation: "mandala-spin 180s linear infinite reverse" }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full text-[#411900]">
                        <g fill="none" stroke="currentColor" strokeWidth="0.5">
                            <circle cx="100" cy="100" r="95" />
                            <circle cx="100" cy="100" r="75" />
                            <circle cx="100" cy="100" r="55" />
                            <circle cx="100" cy="100" r="35" />
                            {Array.from({ length: 16 }).map((_, i) => (
                                <path
                                    key={i}
                                    d="M100 20 Q120 60 100 100 Q80 60 100 20"
                                    transform={`rotate(${i * 22.5} 100 100)`}
                                />
                            ))}
                        </g>
                    </svg>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <span className="inline-block uppercase tracking-[0.4em] text-xs text-[#947739] font-semibold mb-4">
                        ॥ Sacred Sound ॥
                    </span>
                    <h1
                        className="text-3xl md:text-5xl font-bold text-[#411900] leading-tight mb-6"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        Mantras — The Sacred Vibrations
                        <span className="block text-[#582b0f] italic text-2xl md:text-3xl mt-2">
                            of the Universe
                        </span>
                    </h1>
                    <div className="flex items-center justify-center gap-4 my-6">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d5b267]" />
                        <span className="text-4xl text-[#d5b267]" style={{ fontFamily: "Georgia, serif" }}>
                            ॐ
                        </span>
                        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d5b267]" />
                    </div>
                    <p
                        className="text-[#5a3418] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        The word <em className="text-[#411900] font-semibold">Rama</em> appears in the
                        Vedas, but refers to the Supreme Being — the all-pervading Divine — not to
                        Maryada Purushotam Shri Ram Chandra ji, the king of Ayodhya. Shri Ram Chandra ji
                        himself studied the Vedas in his gurukul life during the Treta yuga, whereas the
                        Vedas were revealed to the rishis at the very dawn of human creation, in the
                        Satayuga — the first age.
                    </p>
                </div>
            </section>
            <MantraCards />
            <AudioCards />
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
        </>
    );
};
export default MantraPedia;
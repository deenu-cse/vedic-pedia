"use client";
import Link from 'next/link';
import { Card } from '../../../components/ui/card';
import { Sparkles, BookOpen, ScrollText, Flame, ArrowRight } from 'lucide-react';

const AskYourQuestion = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f7e9c9] via-[#f1dca3] to-[#e8c987] py-10 px-4">
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d5b267]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#7a3b0c]/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #492401 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative max-w-6xl mx-auto text-center mb-8">
                <h2 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-[#411900]">
                    Seek. Read. Awaken.
                </h2>
                <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="h-px w-16 bg-[#492401]/40" />
                    <span className="text-[#7a3b0c] text-2xl">ॐ</span>
                    <span className="h-px w-16 bg-[#492401]/40" />
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7a3b0c] to-[#411900] rounded-3xl rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                    <div className="relative bg-gradient-to-br from-[#5a2d0c] to-[#2e1505] rounded-3xl p-8 h-full text-[#f8dfa3] shadow-2xl">
                        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d5b267]">
                            <Flame className="w-4 h-4" /> Guidance
                        </div>
                        <h3 className="mt-4 text-3xl font-serif font-bold text-[#f5d9a8]">
                            Ask Your Question
                        </h3>
                        <p className="mt-4 text-[#e8c987]/85 leading-relaxed text-sm">
                            Vedas refer to <em>Krishna</em> as the Omnipotent Lord who induces all
                            beings to act — not Yogiraj Shri Krishna of Dwarika. Find clarity on
                            scripture, dharma, and the eternal truths.
                        </p>

                        <ul className="mt-6 space-y-2 text-sm text-[#f8dfa3]/90">
                            <li className="flex gap-2"><span className="text-[#d5b267]">✦</span> Rooted in original scripture</li>
                            <li className="flex gap-2"><span className="text-[#d5b267]">✦</span> Answered by learned scholars</li>
                            <li className="flex gap-2"><span className="text-[#d5b267]">✦</span> Free and open to all seekers</li>
                        </ul>

                        <button
                            onClick={() => (window).openChatbot?.()}
                            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#d5b267] to-[#b8893a] hover:from-[#e8c987] hover:to-[#d5b267] text-[#2e1505] font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-[#d5b267]/40">
                            Ask Here <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="relative bg-[#fff8e7]/80 backdrop-blur rounded-3xl p-6 border border-[#492401]/15 shadow-xl flex flex-col">
                    <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#7a3b0c]">
                        <BookOpen className="w-4 h-4" /> Sacred Texts
                    </div>
                    <h3 className="mt-3 text-2xl font-serif font-bold text-[#411900]">
                        Explore the eternal scriptures
                    </h3>

                    <div className="mt-5 grid grid-cols-2 gap-3 flex-1">
                        <Card className="relative overflow-hidden bg-gradient-to-br from-[#f8dfa3] to-[#e8c987] border-[#492401]/20 p-5 flex flex-col justify-between min-h-[160px] group cursor-pointer hover:-translate-y-1 transition-transform">
                            <ScrollText className="w-6 h-6 text-[#492401]" />
                            <div>
                                <p className="text-[10px] tracking-widest uppercase text-[#7a3b0c]">4 Books</p>
                                <h4 className="text-xl font-bold text-[#411900]">Vedas</h4>
                            </div>
                            <span className="absolute -right-6 -bottom-6 text-7xl font-serif text-[#492401]/10 group-hover:text-[#492401]/20 transition">ॐ</span>
                        </Card>

                        <Card className="relative overflow-hidden bg-gradient-to-br from-[#492401] to-[#2e1505] border-[#492401] p-5 flex flex-col justify-between min-h-[160px] group cursor-pointer hover:-translate-y-1 transition-transform">
                            <ScrollText className="w-6 h-6 text-[#f8dfa3]" />
                            <div>
                                <p className="text-[10px] tracking-widest uppercase text-[#d5b267]">108 Texts</p>
                                <h4 className="text-xl font-bold text-[#f8dfa3]">Upanishads</h4>
                            </div>
                            <span className="absolute -right-6 -bottom-6 text-7xl font-serif text-[#d5b267]/15 group-hover:text-[#d5b267]/25 transition">ॐ</span>
                        </Card>
                    </div>

                    <Link href="/vedas">
                        <button className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#411900] hover:bg-[#5a2d0c] text-[#f8dfa3] font-semibold py-3 rounded-full transition-all">
                            Explore Our Sacred Texts <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>

                {/* RIGHT — Mantra of the day */}
                <Link href="/mantrapedia" className="group">
                    <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#d5b267] via-[#b8893a] to-[#492401] shadow-xl">
                        <div className="h-full rounded-[22px] bg-gradient-to-br from-[#fff8e7] to-[#f1dca3] p-6 flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#7a3b0c]">
                                    <Sparkles className="w-4 h-4" /> Mantra
                                </div>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-[#492401] text-[#f8dfa3] tracking-widest">TODAY</span>
                            </div>

                            <div className="mt-6 flex flex-col items-center text-center flex-1 justify-center">
                                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#492401] to-[#7a3b0c] flex items-center justify-center shadow-inner">
                                    <span className="text-4xl text-[#f8dfa3] font-serif">ॐ</span>
                                    <div className="absolute inset-0 rounded-full border border-[#d5b267]/40 animate-ping" />
                                </div>

                                <p className="mt-5 text-[#7a3b0c] text-xs tracking-[0.3em] uppercase">Featuring Today</p>
                                <h4 className="mt-2 text-xl font-serif font-bold text-[#411900]">
                                    Gayatri Mantra
                                </h4>
                                <p className="mt-3 text-sm text-[#5a2d0c]/80 italic leading-relaxed">
                                    “ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं
                                    भर्गो देवस्य धीमहि…”
                                </p>
                            </div>

                            <div className="mt-6 inline-flex items-center justify-center gap-2 text-[#492401] font-semibold group-hover:gap-3 transition-all">
                                Read & Chant <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default AskYourQuestion;

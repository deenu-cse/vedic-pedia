'use client';

import Link from "next/link";
import { Card } from "../../../components/ui/card";
import AccordionDemo from "../faqs/page";
import { HelpCircle, Sparkles, BookOpen, ArrowRight, MessageCircleQuestion } from "lucide-react";
import Image from "next/image";

const articles = [
    {
        title: "ऋग्वेद",
        subtitle: "Rigveda",
        desc: "The oldest of the four Vedas — hymns to Agni, Indra, and Soma.",
        tag: "Veda · I",
        gradient: "from-[#d97706] to-[#7a3b0c]",
        text: "text-[#fff8e7]",
        accent: "text-[#fde9b8]",
    },
    {
        title: "यजुर्वेद",
        subtitle: "Yajurveda",
        desc: "Sacred mantras for rituals and sacrifices guiding priests.",
        tag: "Veda · II",
        gradient: "from-[#713700] to-[#2e1505]",
        text: "text-[#EDE6D6]",
        accent: "text-[#d5b267]",
    },
    {
        title: "सामवेद",
        subtitle: "Samaveda",
        desc: 'The "Veda of melodies" — basis of Indian classical music.',
        tag: "Veda · III",
        gradient: "from-[#7c4a1a] to-[#3f220b]",
        text: "text-[#fff8e7]",
        accent: "text-[#f8dfa3]",
    },
    {
        title: "अथर्ववेद",
        subtitle: "Atharvaveda",
        desc: "Everyday life — medicine, society, and mystical rituals.",
        tag: "Veda · IV",
        gradient: "from-[#3f220b] to-[#1a0a02]",
        text: "text-[#EDE6D6]",
        accent: "text-[#d5b267]",
    },
    {
        title: "गायत्री मंत्र",
        subtitle: "Gayatri Mantra",
        desc: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्।",
        tag: "Mantra",
        gradient: "from-[#9b2c2c] to-[#5a1414]",
        text: "text-[#fff8e7]",
        accent: "text-[#f8dfa3]",
    },
    {
        title: "महामृत्युंजय",
        subtitle: "Mahamrityunjaya",
        desc: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्…",
        tag: "Mantra",
        gradient: "from-[#1f5132] to-[#0d2a18]",
        text: "text-[#fff8e7]",
        accent: "text-[#c8e6c9]",
    },
];

const FaqsArticles = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff8e7] via-[#f7e9c9] to-[#f1dca3] py-8 px-4 pb-0">
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#d5b267]/20 blur-3xl" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #492401 1px, transparent 0)",
                    backgroundSize: "26px 26px",
                }}
            />

            <div className="relative max-w-6xl mx-auto text-center mb-8">
                <div className="mt-1 flex items-center justify-center gap-3">
                    <span className="h-px w-16 bg-[#492401]/40" />
                    <span className="text-[#7a3b0c] text-2xl">ॐ</span>
                    <span className="h-px w-16 bg-[#492401]/40" />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/5">
                    <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#d5b267] via-[#7a3b0c] to-[#411900] shadow-2xl">
                        <div className="h-full rounded-[22px] bg-gradient-to-br from-[#5a2d0c] via-[#411900] to-[#2e1505] p-3 md:p-5">

                            <h3 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-[#f5d9a8]">
                                Frequently Asked Questions
                            </h3>

                            <div className="mt-6 rounded-2xl bg-[#fff8e7]/95  shadow-inner">
                                <AccordionDemo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/5 flex flex-col gap-5">
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#7a3b0c]">
                            <BookOpen className="w-4 h-4" /> Featured Articles
                        </div>
                        <span className="text-xs text-[#7a3b0c]/70">{articles.length} reads</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {articles.map((a) => {
                            const card = (
                                <Card
                                    className={`relative overflow-hidden bg-gradient-to-br ${a.gradient} border-0 rounded-2xl p-5 h-72 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                                >
                                    <span className="absolute -right-6 -bottom-8 text-[8rem] font-serif leading-none text-white/5 group-hover:text-white/10 transition">
                                        ॐ
                                    </span>

                                    <div>
                                        <span className={`text-[10px] tracking-[0.25em] uppercase ${a.accent}`}>
                                            {a.tag}
                                        </span>
                                        <h3 className={`mt-2 text-xl font-serif font-bold ${a.text} leading-tight`}>
                                            {a.title}
                                        </h3>
                                        <p className={`text-xs ${a.accent} mt-0.5`}>{a.subtitle}</p>
                                    </div>

                                    <p className={`relative text-s[16px] text-white leading-relaxed ${a.text}/90 line-clamp-4`}>
                                        {a.desc}
                                    </p>

                                    <div className={`relative inline-flex items-center gap-1.5 text-xs font-semibold ${a.accent} group-hover:gap-2.5 transition-all`}>
                                        Read more <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </Card>
                            )

                            // If article is a Veda, link to dynamic vedas route
                            const isVeda = a.tag && a.tag.toLowerCase().includes('veda')
                            if (isVeda) {
                                return (
                                    <Link key={a.subtitle} href={`/vedas/${encodeURIComponent(a.subtitle)}`}>
                                        {card}
                                    </Link>
                                )
                            }

                            return (
                                <div key={a.subtitle}>
                                    {card}
                                </div>
                            )
                        })}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <button
                            onClick={() => (window).openChatbot?.()}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d5b267] to-[#b8893a] hover:from-[#e8c987] hover:to-[#d5b267] text-[#2e1505] font-bold py-3 px-5 rounded-full transition-all shadow-lg hover:shadow-[#d5b267]/40"
                        >
                            <MessageCircleQuestion className="w-5 h-5" /> Ask Here
                        </button>

                        <Link href="/about-us" className="flex-1">
                            <button className="w-full inline-flex items-center justify-center gap-2 bg-[#411900] hover:bg-[#5a2d0c] text-[#f8dfa3] font-bold py-3 px-5 rounded-full transition-all border border-[#d5b267]/30">
                                Explore More <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="w-full mt-8 -mx-4">
                <Image
                    src="/images/border.png"
                    alt="Section Border"
                    width={1920}
                    height={150}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
        </section>
    );
};

export default FaqsArticles;

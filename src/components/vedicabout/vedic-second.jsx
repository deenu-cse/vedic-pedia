const VedicSecond = () => {
    return (
        <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-b from-[#ede3cb] via-[#f3e8c9] to-[#ede3cb]">
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, #411900 1px, transparent 1px), radial-gradient(circle at 80% 70%, #411900 1px, transparent 1px)`,
                    backgroundSize: '60px 60px, 90px 90px',
                }}
            />
            <span className="absolute top-8 left-10 text-7xl text-[#411900]/10 select-none" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>
            <span className="absolute bottom-8 right-10 text-7xl text-[#411900]/10 select-none" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>

            <div className="relative max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-12 bg-[#411900]/40" />
                    <span className="text-[#411900] uppercase tracking-[0.35em] text-xs font-semibold">Sacred Verse</span>
                    <span className="h-px w-12 bg-[#411900]/40" />
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d5b267]" />
                    <span className="text-4xl text-[#582b0f]" style={{ fontFamily: 'Georgia, serif' }}>ॐ</span>
                    <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d5b267]" />
                </div>
                <blockquote className="relative">
                    <span className="absolute -top-6 -left-2 text-6xl text-[#d5b267] leading-none" style={{ fontFamily: 'Georgia, serif' }}>“</span>
                    <p
                        className="text-[#411900] text-lg md:text-xl leading-relaxed italic font-medium px-6"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Of course, the word Rama appears in Vedas but that refers to the Supreme being or a Divine manifestation of God.
                        Rama means all pervading. Vedas don't refer to Maryada Purushotam Shri Ram Chandra ji, the king of Ayodhya.
                        Shri Ram Chandra ji studied Vedas in their gurukul life. The period of Shri Ram Chandra ji, undoubtedly was Treta yuga,
                        the second age, whereas Vedas were given to the rishis just after the human creation i.e. the beginning of Satayuga, the first age.
                    </p>
                    <span className="absolute -bottom-10 -right-2 text-6xl text-[#d5b267] leading-none" style={{ fontFamily: 'Georgia, serif' }}>”</span>
                </blockquote>
            </div>
        </section>
    );
};

export default VedicSecond;

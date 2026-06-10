'use client';
import { useState, useEffect } from "react";
import { Menu, X, HeartHandshake, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const leftLinks = [
    { href: "/vedas", label: "Vedic Section" },
    { href: "/mantrapedia", label: "Mantras" },
    { href: "/about-us", label: "About Us" },
];

const rightLinks = [
    { href: "/yourcontribution", label: "Contribution", icon: HeartHandshake },
    { href: "/downloadapp", label: "Get App", icon: Download },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);
    const pathname = usePathname();
    const canUseTransparentNav = pathname === "/";

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!canUseTransparentNav) {
            setIsTransparent(false);
            return;
        }

        const hero = document.querySelector('#hero') || document.querySelector('.hero') || null;

        if (hero) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        setIsTransparent(entry.isIntersecting);
                    })
                },
                { root: null, threshold: 0, rootMargin: '-80px 0px 0px 0px' }
            );
            observer.observe(hero);
            return () => observer.disconnect();
        }

        const onScroll = () => setIsTransparent(window.scrollY < 80);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [canUseTransparentNav]);

    const linkClass = isTransparent
        ? "text-white/95 hover:text-[#f5d9a8]"
        : "text-[#411900] hover:text-[#FF5E03]";

    const navClass = isTransparent
        ? "border-white/10 bg-[#1a0a02]/20 shadow-none backdrop-blur-sm"
        : "border-[#8b5a2b]/15 bg-[#fff8e8]/90 shadow-lg shadow-[#411900]/10 backdrop-blur-xl";

    return (
        <>
            <nav className={`fixed left-0 top-0 z-[9999] w-full border-b transition-all duration-300 ${navClass}`}>
                <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">

                    <div className="hidden items-center gap-2 md:flex">
                        {leftLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${linkClass}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/" className="flex items-center justify-center">
                        <div className={`relative flex items-center justify-center rounded-full border px-5 py-2 ${isTransparent ? "border-white/15 bg-black/10" : "border-[#8b5a2b]/15 bg-white/55"}`}>
                            <img
                                src="/images/vh1.png"
                                alt="logo"
                                className="absolute h-10 w-10 opacity-70"
                            />

                            <span className={`relative z-50 whitespace-nowrap text-sm font-extrabold tracking-[0.28em] sm:text-base ${isTransparent ? 'text-white' : 'text-[#412102]'}`}>
                                VEDIC PEDIA
                            </span>
                        </div>
                    </Link>

                    <div className="hidden items-center justify-end gap-2 md:flex">
                        {rightLinks.map((item, index) => {
                            const Icon = item.icon;
                            const isPrimary = index === 0;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={
                                        isPrimary
                                            ? "inline-flex items-center gap-2 rounded-full bg-[#582b0f] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#582b0f]/20 transition hover:-translate-y-0.5 hover:bg-[#391f0f]"
                                            : `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${linkClass}`
                                    }
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex justify-end md:hidden">
                        <button
                            aria-label="Toggle navigation"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${isTransparent ? "border-white/20 bg-black/10 text-white" : "border-[#8b5a2b]/20 bg-white/60 text-[#411900]"}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#fff8e8] shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6 mt-16 space-y-3">
                    <button
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5a2b]/20 bg-white/60"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-6 h-6 text-[#713700]" />
                    </button>

                    {[...leftLinks, ...rightLinks].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-2xl border border-[#71370020] bg-white/45 px-4 py-3 text-[#713700] font-semibold text-base hover:bg-white hover:text-[#492401]"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;

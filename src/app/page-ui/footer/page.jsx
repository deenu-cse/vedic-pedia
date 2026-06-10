import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#420e0e] text-white pt-20 pb-10">

            {/* <div className="absolute top-0 left-0 w-full -translate-y-[98%]">
                <Image
                    src="/images/border.png"
                    alt="Footer Border"
                    width={1920}
                    height={150}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div> */}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div className="space-y-4">
                    <Image
                        src="/images/vh1.png"
                        alt="Vedic Logo"
                        width={120}
                        height={120}
                    />
                    <p className="text-sm">
                        Experience the divine wisdom of the Vedas and mantras.
                        Listen, read, and explore the eternal knowledge.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold border-b-2 pb-2 mb-4">
                        Vedic Knowledge
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/vedas/Rig Veda">Rigveda</Link></li>
                        <li><Link href="/vedas/Sam Veda">Samaveda</Link></li>
                        <li><Link href="/vedas/Yajur Veda">Yajurveda</Link></li>
                        <li><Link href="/vedas/Atharav Veda">Atharvaveda</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold border-b-2 pb-2 mb-4">
                        Powerful Mantras
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/mantrapedia">Veda Mantra</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm border-t border-gray-500 mt-10 pt-4">
                © {new Date().getFullYear()} Bhartiya Vedic Wisdom. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
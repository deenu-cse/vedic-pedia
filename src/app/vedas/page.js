import Image from "next/image";
import VedicCard from "../../components/vedic-card-section/vedic-card";
import VedicAbout from "../../components/VedicAbout";
import VedicSectionAbout from "../../components/vedic-section/vedic-section-about";

export default function VedasPage() {
    return (
        <main className="min-h-screen bg-[#EDE6D6]">
            <VedicAbout
                pageName="Vedas"
                tagline="The Eternal Scriptures"
                description="Timeless knowledge revealed to the rishis at the dawn of creation — the foundation of Sanatan Dharma."
            />

            <VedicSectionAbout />
            <VedicCard />

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
        </main>
    );
}
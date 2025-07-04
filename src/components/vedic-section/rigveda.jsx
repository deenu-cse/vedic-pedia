"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import VedicHero from "../../components/vedic-section/vedic-hero";
import VedicSectionAbout from "../../components/vedic-section/vedic-section-about";
import PDFModal from "../pdf-modal";

export default function AllVedas() {
    const params = useParams();
    let decodedVed = decodeURIComponent(params?.fourvedas || "").trim();

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
    const [currentPDFUrl, setCurrentPDFUrl] = useState("");
    const [currentFileName, setCurrentFileName] = useState("");

    const normalizeVedaName = (name) => {
        name = name.toLowerCase().replace(/\s+/g, " ").trim();
        if (name.includes("yjur")) return "yajur veda";
        if (name.includes("sam")) return "sam veda";
        if (name.includes("atharva")) return "atharva veda";
        if (name.includes("rig")) return "rig veda";
        return name;
    };

    const correctedVed = normalizeVedaName(decodedVed);

    const vedaConfig = {
        "rig veda": {
            folder: "rigvedamandal",
            sectionType: "MANDAL",
            sectionCount: 10,
            prefix: "RV"
        },
        "yajur veda": {
            folder: "yajurvedaandsamveda",
            sectionType: "MANDAL",
            sectionCount: 1,
            prefix: "YV"
        },
        "sam veda": {
            folder: "samvedamandal",
            sectionType: "KANDA",
            sectionCount: 10,
            prefix: "SV"
        },
        "atharav veda": {
            folder: "atharvavedakanda",
            sectionType: "KANDA",
            sectionCount: 17,
            prefix: "AV"
        }
    };

    const currentVeda = vedaConfig[correctedVed] || vedaConfig["rig veda"];
    const sections = Array.from({ length: currentVeda.sectionCount }, (_, i) => i + 1);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleSectionSelect = (section) => {
        setSelectedSection(section);
        const languageFormatted = selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1).toLowerCase();
        const fileName = `Study ${currentVeda.prefix} ${currentVeda.sectionType} ${section} ${languageFormatted}.pdf`;
        const pdfPath = `/pdf/${currentVeda.folder}/${encodeURIComponent(fileName)}`;
        
        setCurrentPDFUrl(pdfPath);
        setCurrentFileName(fileName);
        setIsPDFModalOpen(true);
    };

    const closePDFModal = () => {
        setIsPDFModalOpen(false);
        setCurrentPDFUrl("");
        setCurrentFileName("");
    };

    return (
        <>
            <div>
                <VedicHero />
            </div>
            <div>
                <VedicSectionAbout />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-[#713700] m-5">{correctedVed} - {selectedLanguage || "Select Language"}</h1>

                {!selectedLanguage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white min-w-[400px] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold text-center">Select Preferred Language</h2>
                            <br/>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => handleLanguageSelect("english")}
                                    className="bg-[#713700] w-full text-white px-4 py-2 rounded mr-2"
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageSelect("hindi")}
                                    className="bg-[#713700] w-full text-white px-4 py-2 rounded"
                                >
                                    Hindi
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {selectedLanguage && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleSectionSelect(section)}
                                className="bg-[#f5e6c7] hover:bg-[#d4a276] text-[#713700] p-4 rounded-lg shadow-md transition-colors duration-200"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">{section}</div>
                                    <div className="text-sm">
                                        {currentVeda.sectionType} {section}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* PDF Modal */}
                <PDFModal
                    isOpen={isPDFModalOpen}
                    onClose={closePDFModal}
                    pdfUrl={currentPDFUrl}
                    fileName={currentFileName}
                />
            </div>
        </>
    );
}
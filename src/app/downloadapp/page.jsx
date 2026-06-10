import { Button } from "@/components/ui/button";
import Image from "next/image";

const DownloadApp = () => {
    const iosAppLink = "https://apps.apple.com/app/vedic-pedia/id6746746000";
    const androidAppLink = "https://play.google.com/store/apps/details?id=com.vedic_pedia.vedic_pedia_mini";

    return (
        <div className="min-h-screen overflow-auto bg-gradient-to-b from-[#f5e6c7] to-[#d4a276] flex flex-col items-center justify-center py-14 px-4 pb-0">

            <h1 className="text-4xl md:text-5xl font-bold text-[#713700] mb-8 text-center mt-4">
                Download the Vedic Pedia App
            </h1>
            <p className="text-lg md:text-xl text-[#713700] mb-12 text-center max-w-2xl">
                Access the wisdom of the Vedas anytime, anywhere. Download the app for iOS or Android and explore the sacred texts in English or Hindi.
            </p>

            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 px-4">
                <div className="w-full max-w-md h-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-[#713700] mb-4">Download for iOS</h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                            <Image
                                width={150}
                                height={150}
                                src={'/images/appqr.jpg'}
                                className="w-full object-cover" />
                        </div>
                        <Button
                            asChild
                            className="bg-[#713700] text-white hover:bg-[#5a2c00] px-6 py-3 w-full md:w-auto text-center"
                        >
                            <a href={iosAppLink} target="_blank" rel="noopener noreferrer">
                                Download on the App Store
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="w-full max-w-md h-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-[#713700] mb-4">Download for Android</h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                            <Image
                                width={150}
                                height={150}
                                src={'/images/appqr2.png'}
                                className="w-full object-cover" />
                        </div>
                        <Button
                            asChild
                            className="bg-[#713700] text-white hover:bg-[#5a2c00] px-6 py-3 w-full md:w-auto text-center"
                        >
                            <a href={androidAppLink} target="_blank" rel="noopener noreferrer">
                                Get it on Google Play
                            </a>
                        </Button>
                    </div>
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
        </div>
    );
};

export default DownloadApp;
import { Image } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <div className="bg-[#EDE6D6] text-white py-20 w-full">
                <div className="container min-w-full mx-auto flex flex-col md:flex-row items-center justify-around">
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl text-[#411900] md:text-6xl font-bold mb-4">Welcome to <br /><span className="text-[#411900] font-extrabold">The Vedic Pedia</span></h1>
                        <div className="flex justify-center md:justify-start space-x-4 mb-4">
                            <span className="text-[#411900] border-r-2 border-[#411900] px-3 py-0 font-semibold text-lg">Explore</span>
                            <span className="text-[#411900] border-r-2 border-[#411900] px-3 py-0 font-semibold text-lg">Learn</span>
                            <span className="text-[#411900] border-r-2 border-[#411900] px-3 py-0 font-semibold text-lg">Transform</span>
                        </div>
                        <br />
                        <p className="mb-6 text-[#411900] text-base font-medium">Unlock the wisdom of the Vedas.<br />Immerse yourself in the timeless wisdom of the Vedas and ancient spiritual texts.</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <button className="bg-[#582b0f] text-white px-5 py-2 text-lg rounded-lg hover:bg-[#391f0f]">Ask Your Question</button>
                            <Link href={'/vedas'}>
                                <button className="bg-[#d5b267] text-white px-5 py-2 text-lg rounded-lg hover:bg-[#947739]">Explore Vedas</button>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <img className="max-w-80 h-auto" src="/images/vh1.png" alt="Vedic Image" />
                    </div>
                </div>
                <br />
                <br />
                <div className="text-center mt-10">
                    <Link href={'/vedas'}>
                        <button className="bg-[#582b0f] text-white px-7 py-2 text-base rounded-full hover:bg-[#391f0f]">Explore More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
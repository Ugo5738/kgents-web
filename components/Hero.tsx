
import React from 'react';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    AI Agents, Built for Your Workflow
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
                    Kgents designs, builds, and ships production-grade AI agents—fast, reliable, and integrated with the tools you already use.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                        onClick={onOpenModal}
                        className="bg-[#1F50FF] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform hover:scale-105 transform w-full sm:w-auto"
                    >
                        Talk to Technical Support
                    </button>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        title="Coming soon"
                        className="bg-white text-slate-700 font-semibold py-3 px-6 rounded-lg shadow-md border border-slate-200 hover:bg-slate-100 transition-colors w-full sm:w-auto"
                    >
                        Download One-Pager (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;


import React from 'react';

interface HeaderProps {
    onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    return (
        <header className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span role="img" aria-label="robot emoji">🤖</span>
                    <span>Kgents</span>
                </div>
                <button
                    onClick={onOpenModal}
                    className="hidden sm:inline-block bg-[#1F50FF] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F50FF]"
                >
                    Talk to Technical Support
                </button>
            </div>
        </header>
    );
};

export default Header;

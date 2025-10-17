
import React from 'react';
import XIcon from './icons/XIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const SocialLink: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#1F50FF] transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} Kgents. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                         <SocialLink href="#"><XIcon className="w-6 h-6" /></SocialLink>
                         <SocialLink href="#"><LinkedInIcon className="w-6 h-6" /></SocialLink>
                         <a href="mailto:support@kgents.example.com" className="text-slate-500 hover:text-[#1F50FF] transition-colors font-medium">Email Us</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-slate-400">
                    <p>Features: LocalStorage only · No login · Works offline · CSV/JSON export</p>
                    <p className="mt-2">Privacy Note: Lead form data is stored locally in your browser. You can export or delete it at any time from the contact form.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

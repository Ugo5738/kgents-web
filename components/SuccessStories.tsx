
import React from 'react';

interface SuccessTileProps {
    metric: string;
    description: string;
}

const SuccessTile: React.FC<SuccessTileProps> = ({ metric, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300">
        <p className="text-3xl font-extrabold text-[#1F50FF]">{metric}</p>
        <p className="mt-2 text-slate-600">{description}</p>
    </div>
);

const SuccessStories: React.FC = () => {
    return (
        <section id="success" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Success Stories</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Our agents deliver measurable results. Here are a few examples.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <SuccessTile metric="Support handle time ↓ 42%" description="SME helpdesk agent (L1 triage)" />
                    <SuccessTile metric="Lead response ↑ 3.1×" description="WhatsApp pre-qual bot" />
                    <SuccessTile metric="Ops hours saved 60+/mo" description="Back-office automation" />
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;

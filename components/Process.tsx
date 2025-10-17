
import React from 'react';

interface StepCardProps {
    step: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#1F50FF] text-white font-bold">
            {step}
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
    </div>
);

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">A streamlined process to get your AI agent from idea to production, efficiently.</p>
                </div>
                <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-10">
                    <StepCard step="1" title="Discover" description="We map your workflow, identify automation opportunities, and define clear success metrics." />
                    <StepCard step="2" title="Prototype" description="A rapid, functional prototype to validate the approach and gather early feedback." />
                    <StepCard step="3" title="Ship & Iterate" description="We deploy to your environment and provide ongoing support for continuous improvement." />
                </div>
            </div>
        </section>
    );
};

export default Process;

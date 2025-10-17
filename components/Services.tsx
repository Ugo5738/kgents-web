
import React from 'react';

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-[#1F50FF] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span className="text-slate-600">{children}</span>
    </li>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">What We Build</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            From intelligent automation to seamless integrations, we deliver AI solutions that drive real business outcomes.
                        </p>
                        <ul className="mt-8 space-y-4 text-lg">
                            <ServiceItem>Custom AI Agents for support, ops, and internal tools</ServiceItem>
                            <ServiceItem>RAG & knowledge assistants over your docs and data</ServiceItem>
                            <ServiceItem>Workflow automation and orchestration (n8n/temporal/http)</ServiceItem>
                            <ServiceItem>Integrations: Slack, WhatsApp, email, CRMs, data sources</ServiceItem>
                            <ServiceItem>Secure deployments: cloud or on-prem</ServiceItem>
                        </ul>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/kgents-services/600/400" alt="Illustration of AI agents working in a workflow" className="rounded-lg shadow-2xl object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

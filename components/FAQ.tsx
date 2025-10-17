
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 pr-4">
          {children}
        </div>
      )}
    </div>
  );
};


const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <div>
                    <FAQItem question="Do you store my data?">
                        The app stores lead form data locally in your browser's localStorage. You are in complete control of exporting or deleting this data. We do not track you or send this data to any server by default.
                    </FAQItem>
                    <FAQItem question="Can you deploy on-prem?">
                        Yes. We specialize in secure deployments and support private VPC, on-premise, and air-gapped options to meet your data security and compliance needs.
                    </FAQItem>
                    <FAQItem question="What models do you support?">
                        We are model-agnostic. We integrate with leading models from OpenAI, Anthropic, Google, and popular open-weight models. The final stack depends on your specific performance, cost, and security constraints.
                    </FAQItem>
                </div>
            </div>
        </section>
    );
};

export default FAQ;


import React, { useState, useRef, ChangeEvent } from 'react';
import { Lead } from '../types';
import { exportLeadsToCSV, exportLeadsToJSON } from '../utils/export';
import CloseIcon from './icons/CloseIcon';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
    leads: Lead[];
    onImportLeads: (leads: Lead[]) => void;
}

const InputField: React.FC<{ label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; error?: string; type?: string; required?: boolean }> = ({ label, name, value, onChange, error, type = 'text', required = true }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-700">{label}</label>
        {type === 'textarea' ? (
             <textarea id={name} name={name} value={value} onChange={onChange} required={required} rows={4} className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#1F50FF] focus:border-[#1F50FF] sm:text-sm`}></textarea>
        ) : (
            <input type={type} id={name} name={name} value={value} onChange={onChange} required={required} className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#1F50FF] focus:border-[#1F50FF] sm:text-sm`} />
        )}
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
);


const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onAddLead, leads, onImportLeads }) => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', useCase: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        if (!formData.company.trim()) newErrors.company = 'Company is required.';
        if (!formData.useCase.trim()) newErrors.useCase = 'Use-case description is required.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onAddLead(formData);
            setFormData({ name: '', email: '', company: '', useCase: '' });
            onClose();
        }
    };

    const handleFileImport = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const content = e.target?.result as string;
                    const importedLeads: Lead[] = JSON.parse(content);
                    // Basic validation of imported structure
                    if (Array.isArray(importedLeads) && importedLeads.every(l => 'id' in l && 'name' in l && 'email' in l)) {
                       onImportLeads(importedLeads);
                    } else {
                        alert('Invalid JSON structure for leads.');
                    }
                } catch (err) {
                    alert('Failed to parse JSON file.');
                }
            };
            reader.readAsText(file);
        }
        // Reset file input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-slate-50 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-6 sm:p-8">
                   <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Talk to Technical Support</h2>
                            <p className="mt-2 text-slate-600">Let's scope your project. Tell us about your use-case to get started.</p>
                        </div>
                        <button onClick={onClose} className="text-slate-500 hover:text-slate-800 transition-colors">
                            <CloseIcon className="w-7 h-7" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                        <InputField label="Work Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                        <InputField label="Company" name="company" value={formData.company} onChange={handleChange} error={errors.company} />
                        <InputField label="Use-Case / Problem to Solve" name="useCase" type="textarea" value={formData.useCase} onChange={handleChange} error={errors.useCase} />

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button type="submit" className="w-full sm:w-auto flex-grow justify-center bg-[#1F50FF] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F50FF]">
                                Submit Brief
                            </button>
                             <a href="mailto:support@kgents.example.com" className="w-full sm:w-auto text-center bg-white text-slate-700 font-semibold py-3 px-6 rounded-md shadow-md border border-slate-200 hover:bg-slate-100 transition-colors">
                                Email Us Instead
                            </a>
                        </div>
                    </form>
                </div>
                <div className="bg-slate-100 p-4 sm:p-6 border-t border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-600">LEAD DATA MANAGEMENT</h3>
                    <p className="text-xs text-slate-500 mt-1">Your submitted leads are saved in your browser. You can export them below.</p>
                     <div className="mt-4 flex flex-wrap gap-3">
                        <button onClick={() => exportLeadsToCSV(leads)} disabled={leads.length === 0} className="text-sm bg-slate-600 text-white font-medium py-2 px-4 rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors">Export CSV ({leads.length})</button>
                        <button onClick={() => exportLeadsToJSON(leads)} disabled={leads.length === 0} className="text-sm bg-slate-600 text-white font-medium py-2 px-4 rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors">Export JSON</button>
                        <button onClick={() => fileInputRef.current?.click()} className="text-sm bg-white text-slate-700 font-medium py-2 px-4 rounded-md border border-slate-300 hover:bg-slate-200 transition-colors">Import JSON</button>
                        <input type="file" accept=".json" ref={fileInputRef} onChange={handleFileImport} className="hidden" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;

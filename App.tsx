
import React, { useState } from 'react';
import { Lead } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';

const App: React.FC = () => {
    const [leads, setLeads] = useLocalStorage<Lead[]>('kgents-leads', []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ message, type });
    };

    const handleAddLead = (newLeadData: Omit<Lead, 'id' | 'createdAt'>) => {
        const newLead: Lead = {
            ...newLeadData,
            id: new Date().toISOString() + Math.random().toString(36).substring(2, 9),
            createdAt: new Date().toISOString(),
        };
        setLeads(prevLeads => [...prevLeads, newLead]);
        showToast('Your brief has been saved locally!', 'success');
    };
    
    const handleImportLeads = (importedLeads: Lead[]) => {
        // Simple merge: add new leads, update existing ones based on ID
        const leadsMap = new Map(leads.map(l => [l.id, l]));
        importedLeads.forEach(l => leadsMap.set(l.id, l));
        setLeads(Array.from(leadsMap.values()));
        showToast(`Successfully imported/merged ${importedLeads.length} leads.`, 'success');
    };

    return (
        <div className="font-sans antialiased">
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            
            <Header onOpenModal={() => setIsModalOpen(true)} />
            
            <main>
                <Hero onOpenModal={() => setIsModalOpen(true)} />
                <Services />
                <Process />
                <SuccessStories />
                <FAQ />
            </main>
            
            <Footer />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddLead={handleAddLead}
                leads={leads}
                onImportLeads={handleImportLeads}
            />
        </div>
    );
};

export default App;

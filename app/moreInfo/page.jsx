"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Home, FileText, HeadphonesIcon, Save } from 'lucide-react';

const StaffProfileForm = () => {
    const [sections, setSections] = useState({
        personal: true,
        banking: false,
        employment: false,
        documents: false,
        tax: false
    });

    const toggleSection = (section) => {
        setSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const Section = ({ title, isOpen, onToggle, children }) => (
        <div className="mb-4 rounded-lg border border-slate-200">
            <button
                onClick={onToggle}
                className="w-full p-4 flex justify-between items-center bg-white rounded-t-lg"
            >
                <span className="font-semibold text-[#333333]">{title}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-4 border-t border-slate-200">
                    {children}
                </div>
            )}
        </div>
    );

    const FormField = ({ label, type = "text", required = false }) => (
        <div className="mb-4">
            <label className="block text-[#333333] mb-2">
                {label}
                {required && <span className="text-[#FAD4C0] ml-1">*</span>}
            </label>
            <input
                type={type}
                className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 bg-zinc-900 border-b border-slate-200 p-4 flex justify-between items-center z-10">
                <div className="text-white font-bold">Vala Plus</div>
                <div className="text-center text-white font-semibold">Complete Your Profile</div>
                <HelpCircle size={24} className="text-white" />
            </header>

            {/* Main Content */}
            <main className="flex-1 px-4 pt-20 pb-24 overflow-y-auto">
                <Section
                    title="Personal Details"
                    isOpen={sections.personal}
                    onToggle={() => toggleSection('personal')}
                >
                    <FormField label="Full Name" required />
                    <FormField label="Phone Number" type="tel" required />
                    <FormField label="Address" required />
                    <FormField label="Emergency Contact Name" required />
                    <FormField label="Emergency Contact Number" type="tel" required />
                    <button className="w-full bg-zinc-900 text-white p-3 rounded-md mt-4 flex items-center justify-center gap-2">
                        <Save size={20} />
                        Save Personal Details
                    </button>
                </Section>

                <Section
                    title="Banking & Payroll Information"
                    isOpen={sections.banking}
                    onToggle={() => toggleSection('banking')}
                >
                    <FormField label="Bank Name" required />
                    <FormField label="Account Number" required />
                    <FormField label="BSB Code" required />
                    <FormField label="Super Fund Name" required />
                    <FormField label="Super Membership Number" required />
                    <button className="w-full bg-zinc-900 text-white p-3 rounded-md mt-4 flex items-center justify-center gap-2">
                        <Save size={20} />
                        Save Banking Details
                    </button>
                </Section>

                <Section
                    title="Employment Details"
                    isOpen={sections.employment}
                    onToggle={() => toggleSection('employment')}
                >
                    <FormField label="Position/Role" required />
                    <FormField label="Start Date" type="date" required />
                    <FormField label="Work Schedule" required />
                    <button className="w-full bg-zinc-900 text-white p-3 rounded-md mt-4 flex items-center justify-center gap-2">
                        <Save size={20} />
                        Save Employment Details
                    </button>
                </Section>

                <Section
                    title="Additional Documentation"
                    isOpen={sections.documents}
                    onToggle={() => toggleSection('documents')}
                >
                    <FormField label="Working with Children Check Number" required />
                    <div className="mb-4">
                        <label className="block text-[#333333] mb-2">
                            Upload ID Document
                            <span className="text-[#FAD4C0] ml-1">*</span>
                        </label>
                        <input
                            type="file"
                            className="w-full p-2 border border-slate-200 rounded-md"
                            accept="image/*,.pdf"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#333333] mb-2">
                            Upload Qualifications
                            <span className="text-[#FAD4C0] ml-1">*</span>
                        </label>
                        <input
                            type="file"
                            className="w-full p-2 border border-slate-200 rounded-md"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>
                    <button className="w-full bg-zinc-900 text-white p-3 rounded-md mt-4 flex items-center justify-center gap-2">
                        <Save size={20} />
                        Save Documents
                    </button>
                </Section>

                <Section
                    title="Tax Information"
                    isOpen={sections.tax}
                    onToggle={() => toggleSection('tax')}
                >
                    <FormField label="Tax File Number (TFN)" required />
                    <div className="mb-4">
                        <label className="block text-[#333333] mb-2">
                            Upload Employment Contract
                            <span className="text-[#FAD4C0] ml-1">*</span>
                        </label>
                        <input
                            type="file"
                            className="w-full p-2 border border-slate-200 rounded-md"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>
                    <button className="w-full bg-zinc-900 text-white p-3 rounded-md mt-4 flex items-center justify-center gap-2">
                        <Save size={20} />
                        Save Tax Information
                    </button>
                </Section>

                <button className="w-full bg-zinc-900 text-white p-4 rounded-md mt-6 mb-4">
                    Submit Complete Profile
                </button>
            </main>

            {/* Fixed Footer Navigation */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex justify-around items-center">
                <button className="flex flex-col items-center text-[#333333]">
                    <Home size={24} />
                    <span className="text-xs mt-1">Home</span>
                </button>
                <button className="flex flex-col items-center text-[#333333]">
                    <FileText size={24} />
                    <span className="text-xs mt-1">Documents</span>
                </button>
                <button className="flex flex-col items-center text-[#333333]">
                    <HeadphonesIcon size={24} />
                    <span className="text-xs mt-1">Support</span>
                </button>
            </footer>
        </div>
    );
};

export default StaffProfileForm;
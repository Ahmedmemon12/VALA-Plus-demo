"use client"

import React from 'react';
import { Home, Mic, ClipboardList, MessageCircle, BookOpen, Settings } from 'lucide-react';



// Main App Component
const IncidentReportingApp = () => {
    
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 pb-24">
                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-[#333333] font-bold mb-4">New Incident</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Date"
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FAD4C0] focus:ring-opacity-50"
                        />
                        <input
                            type="text" 
                            placeholder="Time"
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FAD4C0] focus:ring-opacity-50"
                        />
                        <input
                            type="text"
                            placeholder="Incident Details"
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FAD4C0] focus:ring-opacity-50 col-span-2"
                        />
                        <input
                            type="text"
                            placeholder="Action Taken"
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FAD4C0] focus:ring-opacity-50 col-span-2"
                        />
                    </div>
                    <button className="bg-zinc-900/90 text-white rounded-md px-4 py-2 mt-4 hover:bg-zinc-900 transition-colors w-full">
                        Submit
                    </button>
                </div>


                <div className="bg-white p-4 shadow-md mt-4 flex items-center flex-col">
                    <button className="bg-zinc-900/90 text-white rounded-full p-4 hover:bg-zinc-900 transition-colors">
                        <Mic className="text-white" size={32} />
                    </button>
                    <p className="text-[#333333] mt-2">
                        Tap to start voice report
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IncidentReportingApp;
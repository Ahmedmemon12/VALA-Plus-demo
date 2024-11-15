"use client"

import React, { useState } from 'react';
import { ChevronLeft, Mic, Send } from 'lucide-react';
import { Home, ClipboardList, MessageCircle, BookOpen, Settings } from 'lucide-react';
import Link from 'next/link';

const VoiceAssistantScreen = () => {
    const [isListening, setIsListening] = useState(false);
    const [recentCommands, setRecentCommands] = useState([
        { query: 'Show evacuation plan', response: 'Here is the evacuation plan for your area...' },
        { query: 'Check child-to-teacher ratio', response: 'The current child-to-teacher ratio is 15:1.' },
        { query: 'Today\'s schedule', response: 'Here is the schedule for today...' },
    ]);
    const [chatInput, setChatInput] = useState('');

    const handleMicrophoneClick = () => {
        setIsListening(!isListening);
        // Add logic to start/stop voice recording and processing
    };

    const handleChatSubmit = () => {
        // Add logic to send the chat message to the AI
        setChatInput('');
    };

    const suggestedCommands = [
        'Show evacuation plan',
        'Check child-to-teacher ratio',
        'Today\'s schedule',
    ];

    return (
        <div className="flex flex-col h-full p-5 gap-5">
            <div><Link href={"/chat/all"}><ChevronLeft /></Link></div>
            {/* Main Voice Command Area */}
            <div className="flex-1 flex flex-col items-center justify-center">
                <button
                    className={`bg-slate-900 text-white rounded-full p-6 transition-transform ${isListening ? 'scale-105' : ''}`}
                    onClick={handleMicrophoneClick}
                >
                    <Mic className="text-3xl" />
                </button>
                <p className="mt-4 text-[#333333]">Tap to ask Vala Plus</p>
            </div>

            {/* Suggested Commands */}
            <div className="bg-[#F0EFEF] rounded-md w-full py-4">
                <div className="flex gap-4-auto overflow-y-scroll max-w-[90vw] px-4">
                    {suggestedCommands.map((command, index) => (
                        <button
                            key={index}
                            className="bg-zinc-900 text-white px-4 py-2 rounded-md whitespace-nowrap border border-[#CCCCCC]"
                        >
                            {command}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recent Commands */}
            <div className="flex-1 overflow-y-auto">
                {recentCommands.map((command, index) => (
                    <div
                        key={index}
                        className="bg-[#F0EFEF] p-4 my-2 rounded-md border border-[#CCCCCC]"
                    >
                        <p className="text-[#333333]">{command.query}</p>
                        <p className="text-[#6C7A89] mt-2">{command.response}</p>
                    </div>
                ))}
            </div>

            {/* Chat Input */}
            <div className="bg-zinc-900 py-4 border-t flex items-center px-4 fixed bottom-0 left-0 right-0 shadow-lg pb-20">
                <input
                    type="text"
                    placeholder="Chat with Vala Plus"
                    className="bg-white rounded-md px-3 py-2 text-[#333333] flex-1 focus:outline-none focus:ring-2 focus:ring-[#6C7A89] focus:ring-opacity-50 mr-2"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                />
                <button
                    className="bg-[#6C7A89] text-white rounded-full p-2 hover:bg-[#5A6777] transition-colors"
                    onClick={handleChatSubmit}
                >
                    <Send size={20} />
                </button>
            </div>

        </div>
    );
};

export default VoiceAssistantScreen;

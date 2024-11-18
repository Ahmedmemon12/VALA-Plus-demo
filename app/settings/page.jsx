"use client";

import React from "react";
import Link from "next/link";
import { Globe, Settings, Sliders, Sun } from "lucide-react";

const SettingsPage = () => {
    const settingsOptions = [
        { name: "Change Theme", link: "/settings/theme", icon: <Sun size={20} /> },
        { name: "Change Language", link: "/settings/language", icon: <Globe size={20} /> },
        { name: "Setting 1", link: "/settings/setting1", icon: <Settings size={20} /> },
        { name: "Setting 2", link: "/settings/setting2", icon: <Sliders size={20} /> },
        { name: "Feedback", link: "/feedback", icon: <Sliders size={20} /> },
    ];

    return (
        <div className="flex flex-col bg-white text-zinc-900">
            {/* Header */}
            <div className="bg-gray-100 text-black p-4 font-bold">
                Settings
            </div>

            {/* Settings Options */}
            <div className="flex-1 p-4 space-y-4">
                {settingsOptions.map((option, index) => (
                    <Link
                        key={index}
                        href={option.link}
                        className="flex items-center px-4 py-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium shadow-md space-x-3"
                    >
                        <span className="text-zinc-500">{option.icon}</span>
                        <span>{option.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;

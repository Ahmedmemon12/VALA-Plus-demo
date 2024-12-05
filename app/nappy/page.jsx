"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Pencil, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [applyCream, setApplyCream] = useState(false);
    const [editingLogIndex, setEditingLogIndex] = useState(null);
    const [showNappyOptions, setShowNappyOptions] = useState(false);

    const [children, setChildren] = useState(
        [
            "Emma Johnson",
            "Liam Smith",
            "Sophia Brown",
            "Noah Davis",
            "Olivia Martinez",
            "Elijah Wilson",
            "Ava Garcia",
            "William Thomas",
            "Isabella Anderson",
            "James Taylor",
        ].map((child) => ({
            name: child,
            nappys: [], // Each child has an array of nappy logs
        }))
    );

    const saveNappyLog = () => {
        if (currentChild !== null && selectedOption) {
            const updatedChildren = [...children];
            const child = updatedChildren[currentChild];

            const newLog = {
                type: selectedOption,
                applyCream,
                timestamp: new Date().toLocaleString(), // Record time
            };

            if (editingLogIndex !== null) {
                // Update existing log
                child.nappys[editingLogIndex] = newLog;
            } else {
                // Add new log
                child.nappys.unshift(newLog);
            }

            setChildren(updatedChildren);

            // Reset states after saving
            setSelectedOption(null);
            setApplyCream(false);
            setEditingLogIndex(null);
            setShowNappyOptions(false);
        }
    };

    const handleEditLog = (logIndex) => {
        const log = children[currentChild].nappys[logIndex];
        setSelectedOption(log.type);
        setApplyCream(log.applyCream);
        setEditingLogIndex(logIndex);
        setShowNappyOptions(true); // Show options for editing
    };

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"}>
                    <button className="bg-[#f6f6f6] aspect-square p-2 rounded-sm">
                        <MoveLeft />
                    </button>
                </Link>
                <h1 className="text-black text-2xl">Nappy (activity)</h1>
            </div>

            <div className="flex gap-1 px-6 items-stretch w-full justify-between">
                <div
                    className={`flex flex-col gap-2 overflow-y-scroll ${currentChild !== null ? "w-[22vw]" : "w-full"
                        } duration-300`}
                >
                    {children.map((child, ind) => (
                        <div
                            key={ind}
                            onClick={() => setCurrentChild(ind)}
                            className={`bg-[#f6f6f6] p-3 ${ind === currentChild ? "border border-zinc-800" : ""
                                } rounded-lg`}
                        >
                            {child.name.split(" ")[0]}
                        </div>
                    ))}
                </div>

                {/* Details panel */}
                <div
                    className={`flex flex-col gap-2 duration-300 py-12 ${currentChild !== null ? "w-[70vw] px-4 opacity-100" : "w-0 opacity-0"
                        } overflow-hidden bg-[#f6f6f6] rounded-lg relative`}
                >
                    <span
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                            setCurrentChild(null);
                            setSelectedOption(null);
                            setApplyCream(false);
                            setShowNappyOptions(false);
                        }}
                    >
                        <X />
                    </span>

                    {currentChild !== null && (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold">
                                    Nappy - {children[currentChild].name}
                                </h2>
                                {/* Show Track Nappy Button */}
                                {!showNappyOptions && (
                                    <button
                                        className="bg-zinc-900 text-white p-1 text-xs rounded-lg my-4"
                                        onClick={() => setShowNappyOptions(true)}
                                    >
                                        Track Nappy
                                    </button>
                                )}
                            </div>

                            {/* Selection Options */}
                            {showNappyOptions && (
                                <>
                                    <div className="flex gap-4 my-4">
                                        {["Wet", "Soiled", "Both"].map((option) => (
                                            <button
                                                key={option}
                                                className={`py-2 px-4 rounded-lg ${selectedOption === option
                                                    ? "bg-zinc-900 text-white"
                                                    : "bg-zinc-200"
                                                    }`}
                                                onClick={() => setSelectedOption(option)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Apply Cream Checkbox */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <input
                                            type="checkbox"
                                            id="apply-cream"
                                            checked={applyCream}
                                            onChange={() => setApplyCream(!applyCream)}
                                        />
                                        <label htmlFor="apply-cream">Apply Cream</label>
                                    </div>

                                    {/* Save Changes Button */}
                                    <button
                                        className="bg-zinc-900 text-white py-2 px-4 rounded-lg"
                                        onClick={saveNappyLog}
                                    >
                                        {editingLogIndex !== null ? "Update Log" : "Save Changes"}
                                    </button>
                                </>
                            )}

                            {/* Nappy Logs */}
                            {children[currentChild].nappys.length > 0 && (
                                <div className="mt-6">
                                    <h2 className="text-lg font-bold mb-2">Nappy Logs</h2>
                                    <div className="flex flex-col gap-2">
                                        {children[currentChild].nappys.map((nappy, index) => (
                                            <Card key={index} className="p-3 flex justify-between items-center">
                                                <div>
                                                    <p className="text-sm">
                                                        <strong>Type:</strong> {nappy.type}
                                                    </p>
                                                    <p className="text-sm">
                                                        <strong>Apply Cream:</strong> {nappy.applyCream ? "Yes" : "No"}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        <strong>Time:</strong> {nappy.timestamp}
                                                    </p>
                                                </div>
                                                <button
                                                    className="text-black/50 p-1 aspect-square rounded-lg"
                                                    onClick={() => handleEditLog(index)}
                                                >
                                                    <Pencil className="w-4" />
                                                </button>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Search, UtensilsCrossed, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);
    const [selectedHealth, setSelectedHealth] = useState(null);
    const [selectedTemperature, setSelectedTemperature] = useState(""); // For temperature or other inputs
    const [note, setNote] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // For filtering children

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
            health: [], // Each child has an array of health logs
        }))
    );

    const recordHealth = () => {
        if (currentChild !== null && selectedHealth && selectedTemperature) {
            const updatedChildren = [...children];
            const child = updatedChildren[currentChild];
            child.health.unshift({
                type: selectedHealth,
                temperature: selectedTemperature,
                note: note || "No note provided.",
                timestamp: new Date().toLocaleString(), // Record time
            });
            setChildren(updatedChildren);

            // Reset states after submission
            setSelectedHealth(null);
            setSelectedTemperature("");
            setNote("");
            setShowOptions(false); // Hide all options
        } else {
            alert("Please complete all fields before submitting!");
        }
    };

    // Filtered children list based on search query
    const filteredChildren = searchQuery
        ? children.filter((child) =>
            child.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : children;

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"}>
                    <button className="bg-[#f6f6f6] aspect-square p-2 rounded-sm">
                        <MoveLeft />
                    </button>
                </Link>
                <h1 className="text-black text-2xl">Health</h1>
            </div>
            <div className="w-full px-6 flex items-center rounded-lg mb-5">
                <input
                    className="flex-grow border-2 min-h-[40px] border-black rounded-l-lg px-4"
                    type="text"
                    placeholder="Search child..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-black flex items-center justify-center rounded-r-lg w-10 aspect-square">
                    <Search className="text-white" />
                </button>
            </div>
            <div className="flex gap-1 px-6 items-stretch w-full justify-between">
                <div
                    className={`flex flex-col gap-2 overflow-y-scroll ${currentChild !== null ? "w-[22vw]" : "w-full"
                        } duration-300`}
                >
                    {filteredChildren.map((child, ind) => (
                        <div
                            key={ind}
                            onClick={() => setCurrentChild(ind)}
                            className={`bg-[#f6f6f6] p-3 ${ind === currentChild ? "border border-zinc-800" : ""
                                } rounded-lg cursor-pointer`}
                        >
                            {child.name.split(" ")[0]}
                        </div>
                    ))}
                </div>

                {/* Details panel */}
                <div
                    className={`flex flex-col gap-2 duration-300 py-12 ${currentChild !== null
                            ? "w-[70vw] px-4 opacity-100"
                            : "w-0 opacity-0"
                        } overflow-hidden bg-[#f6f6f6] rounded-lg relative`}
                >
                    <span
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                            setCurrentChild(null);
                            setSelectedHealth(null);
                            setSelectedTemperature("");
                            setNote("");
                            setShowOptions(false);
                        }}
                    >
                        <X />
                    </span>

                    {/* Health Recording */}
                    <Card className="flex justify-between p-3">
                        <div className="flex gap-1 items-center">
                            <UtensilsCrossed className="w-4 aspect-square" />
                            <h1 className="text-sm">
                                Health -{" "}
                                {currentChild !== null && children[currentChild].name}
                            </h1>
                        </div>
                        <button
                            className="bg-zinc-900 text-white px-4 text-xs rounded-lg"
                            onClick={() => setShowOptions(true)}
                        >
                            Health Check
                        </button>
                    </Card>

                    {/* Health Type Buttons */}
                    {showOptions && (
                        <div className="mt-4 flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <span>
                                    {selectedHealth === "temperature"
                                        ? "Temperature"
                                        : "Temperature"}{" "}
                                    (Optional)
                                </span>
                                <div className="w-full">
                                    <input
                                        placeholder="36.5°C"
                                        className="w-full px-2 py-1 border rounded-lg"
                                        type="text"
                                        value={selectedTemperature}
                                        onChange={(e) => setSelectedTemperature(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>Health Concerns</span>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Temperature",
                                        "Rash",
                                        "Cough",
                                        "Runny Nose",
                                        "Lethargy",
                                        "Poor Appetite",
                                    ].map((health) => (
                                        <button
                                            key={health}
                                            className={`bg-zinc-200 text-black py-1 px-4 rounded-lg ${selectedHealth === health.toLowerCase()
                                                    ? "bg-zinc-400"
                                                    : ""
                                                }`}
                                            onClick={() => setSelectedHealth(health.toLowerCase())}
                                        >
                                            {health}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>Notes (Optional)</span>
                                <div className="flex flex-col gap-4">
                                    <textarea
                                        className="w-full h-20 p-3 border rounded-lg"
                                        placeholder="Any additional observations..."
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                    <button
                                        className="bg-zinc-900 text-white py-1 px-4 rounded-lg"
                                        onClick={recordHealth}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Health Logs */}
                    {currentChild !== null &&
                        children[currentChild].health.length > 0 && (
                            <div className="mt-6">
                                <h2 className="text-lg font-bold mb-2">Health Logs</h2>
                                <div className="flex flex-col gap-2">
                                    {children[currentChild].health.map((health, index) => (
                                        <Card key={index} className="p-3">
                                            <p className="text-sm">
                                                <strong>Temperature:</strong> {health.temperature && `${health.temperature}°C`}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Type:</strong> {health.type}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Note:</strong> {health.note}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <strong>Time:</strong> {health.timestamp}
                                            </p>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

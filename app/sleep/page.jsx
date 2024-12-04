"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);
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
            sleep: [],
        }))
    );

    const startNewSleep = () => {
        if (currentChild !== null) {
            const updatedChildren = [...children];
            updatedChildren[currentChild].sleep.unshift({
                actions: [],
                ended: false,
                timestamp: new Date().toLocaleString(),
            });
            setChildren(updatedChildren);
        }
    };

    const addAction = (childIndex, sleepIndex, action, bgClass) => {
        const updatedChildren = [...children];
        const sleepLog = updatedChildren[childIndex].sleep[sleepIndex];
        if (!sleepLog.ended) {
            sleepLog.actions.push({
                action,
                bgClass,
                time: new Date().toLocaleTimeString(),
            });
            setChildren(updatedChildren);
        }
    };

    const endSleep = (childIndex, sleepIndex) => {
        const updatedChildren = [...children];
        const sleepLog = updatedChildren[childIndex].sleep[sleepIndex];
        sleepLog.ended = true;
        sleepLog.endTime = new Date().toLocaleString();
        setChildren(updatedChildren);
    };

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"}>
                    <button className="bg-[#f6f6f6] aspect-square p-2 rounded-sm">
                        <MoveLeft />
                    </button>
                </Link>
                <h1 className="text-black text-2xl">Sleep</h1>
            </div>
            <div className="w-full px-6 flex items-center rounded-lg mb-5">
                <input
                    className="flex-grow border-2 min-h-[40px] border-black rounded-l-lg px-4"
                    type="text"
                    placeholder="Search child..."
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
                    className={`flex flex-col gap-2 duration-300 py-12 ${currentChild !== null
                        ? "w-[70vw] px-4 opacity-100"
                        : "w-0 opacity-0"
                        } overflow-hidden bg-[#f6f6f6] rounded-lg relative`}
                >
                    <span
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                            setCurrentChild(null);
                        }}
                    >
                        <X />
                    </span>

                    <Card className="flex justify-between p-3">
                        <div className="flex gap-1 items-center">
                            <h1 className="text-sm">
                                Sleep - {currentChild !== null && children[currentChild].name}
                            </h1>
                        </div>
                        <button
                            className="bg-zinc-900 text-white px-4 text-xs rounded-lg"
                            onClick={startNewSleep}
                        >
                            Start new sleep
                        </button>
                    </Card>

                    {/* Sleep Logs */}
                    {currentChild !== null && children[currentChild].sleep.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-lg font-bold mb-2">Sleep Logs</h2>
                            <div className="flex flex-col gap-4">
                                {children[currentChild].sleep.map((sleep, sleepIndex) => (
                                    <Card key={sleepIndex} className="p-3">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-gray-500">
                                                <strong>Started:</strong> {sleep.timestamp}
                                            </p>
                                            {sleep.ended ? (
                                                <p className="text-sm text-green-500">
                                                    Sleep ended at {sleep.endTime}
                                                </p>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button
                                                        className="bg-zinc-500 text-white px-2 py-1 rounded-lg text-xs"
                                                        onClick={() =>
                                                            addAction(currentChild, sleepIndex, "Check", "bg-zinc-500")
                                                        }
                                                    >
                                                        Check
                                                    </button>
                                                    <button
                                                        className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs"
                                                        onClick={() =>
                                                            addAction(currentChild, sleepIndex, "Concern", "bg-zinc-700")
                                                        }
                                                    >
                                                        Concern
                                                    </button>
                                                    <button
                                                        className="bg-green-500 px-2 py-1 rounded-lg text-xs"
                                                        onClick={() => endSleep(currentChild, sleepIndex)}
                                                    >
                                                        Wake
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex gap-2 flex-wrap">

                                            {/* Action logs */}
                                            {sleep.actions.map((action, actionIndex) => (
                                                <div
                                                    key={actionIndex}
                                                    className={`p-1 rounded-lg text-white text-xs mt-2 ${action.bgClass}`}
                                                >
                                                    {action.action} at {action.time}
                                                </div>
                                            ))}
                                        </div>
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

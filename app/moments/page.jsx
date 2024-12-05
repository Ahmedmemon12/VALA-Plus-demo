"use client";
import { Card } from "@/components/ui/card";
import { Camera, MoveLeft, Search, X } from "lucide-react";
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
            moments: [],
        }))
    );

    const addNewMoment = () => {
        if (currentChild !== null) {
            const updatedChildren = [...children];
            updatedChildren[currentChild].moments.push({
                id: new Date().getTime(), // Unique ID for the moment
                image: "https://via.placeholder.com/200",
            });
            setChildren(updatedChildren);
        }
    };

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"}>
                    <button className="bg-[#f6f6f6] aspect-square p-2 rounded-sm">
                        <MoveLeft />
                    </button>
                </Link>
                <h1 className="text-black text-2xl">Moments</h1>
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
                        }}
                    >
                        <X />
                    </span>

                    {currentChild !== null && (
                        <>
                            <Card className="flex justify-between p-3 items-center">
                                <h1 className="text-sm">
                                    Moments - {children[currentChild].name}
                                </h1>
                                <input
                                    id="camera"
                                    type="file"
                                    hidden
                                    className="bg-zinc-900 text-white p-1 aspect-square text-xs rounded-lg"
                                    onChange={addNewMoment}
                                />
                                <label htmlFor="camera"><Camera /></label>
                            </Card>

                            {/* Moments Grid */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {children[currentChild].moments.map((moment) => (
                                    <div
                                        key={moment.id}
                                        className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                                    >
                                        <img
                                            src={moment.image}
                                            alt="Moment"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Search, UtensilsCrossed, X, Pencil } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);
    const [editingMeal, setEditingMeal] = useState(null);
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [note, setNote] = useState("");

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
            meals: {
                breakfast: { amount: null, note: "", timestamp: null },
                "morning tea": { amount: null, note: "", timestamp: null },
                lunch: { amount: null, note: "", timestamp: null },
                "afternoon tea": { amount: null, note: "", timestamp: null },
            },
        }))
    );

    const updateMeal = () => {
        if (currentChild !== null && editingMeal && selectedAmount) {
            const updatedChildren = [...children];
            const child = updatedChildren[currentChild];

            child.meals[editingMeal] = {
                amount: selectedAmount,
                note: note || "No note provided.",
                timestamp: new Date().toLocaleString(), // Record time
            };
            setChildren(updatedChildren);

            // Reset states after submission
            setEditingMeal(null);
            setSelectedAmount(null);
            setNote("");
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
                <h1 className="text-black text-2xl">Meal</h1>
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
                    className={`flex flex-col gap-2 duration-300 py-12 ${currentChild !== null ? "w-[70vw] px-4 opacity-100" : "w-0 opacity-0"
                        } overflow-hidden bg-[#f6f6f6] rounded-lg relative`}
                >
                    <Card >
                        <div className="flex gap-1 items-center">
                            <UtensilsCrossed className="w-4 aspect-square" />
                            <h1 className="text-sm">
                                Meal - <span className="font-bold">{currentChild !== null && children[currentChild].name}</span>
                            </h1>
                        </div>
                    </Card>

                    <span
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                            setCurrentChild(null);
                            setEditingMeal(null);
                            setSelectedAmount(null);
                            setNote("");
                        }}
                    >
                        <X />
                    </span>

                    {/* Meal Cards */}
                    {currentChild !== null && (
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(children[currentChild].meals).map((mealType) => (
                                <Card key={mealType} className="p-3 relative">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg capitalize">{mealType}</h3>
                                            <p className="text-sm text-gray-500">
                                                Amount:{" "}
                                                {children[currentChild].meals[mealType].amount || "Not recorded"}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Note:{" "}
                                                {children[currentChild].meals[mealType].note || "No note provided."}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Time:{" "}
                                                {children[currentChild].meals[mealType].timestamp || "Not recorded"}
                                            </p>
                                        </div>
                                        <Pencil
                                            className="cursor-pointer"
                                            onClick={() => setEditingMeal(mealType)}
                                        />
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Update Meal Modal */}
                    {editingMeal && (
                        <div className="flex flex-col gap-4 mt-4">
                            <h2 className="text-lg font-bold">Update {editingMeal}</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {["All", "Most", "Some", "None"].map((amount) => (
                                    <button
                                        key={amount}
                                        className={`py-1 px-4 rounded-lg ${selectedAmount == amount.toLowerCase() ? 'bg-zinc-900 text-white' : 'bg-zinc-300'}`}
                                        onClick={() => setSelectedAmount(amount.toLowerCase())}
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>
                            <textarea
                                className="w-full h-20 p-3 border rounded-lg"
                                placeholder="Add a note (optional)..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <button
                                className="bg-zinc-900 text-white py-1 px-4 rounded-lg"
                                onClick={updateMeal}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

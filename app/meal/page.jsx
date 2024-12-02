"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Search, UtensilsCrossed, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);
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
            meals: [], // Each child has an array of meal logs
        }))
    );

    const recordMeal = () => {
        if (currentChild !== null && selectedMeal && selectedAmount) {
            const updatedChildren = [...children];
            const child = updatedChildren[currentChild];
            child.meals.unshift({
                type: selectedMeal,
                amount: selectedAmount,
                note: note || "No note provided.",
                timestamp: new Date().toLocaleString(), // Record time
            });
            setChildren(updatedChildren);

            // Reset states after submission
            setSelectedMeal(null);
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
            <div className='w-full px-6 flex items-center rounded-lg mb-5'>
                <input
                    className='flex-grow border-2 min-h-[40px] border-black rounded-l-lg px-4'
                    type='text'
                    placeholder='Search child...'
                />
                <button className='bg-black flex items-center justify-center rounded-r-lg w-10 aspect-square'>
                    <Search className='text-white' />
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
                    <span
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                            setCurrentChild(null);
                            setSelectedMeal(null);
                            setSelectedAmount(null);
                            setNote("");
                        }}
                    >
                        <X />
                    </span>

                    {/* Meal Recording */}
                    <Card className="flex justify-between p-3">
                        <div className="flex gap-1 items-center">
                            <UtensilsCrossed className="w-4 aspect-square" />
                            <h1 className="text-sm">
                                Meal - {currentChild !== null && children[currentChild].name}
                            </h1>
                        </div>
                        <button
                            className="bg-zinc-900 text-white px-4 text-xs rounded-lg"
                            onClick={() => setSelectedMeal("")}
                        >
                            Record Meal
                        </button>
                    </Card>

                    {/* Meal Type Buttons */}
                    {selectedMeal === "" && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {["Breakfast", "Morning Tea", "Lunch", "Afternoon Tea"].map(
                                (meal) => (
                                    <button
                                        key={meal}
                                        className="bg-zinc-200 text-black py-1 px-4 rounded-lg"
                                        onClick={() => setSelectedMeal(meal.toLowerCase())}
                                    >
                                        {meal}
                                    </button>
                                )
                            )}
                        </div>
                    )}

                    {/* Amount Buttons */}
                    {selectedMeal && !selectedAmount && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {["All", "Most", "Some", "None"].map((amount) => (
                                <button
                                    key={amount}
                                    className="bg-zinc-300 text-black py-1 px-4 rounded-lg"
                                    onClick={() => setSelectedAmount(amount.toLowerCase())}
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Note Input */}
                    {selectedAmount && (
                        <div className="flex flex-col gap-4 mt-4">
                            <textarea
                                className="w-full h-20 p-3 border rounded-lg"
                                placeholder="Add a note (optional)..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <button
                                className="bg-zinc-900 text-white py-1 px-4 rounded-lg"
                                onClick={recordMeal}
                            >
                                Submit
                            </button>
                        </div>
                    )}

                    {/* Meal Logs */}
                    {currentChild !== null && children[currentChild].meals.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-lg font-bold mb-2">Meal Logs</h2>
                            <div className="flex flex-col gap-2">
                                {children[currentChild].meals.map((meal, index) => (
                                    <Card key={index} className="p-3">
                                        <p className="text-sm">
                                            <strong>Type:</strong> {meal.type}
                                        </p>
                                        <p className="text-sm">
                                            <strong>Amount:</strong> {meal.amount}
                                        </p>
                                        <p className="text-sm">
                                            <strong>Note:</strong> {meal.note}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong>Time:</strong> {meal.timestamp}
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

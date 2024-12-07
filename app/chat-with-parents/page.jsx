"use client";
import { Card } from "@/components/ui/card";
import { MoveLeft, Search, BookOpen, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [currentChild, setCurrentChild] = useState(null);

    const [children, setChildren] = useState(["Emma Johnson", "Liam Smith", "Sophia Brown", "Noah Davis", "Olivia Martinez", "Elijah Wilson", "Ava Garcia", "William Thomas", "Isabella Anderson", "James Taylor",]);

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"}>
                    <button className="bg-[#f6f6f6] aspect-square p-2 rounded-sm">
                        <MoveLeft />
                    </button>
                </Link>
                <h1 className="text-black text-2xl">Chat with Parents</h1>
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
                    className={`flex flex-col gap-2 overflow-y-scroll w-full duration-300`}
                >
                    {children.map((child, ind) => (
                        <Link key={ind} href={`/chat/new?child=${child.split(" ")[0]}&prevLink=chat-with-parents`}>
                            <div
                                onClick={() => setCurrentChild(ind)}
                                className={`bg-[#f6f6f6] p-3 ${ind === currentChild ? "border border-blue-600" : ""
                                    } rounded-lg hover:bg-[#ccc]`}
                            >
                                {child.split(" ")[0]}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

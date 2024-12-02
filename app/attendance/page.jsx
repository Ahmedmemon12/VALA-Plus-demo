"use client";

import { Check, Clock, MoveLeft, Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
    const [children, setChildren] = useState([
        {
            name: "Emma Johnson",
            arrival: null, // null means not yet marked
            departure: null,
        },
        {
            name: "Liam Smith",
            arrival: null,
            departure: null,
        },
        {
            name: "Sophia Brown",
            arrival: null,
            departure: null,
        },
        {
            name: "Noah Davis",
            arrival: null,
            departure: null,
        },
        {
            name: "Olivia Martinez",
            arrival: null,
            departure: null,
        },
        {
            name: "Elijah Wilson",
            arrival: null,
            departure: null,
        },
        {
            name: "Ava Garcia",
            arrival: null,
            departure: null,
        },
        {
            name: "William Thomas",
            arrival: null,
            departure: null,
        },
        {
            name: "Isabella Anderson",
            arrival: null,
            departure: null,
        },
        {
            name: "James Taylor",
            arrival: null,
            departure: null,
        },
    ]);

    // Function to handle arrival
    const markArrival = (index) => {
        setChildren(prev =>
            prev.map((child, ind) =>
                ind === index ? { ...child, arrival: new Date().toLocaleTimeString() } : child
            )
        );
    };

    // Function to handle departure
    const markDeparture = (index) => {
        setChildren(prev =>
            prev.map((child, ind) =>
                ind === index ? { ...child, departure: new Date().toLocaleTimeString() } : child
            )
        );
    };

    return (
        <div>
            <div className="flex gap-4 items-center p-6">
                <Link href={"/"} ><button className='bg-[#f6f6f6] aspect-square p-2 rounded-sm'><MoveLeft/></button></Link>
                <h1 className='text-black text-2xl'>Attendance</h1>
            </div>
            <div className="flex flex-col gap-4 max-h-[80vh]">
                <div className='w-full px-6 flex items-center rounded-lg'>
                    <input
                        className='flex-grow border-2 min-h-[40px] border-black rounded-l-lg px-4'
                        type='text'
                        placeholder='Search child...'
                    />
                    <button className='bg-black flex items-center justify-center rounded-r-lg w-10 aspect-square'>
                        <Search className='text-white' />
                    </button>
                </div>
                <div className='flex flex-col p-6 gap-2 items-center w-full overflow-y-scroll'>
                    {children.map((child, ind) => (
                        <div className='w-full bg-[#f6f6f6] p-4 rounded-lg flex justify-between items-center' key={ind}>
                            <div>
                                <span className="text-xl">{child.name}</span>
                                <div className="text-sm text-gray-600">
                                    <p>Arrival: {child.arrival || "Not marked"}</p>
                                    <p>Departure: {child.departure || "Not marked"}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {
                                    !child.arrival
                                        ?
                                        <button
                                            className="bg-zinc-900 text-white px-4 py-2 rounded-lg flex items-center gap-1"
                                            onClick={() => markArrival(ind)}
                                            disabled={!!child.arrival}
                                        >
                                            <Check className="w-4 h-4" />
                                            Arrival
                                        </button>
                                        :
                                        !child.departure
                                            ?
                                            <button
                                                className="bg-zinc-700 text-white px-4 py-2 rounded-lg flex items-center gap-1"
                                                onClick={() => markDeparture(ind)}
                                                disabled={!!child.departure}
                                            >
                                                <Clock className="w-4 h-4" />
                                                Departure
                                            </button>
                                            :
                                            <span className=''>
                                                Checked
                                            </span>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

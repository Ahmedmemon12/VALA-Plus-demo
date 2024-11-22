"use client";

import { useSearchParams } from "next/navigation";

export default function IncidentDetail() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const date = searchParams.get("date");
    const type = searchParams.get("type");
    const details = searchParams.get("details");
    const step = searchParams.get("step");

    return (
        <div className="mt-4 mb-20 p-5">
            <h1 className="text-2xl font-bold">{type}</h1>
            <p className="text-gray-700 mt-2">{date}</p>
            <p className="text-gray-600 mt-4">{details}</p>
            {name && <p className="text-gray-500 mt-4">Reported by: {name}</p>}
            {step && <p className="text-gray-700 mt-4 italic">{<ol><li>Step 1: Turn off the equipment to prevent further damage.</li><li>Step 2: Remove any personnel from the hazard zone.</li><li>Step 3: Call maintenance for immediate repair.</li><li>Step 4: Document the incident and report it for analysis.</li></ol>} </p>}
        </div>
    );
}

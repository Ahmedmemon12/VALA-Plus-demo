"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const incidents = [
        {
          name: "Emma Watson",
          id: "1",
          date: "2023-05-01",
          type: "Workplace Injury",
          details: "Employee slipped on wet floor and sustained minor injuries.",
          step: "<ol><li>Step 1: Check for any immediate injuries (e.g., sprains, bruises).</li><li>Step 2: Apply cold compress if swelling is present.</li><li>Step 3: Ensure the employee is able to stand or assist them to sit.</li><li>Step 4: Report the incident for further evaluation if needed.</li></ol>",
        },
        {
          name: "John Doe",
          id: "2",
          date: "2023-04-15",
          type: "Equipment Malfunction",
          details: "Machinery breakdown caused production delays.",
          step: "<ol><li>Step 1: Turn off the equipment to prevent further damage.</li><li>Step 2: Remove any personnel from the hazard zone.</li><li>Step 3: Call maintenance for immediate repair.</li><li>Step 4: Document the incident and report it for analysis.</li></ol>",
        },
        {
          name: "Jane Smith",
          id: "3",
          date: "2023-03-30",
          type: "Fire Alarm",
          details: "False alarm triggered due to system error.",
          step: <ol><li>Step 1: Evacuate all personnel to the designated safe area.</li><li>Step 2: Confirm that there is no active fire hazard.</li><li>Step 3: Reset the fire alarm system.</li><li>Step 4: Document the incident and inform relevant authorities.</li></ol>,
        },
        {
          name: "Alice Johnson",
          id: "4",
          date: "2023-06-12",
          type: "Chemical Spill",
          details: "Small chemical spill in the lab was contained safely.",
          step: <ol><li>Step 1: Ensure personnel are wearing protective equipment.</li><li>Step 2: Contain the spill using appropriate absorbent materials.</li><li>Step 3: Ventilate the area if necessary.</li><li>Step 4: Report the spill and clean-up to the supervisor.</li></ol>,
        },
        {
          name: "Robert Brown",
          id: "5",
          date: "2023-07-25",
          type: "Vehicle Accident",
          details: "Delivery truck collided with a loading dock.",
          step: <ol><li>Step 1: Check for injuries to the driver and others involved.</li><li>Step 2: Call emergency services if necessary.</li><li>Step 3: Secure the scene to prevent further accidents.</li><li>Step 4: Document the incident and report it for investigation.</li></ol>,
        },
        {
          name: "John's Eye Injury",
          id: "6",
          date: "2023-08-10",
          type: "Eye Injury",
          details: "Emma hit John in the eye during play.",
          step: <ol><li>Step 1: Apply a cold compress to the eye to reduce swelling.</li><li>Step 2: Avoid rubbing or pressing the eye.</li><li>Step 3: Monitor for blurred vision or severe pain.</li><li>Step 4: Seek medical help if symptoms persist or worsen.</li></ol>,
        },
      ];
    const handleIncidentClick = (incident) => {
        const { id, date, type, details, name, step } = incident;
        router.push(
            `/incident-detail?id=${id}&date=${date}&type=${type}&details=${encodeURIComponent(
                details
            )}&name=${encodeURIComponent(name)}&step=${encodeURIComponent(step)}`
        );
    };

    return (
        <div className="mt-4 mb-20 p-5">
            {incidents.map((incident) => (
                <div
                    key={incident.id}
                    onClick={() => handleIncidentClick(incident)}
                    className="bg-[#F0EFEF] rounded-md p-4 mb-2 cursor-pointer hover:bg-[#E6E6E6] transition-colors"
                >
                    <h3 className="text-[#333333] font-bold">
                        {incident.date} - {incident.type}
                    </h3>
                    <p className="text-[#333333]">{incident.details}</p>

                </div>
            ))}
        </div>
    );
}

"use client";

import { useState } from "react";

export default function IncidentDetail() {
    const report = {
        name: "Emma Watson",
        id: "1",
        date: "2023-05-01",
        type: "Workplace Injury",
        details: "Employee slipped on wet floor and sustained minor injuries.",
        step: [
            "Step 1: Check for any immediate injuries (e.g., sprains, bruises).",
            "Step 2: Apply cold compress if swelling is present.",
            "Step 3: Ensure the employee is able to stand or assist them to sit.",
            "Step 4: Check for any signs of bleeding and apply pressure if necessary.",
            "Step 5: Assess the person’s level of consciousness and ensure they are alert.",
            "Step 6: If the person is unconscious, perform CPR if trained to do so.",
            "Step 7: Avoid moving the injured person unless absolutely necessary.",
            "Step 8: Reassure the individual to reduce any panic or anxiety.",
            "Step 9: Monitor for signs of shock, such as pale skin, rapid pulse, or shallow breathing.",
            "Step 10: Report the incident to a supervisor or manager and seek medical attention if required."
        ]
    };

    const { name, date, type, details, step } = report;
    const [checkedSteps, setCheckedSteps] = useState(Array(step.length).fill(false));

    const handleCheckboxChange = (index) => {
        const updatedCheckedSteps = [...checkedSteps];
        updatedCheckedSteps[index] = !updatedCheckedSteps[index];
        setCheckedSteps(updatedCheckedSteps);
    };

    // Calculate progress percentage
    const completedSteps = checkedSteps.filter(checked => checked).length;
    const progress = (completedSteps / step.length) * 100;

    // Determine status based on progress
    let status;
    if (completedSteps === 0) {
        status = "Reported"; // Incident reported, no action taken yet
    } else if (completedSteps < step.length) {
        status = "In Progress"; // Some steps completed, others pending
    } else {
        status = "Resolved"; // All steps completed, incident handled
    }

    return (
        <div className="mt-4 mb-20 p-5">
            <h1 className="text-2xl font-bold">{type}</h1>
            <p className="text-gray-700 mt-2">{date}</p>
            <p className="text-gray-600 mt-4">{details}</p>
            {name && <p className="text-gray-500 mt-4">Reported by: <span className="font-bold">{name}</span></p>}

            {/* Progress Bar */}
            <div className="mt-6">
                <p className="font-semibold text-lg">Status: {status}</p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                        style={{ width: `${progress}%` }}
                        className="bg-blue-600 h-2 rounded-full"
                    ></div>
                </div>
            </div>

            <div className="mt-6">
                {step.map((stp, index) => (
                    <div
                        key={index}
                        className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md flex items-center"
                    >
                        <input
                            type="checkbox"
                            checked={checkedSteps[index]}
                            onChange={() => handleCheckboxChange(index)}
                            className="mr-4"
                        />
                        <div>
                            <p className={checkedSteps[index] ? "line-through" : ""}>{stp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

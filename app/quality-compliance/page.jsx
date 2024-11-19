"use client";

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Card } from "@/components/ui/card";

const NQFChecklist = () => {
    // Mock data for checklist items and progress
    const qualityAreas = [
        { id: 1, name: "Educational Program and Practice", progress: 75 },
        { id: 2, name: "Children's Health and Safety", progress: 50 },
        { id: 3, name: "Physical Environment", progress: 40 },
        { id: 4, name: "Staffing Arrangements", progress: 90 },
        { id: 5, name: "Relationships with Children", progress: 80 },
        { id: 6, name: "Collaborative Partnerships", progress: 60 },
        { id: 7, name: "Governance and Leadership", progress: 45 },
    ];

    // Mock checklist data
    const [checklist, setChecklist] = useState([
        { id: 1, area: 1, item: "Plan weekly child-focused activities", completed: true },
        { id: 2, area: 2, item: "Check first aid kits and refill supplies", completed: false },
        { id: 3, area: 3, item: "Inspect outdoor play equipment", completed: true },
        { id: 4, area: 4, item: "Ensure staff-to-child ratios are met", completed: false },
        { id: 5, area: 5, item: "Observe and document developmental milestones", completed: true },
        { id: 6, area: 6, item: "Engage parents in a feedback survey", completed: false },
        { id: 7, area: 7, item: "Review emergency evacuation plan", completed: false },
    ]);

    const toggleCompleted = (id) => {
        setChecklist((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    // Chart data for Doughnut chart
    const chartData = {
        labels: qualityAreas.map((area) => area.name),
        datasets: [
            {
                label: "Progress (%)",
                data: qualityAreas.map((area) => area.progress),
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)", // First segment
                    "rgba(255, 159, 64, 0.6)", // Second segment
                    "rgba(255, 99, 132, 0.6)", // Third segment
                    "rgba(54, 162, 235, 0.6)", // Fourth segment
                    "rgba(153, 102, 255, 0.6)", // Fifth segment
                    "rgba(255, 159, 64, 0.6)", // Sixth segment
                    "rgba(75, 192, 192, 0.6)", // Seventh segment
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-md shadow-md">
            <Card className="p-3">
                <h1 className="text-2xl font-bold mb-6">NQF Checklist and Progress</h1>

                {/* Checklist Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Checklist</h2>
                    <ul className="space-y-4">
                        {checklist.map((item) => (
                            <li key={item.id} className="flex items-center justify-between">
                                <span className="text-gray-700">{item.item}</span>
                                <button
                                    onClick={() => toggleCompleted(item.id)}
                                    className={`px-4 py-2 rounded ${item.completed
                                        ? "bg-zinc-500 text-white"
                                        : "bg-zinc-900 text-white"
                                        }`}
                                >
                                    {item.completed ? "Completed" : "Mark as Done"}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>

            {/* Progress Chart Section */}
            <Card className="p-3">
                <div className="overflow-x-scroll w-full">
                    <h2 className="text-xl font-semibold mb-4">Progress Tracker</h2>
                    <Doughnut data={chartData} />
                </div>
            </Card>
        </div>
    );
};

export default NQFChecklist;

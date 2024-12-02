"use client"

import React, { useState } from 'react';

export default function ActivitiesPage() {
    const activities = [
        { child: "Emma Johnson", activity: "Arrived", time: "02:00 PM" },
        { child: "Liam Smith", activity: "Breakfast", details: "Some", note: "Had cereal", time: "08:15 AM" },
        { child: "Noah Davis", activity: "Sleep", details: "Started", time: "09:30 AM" },
        { child: "Olivia Martinez", activity: "Nappy", details: "Wet", time: "10:10 AM" },
        { child: "Ava Garcia", activity: "Play", details: "Group play", note: "Building blocks", time: "10:45 AM" },
        { child: "William Thomas", activity: "Health", details: "Temperature check", note: "Normal", time: "11:00 AM" },
        { child: "Isabella Anderson", activity: "Arrived", time: "08:00 AM" },
        { child: "James Taylor", activity: "Lunch", details: "All", note: "Ate all veggies", time: "12:15 PM" },
        { child: "Emma Johnson", activity: "Sleep", details: "Ended", time: "12:45 PM" },
        { child: "Liam Smith", activity: "Nappy", details: "Dry", time: "01:30 PM" },
        { child: "Sophia Brown", activity: "Play", details: "Outdoor", note: "Played on swings", time: "02:15 PM" },
        { child: "Noah Davis", activity: "Afternoon Tea", details: "Most", note: "Drank juice", time: "03:00 PM" },
        { child: "Olivia Martinez", activity: "Health", details: "Medicine given", note: "For cold", time: "03:30 PM" },
        { child: "Ava Garcia", activity: "Nappy", details: "Soiled", time: "04:00 PM" },
        { child: "William Thomas", activity: "Play", details: "Drawing", note: "Made a house", time: "04:15 PM" },
        { child: "Isabella Anderson", activity: "Arrived", time: "09:30 AM" },
        { child: "James Taylor", activity: "Breakfast", details: "None", note: "Not hungry", time: "08:45 AM" },
        { child: "Emma Johnson", activity: "Health", details: "Band-aid applied", note: "Scratched knee", time: "11:00 AM" },
        { child: "Liam Smith", activity: "Afternoon Tea", details: "All", note: "Enjoyed cookies", time: "03:45 PM" },
        { child: "Sophia Brown", activity: "Nappy", details: "Wet", time: "02:50 PM" },
        { child: "Noah Davis", activity: "Play", details: "Indoor", note: "Built Legos", time: "04:10 PM" },
        { child: "Olivia Martinez", activity: "Lunch", details: "Most", note: "Skipped rice", time: "12:30 PM" },
        { child: "Ava Garcia", activity: "Sleep", details: "Started", time: "01:00 PM" },
        { child: "William Thomas", activity: "Breakfast", details: "All", note: "Loved the pancakes", time: "08:30 AM" },
        { child: "Isabella Anderson", activity: "Play", details: "Group play", note: "Played tag", time: "03:20 PM" },
        { child: "James Taylor", activity: "Nappy", details: "Dry", time: "04:45 PM" },
        { child: "Emma Johnson", activity: "Lunch", details: "None", note: "Skipped lunch", time: "12:00 PM" },
        { child: "Liam Smith", activity: "Sleep", details: "Ended", time: "02:45 PM" },
        { child: "Sophia Brown", activity: "Health", details: "Medicine given", note: "For headache", time: "01:15 PM" },
        { child: "Noah Davis", activity: "Arrived", time: "07:45 AM" },
    ];

    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const filteredActivities = activities.filter(
        (activity) =>
            (filter === "All" || activity.activity === filter) &&
            (search === "" || activity.child.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div>
            <div className="flex justify-between items-center flex-col p-4 gap-3 mb-4">
                <input
                    type="text"
                    placeholder="Search by child's name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-2 border w-full border-gray-300 rounded-lg text-lg mr-4"
                />
                <div className="space-x-2">
                    {["All", "Arrived", "Breakfast", "Sleep", "Nappy", "Play", "Health"].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleFilterChange(type)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border ${filter === type
                                    ? "bg-zinc-900 text-white border-zinc-600"
                                    : "bg-gray-100 text-gray-800 border-gray-300"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center p-4">
                {filteredActivities.map((activity, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-md w-full md:w-1/4"
                    >
                        <h4 className="text-lg font-semibold">{activity.child}</h4>
                        <p className="mt-2">
                            <span className="font-bold">Activity:</span> {activity.activity}
                        </p>
                        {activity.details && (
                            <p className="mt-2">
                                <span className="font-bold">Details:</span> {activity.details}
                            </p>
                        )}
                        {activity.note && (
                            <p className="mt-2">
                                <span className="font-bold">Note:</span> {activity.note}
                            </p>
                        )}
                        <p className="mt-2">
                            <span className="font-bold">Time:</span> {activity.time}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

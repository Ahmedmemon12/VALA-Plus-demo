// AttendanceTrackingComponent.js
"use client";

import React, { useState } from "react";
import { Clock } from "lucide-react"; // Add this if you want an icon

export function AttendanceTrackingComponent({ onAttendanceChange }) {
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);

    // Handle Check-In
    const handleCheckIn = () => {
        const currentTime = new Date().toLocaleTimeString();
        setCheckInTime(currentTime);
        // Update the parent component with check-in time
        onAttendanceChange({ checkInTime: currentTime, checkOutTime: null });
    };

    // Handle Check-Out
    const handleCheckOut = () => {
        const currentTime = new Date().toLocaleTimeString();
        setCheckOutTime(currentTime);
        // Update the parent component with check-out time
        onAttendanceChange({ checkInTime, checkOutTime: currentTime });
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock /> Attendance Tracker
            </h2>

            {/* Check-In Section */}
            <div className="mb-4">
                {!checkInTime ? (
                    <button
                        onClick={handleCheckIn}
                        className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-500"
                    >
                        Check In
                    </button>
                ) : (
                    <p className="text-zinc-600">Checked In at: {checkInTime}</p>
                )}
            </div>

            {/* Check-Out Section */}
            <div>
                {!checkOutTime && checkInTime ? (
                    <button
                        onClick={handleCheckOut}
                        className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800"
                    >
                        Check Out
                    </button>
                ) : checkOutTime ? (
                    <p className="text-zinc-900">Checked Out at: {checkOutTime}</p>
                ) : (
                    <p className="text-gray-500">Please check in first.</p>
                )}
            </div>
        </div>
    );
}

"use client";

import React, { useState } from "react";

const AttendancePage = () => {
  const [children, setChildren] = useState([
    { id: 1, name: "John Doe", checkedIn: false, checkedOut: false },
    { id: 2, name: "Jane Smith", checkedIn: false, checkedOut: false },
    { id: 3, name: "Michael Johnson", checkedIn: false, checkedOut: false },
  ]);

  const handleCheckIn = (id) => {
    setChildren((prevChildren) =>
      prevChildren.map((child) =>
        child.id === id ? { ...child, checkedIn: true } : child
      )
    );
  };

  const handleCheckOut = (id) => {
    setChildren((prevChildren) =>
      prevChildren.map((child) =>
        child.id === id ? { ...child, checkedOut: true } : child
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold text-center mb-6">Attendance</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4">
        <ul>
          {children.map((child) => (
            <li
              key={child.id}
              className="flex justify-between items-center py-4 border-b last:border-b-0"
            >
              <span className="text-gray-800">{child.name}</span>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-md text-sm ${
                    child.checkedIn
                    ? "bg-zinc-500 text-white cursor-not-allowed"
                    : "text-white bg-zinc-900"
                  }`}
                  onClick={() => handleCheckIn(child.id)}
                  disabled={child.checkedIn}
                >
                  {child.checkedIn ? "Checked In" : "Check In"}
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm ${
                    child.checkedOut
                    ? "bg-zinc-500 text-white cursor-not-allowed"
                    : "text-white bg-zinc-900"
                  }`}
                  onClick={() => handleCheckOut(child.id)}
                  disabled={!child.checkedIn || child.checkedOut}
                >
                  {child.checkedOut ? "Checked Out" : "Check Out"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendancePage;

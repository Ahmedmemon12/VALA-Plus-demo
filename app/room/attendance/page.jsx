"use client"

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';  // Ensure to import the necessary styles

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance date</h1>
      
      {/* Calendar Component */}
      <Calendar
        onChange={handleDateChange}  // Trigger when the date is selected
        value={selectedDate}  // Set the currently selected date
      />
      
      <div className="mt-4">
        <p className="text-lg">Selected Date: {selectedDate.toDateString()}</p>
      </div>
    </div>
  );
}

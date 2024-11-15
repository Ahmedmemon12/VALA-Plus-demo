"use client";

import React, { useState } from 'react';
import { Mic, Home, ClipboardList, MessageCircle, BookOpen, Settings } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from '@/components/ui/alert';
 
const AttendanceRecordsScreen = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { name: 'John Doe', checkedIn: '9:00 AM', checkedOut: false, date: '2023-11-07' },
    { name: 'Jane Smith', checkedIn: false, checkedOut: false, date: '2023-11-07' },
    { name: 'Michael Johnson', checkedIn: '10:15 AM', checkedOut: '6:00 PM', date: '2023-11-07' },
  ]);

  const [isVoiceLogMode, setIsVoiceLogMode] = useState(false);

  const handleCheckIn = (name) => {
    setAttendanceRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.name === name ? { ...record, checkedIn: new Date().toLocaleTimeString() } : record
      )
    );
    console.log(`Checked in ${name}`);
  };

  const handleCheckOut = (name) => {
    setAttendanceRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.name === name ? { ...record, checkedOut: new Date().toLocaleTimeString() } : record
      )
    );
    console.log(`Checked out ${name}`);
  };

  const handleVoiceLog = () => {
    setIsVoiceLogMode(!isVoiceLogMode);
    console.log(isVoiceLogMode ? 'Deactivated Voice Logging' : 'Activated Voice Logging');
  };

  return (
    <div className="mt-6 px-4 flex flex-col gap-10">
      <Card>
        <CardTitle className='text-center p-10'>{"Kindergarten"}</CardTitle>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{"Today's Attendance"}</CardTitle>
        </CardHeader>
        <CardContent>
          {attendanceRecords.map((record) => (
            <div key={record.name} className="flex justify-between items-center py-2 border-b border-gray-200">
              <div className="text-gray-900">{record.name}</div>
              <div className="flex space-x-2">
                <button
                  aria-label="Check In"
                  className={`px-4 py-2 rounded-md text-xs ${record.checkedIn ? 'bg-teal-400 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                  onClick={() => handleCheckIn(record.name)}
                  disabled={!!record.checkedIn}
                >
                  {record.checkedIn ? 'Checked In' : 'Check In'}
                </button>
                <button
                  aria-label="Check Out"
                  className={`px-4 py-2 rounded-md text-xs ${record.checkedOut ? 'bg-teal-400 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                  onClick={() => handleCheckOut(record.name)}
                  disabled={!!record.checkedOut}
                >
                  {record.checkedOut ? 'Checked Out' : 'Check Out'}
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-center">
        <button
          className={`px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white flex items-center text-xs ${isVoiceLogMode ? 'bg-[#FAD4C0] text-[#6C7A89]' : ''}`}
          onClick={handleVoiceLog}
        >
          <Mic className="mr-2" size={20} />
          {isVoiceLogMode ? 'Deactivate Voice Logging' : 'Activate Voice Logging'}
        </button>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>View Attendance Records</CardTitle>
          </CardHeader>
          <CardContent>
            {attendanceRecords.map((record) => (
              <div key={record.date} className="bg-[#F0EFEF] rounded-md p-4 mb-4">
                <div className="text-gray-900 font-medium">{record.name}</div>
                <div className="text-gray-600">Checked in: {record.checkedIn || 'Not Checked In'}</div>
                <div className="text-gray-600">Checked out: {record.checkedOut || 'Not Checked Out'}</div>
                <div className="text-gray-600">Date: {record.date}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceRecordsScreen;

"use client";

import React, { useState } from 'react';
import { Mic, MoveRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const AttendanceRecordsScreen = () => {
  // Sample data for attendance
  const [attendanceRecords, setAttendanceRecords] = useState([
    { name: 'John Doe', date: '2023-11-07', attendanceStatus: 'Present' },
    { name: 'Jane Smith', date: '2023-11-07', attendanceStatus: 'Absent' },
    { name: 'Michael Johnson', date: '2023-11-07', attendanceStatus: 'Present' },
  ]);

  // Data for room-wide activities and tasks
  const [roomActivity, setRoomActivity] = useState('');
  const [roomTasks, setRoomTasks] = useState('');

  const [isVoiceLogMode, setIsVoiceLogMode] = useState(false);

  // Handle voice logging toggle
  const handleVoiceLog = () => {
    setIsVoiceLogMode(!isVoiceLogMode);
    console.log(isVoiceLogMode ? 'Deactivated Voice Logging' : 'Activated Voice Logging');
  };

  // Handle room activity and task updates
  const handleRoomActivityChange = (e) => {
    setRoomActivity(e.target.value);
  };

  const handleRoomTaskChange = (e) => {
    setRoomTasks(e.target.value);
  };

  return (
    <div className="mt-6 px-4 flex flex-col gap-10">
      <Card>
        <CardTitle className="text-center p-3"><h1 className="text-2xl font-bold text-center mb-6 flex flex-col justify-start px-10"><span className="text-xs text-red-600 text-start">{"Wattle Tree's"}</span><span>Kindergarten Children</span></h1></CardTitle>
      </Card>

      {/* Global Room Activities and Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>{"Room Activities & Tasks"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label className="block text-gray-900 font-medium">Room Activity</label>
            <textarea
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Log today's activity (e.g., teach alphabet sounds)"
              value={roomActivity}
              onChange={handleRoomActivityChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 font-medium">Room Task</label>
            <textarea
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Log today's tasks (e.g., distribute fruits)"
              value={roomTasks}
              onChange={handleRoomTaskChange}
            />
          </div>
        </CardContent>
      </Card>

      {/* Daily Attendance for Each Child */}
      <Card>
        <CardHeader>
          <CardTitle>{"Today's Attendance"}</CardTitle>
        </CardHeader>
        <CardContent>
          {attendanceRecords.map((record) => (
            <div key={record.name} className="py-2 border-b border-gray-200">
              <Link className='flex justify-between items-center' href={"/child"}>
                <div className="text-gray-900">{record.name}</div>
                <div className="text-gray-600">{record.attendanceStatus}</div>
              </Link>
            </div>
          ))}
          <Link href={"/room/attendance"}><button className='w-full rounded-md flex items-center justify-start gap-3 pt-4 hover:underline'>View all <MoveRight /></button></Link>
        </CardContent>
      </Card>

      <div className='flex items-center justify-center'>
        <Link href={"/room/children"}><button className='bg-zinc-900 text-white p-4 rounded-md'>View children activities</button></Link>
      </div>
      {/* View Logged Data */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Room Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[#F0EFEF] rounded-md p-4 mb-4">
              <div className="text-gray-900 font-medium">Room Activity:</div>
              <div className="text-gray-600">{roomActivity || 'No Activity Logged'}</div>
            </div>

            <div className="bg-[#F0EFEF] rounded-md p-4 mb-4">
              <div className="text-gray-900 font-medium">Room Task:</div>
              <div className="text-gray-600">{roomTasks || 'No Room Task Logged'}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceRecordsScreen;

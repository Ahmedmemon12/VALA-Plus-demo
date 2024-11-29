"use client"

import React from 'react';
import { 
  School,
  Home, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight,
  AlertOctagon,
  Info
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StaffDashboard() {
  const notifications = [
    { 
      type: 'error', 
      message: 'Emergency: Fire drill scheduled for 2:00 PM today', 
      bgColor: 'bg-gray-100 border-red-500',
      icon: AlertOctagon,
      iconColor: 'text-red-500'
    },
    { 
      type: 'warning', 
      message: 'Pending: 3 children due for routine health check', 
      bgColor: 'bg-gray-100 border-yellow-500',
      icon: Info,
      iconColor: 'text-yellow-500'
    },
    { 
      type: 'success', 
      message: 'Completed: Morning attendance recorded successfully', 
      bgColor: 'bg-gray-100 border-green-500',
      icon: CheckCircle,
      iconColor: 'text-green-500'
    }
  ];

  const quickActions = [
    { label: 'Rooms', icon: School, url: "/rooms" },
    { label: 'Report Incident', icon: AlertTriangle, url:"/incident/report" },
    { label: 'Chats', icon: MessageSquare, url: "/chat/all" }
  ];

  const todaysBrief = [
    'Art activity scheduled for 10:00 AM',
    'Lunch preparation starts at 11:30 AM',
    "Parent meeting with Emma's mom at 3:00 PM"
  ];

  const aiSuggestions = [
    'Review: New engagement techniques for toddlers',
    'Reminder: Update emergency contact information',
    'Tip: Indoor activities for rainy weather'
  ];
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16 pt-3">
      {/* Notifications Section */}
      <div className="space-y-2 px-4">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <Alert 
              key={index} 
              className={`${notification.bgColor} border-l-4 text-zinc-900 shadow-md`}
            >
              <div className="flex items-center">
                <Icon className={`${notification.iconColor} mr-2`} size={20} />
                <AlertDescription>{notification.message}</AlertDescription>
              </div>
            </Alert>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2 p-4 justify-center">
        {quickActions.map(({ label, icon: Icon, url }) => (
          <button
            key={label}
            className="flex flex-col justify-center items-center p-3 h-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={()=>router.push(url)}
          >
            <Icon size={24} className="text-zinc-900 mb-1" />
            <span className="text-sm text-zinc-900">{label}</span>
          </button>
        ))}
      </div>

      {/* Today's Brief */}
      <Card className="mx-4 bg-white shadow-md">
        <CardContent className="pt-4 justify-start">
          <h3 className="text-lg font-medium mb-2">{"Today's Brief"}</h3>
          <ul className="space-y-2">
            {todaysBrief.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle size={16} className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Children Under Supervision */}
      <Card className="mx-4 mt-4 shadow-md">
        <CardContent className="pt-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Rooms Under Supervision</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg flex items-center hover:shadow-md transition-shadow">
            <Link href={"/rooms"}>View List</Link>
            <ChevronRight size={16} className="ml-1" />
          </button>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <div className="px-4 mt-4">
        <h3 className="text-lg font-medium mb-2 text-center">AI Suggestions</h3>
        <div className="space-y-2">
          {aiSuggestions.map((suggestion, index) => (
            <Card key={index} className="bg-[#F0EFEF] shadow-md">
              <CardContent className="p-2 text-center">
                {suggestion}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Motivational Message */}
      <div className="text-center text-[#6C7A89] mt-4 px-4">
        <p className="italic">{"Remember, you're making a difference!"}</p>
      </div>

    </div>
  );
}
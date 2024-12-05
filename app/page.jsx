"use client"

import React from 'react';
import {
  UtensilsCrossed,
  Users,
  Moon,
  Smile,
  Baby,
  Camera,
  HeartPulse,
  BookOpen,
  MessageCircle,
  AlertOctagon,
  Info,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StaffDashboard() {
  // const notifications = [
  //   { 
  //     type: 'error', 
  //     message: 'Emergency: Fire drill scheduled for 2:00 PM today', 
  //     bgColor: 'bg-gray-100 border-red-500',
  //     icon: AlertOctagon,
  //     iconColor: 'text-red-500'
  //   },
  //   { 
  //     type: 'warning', 
  //     message: 'Pending: 3 children due for routine health check', 
  //     bgColor: 'bg-gray-100 border-yellow-500',
  //     icon: Info,
  //     iconColor: 'text-yellow-500'
  //   },
  //   { 
  //     type: 'success', 
  //     message: 'Completed: Morning attendance recorded successfully', 
  //     bgColor: 'bg-gray-100 border-green-500',
  //     icon: CheckCircle,
  //     iconColor: 'text-green-500'
  //   }
  // ];

  // const quickActions = [
  //   { label: 'Rooms', icon: School, url: "/rooms" },
  //   { label: 'Report Incident', icon: AlertTriangle, url:"/incident/report" },
  //   { label: 'Chats', icon: MessageSquare, url: "/chat/all" }
  // ];

  // const todaysBrief = [
  //   'Art activity scheduled for 10:00 AM',
  //   'Lunch preparation starts at 11:30 AM',
  //   "Parent meeting with Emma's mom at 3:00 PM"
  // ];

  // const aiSuggestions = [
  //   'Review: New engagement techniques for toddlers',
  //   'Reminder: Update emergency contact information',
  //   'Tip: Indoor activities for rainy weather'
  // ];
  const router = useRouter()
  const actions = [
    {
      title: "Attendance",
      url: "/attendance",
      icon: <Users className='w-16 h-16' />
    },
    {
      title: "Meal Time",
      url: "/meal",
      icon: <UtensilsCrossed className='w-16 h-16' />
    },
    {
      title: "Sleep",
      url: "/sleep",
      icon: <Moon className='w-16 h-16' />
    },
    {
      title: "Play",
      url: "/play",
      icon: <Smile className='w-16 h-16' />
    },
    {
      title: "Nappy",
      url: "/nappy",
      icon: <Baby className='w-16 h-16' />
    },
    {
      title: "Moments",
      url: "/moments",
      icon: <Camera className='w-16 h-16' />
    },
    {
      title: "Health",
      url: "/",
      icon: <HeartPulse className='w-16 h-16' />
    },
    {
      title: "Learning Club",
      url: "/",
      icon: <BookOpen className='w-16 h-16' />
    },
    {
      title: "Profile Chats",
      url: "/",
      icon: <MessageCircle className='w-16 h-16' />
    },
  ]
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

  return (
    <div className='py-4 bg-white'>
      <div className="px-4 flex flex-col gap-4">
        <h1 className='text-xl'>Notifications</h1>
        <div className='space-y-2'>
          {notifications.splice(0, 3).map((notification, index) => {
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
        <div className='flex justify-center'><Link href={"/notifications"}><button className='bg-zinc-900 text-white py-2 px-8 rounded-lg'>View all</button></Link></div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-3 p-6'>
        {
          actions.map((act, ind) => (
            <Link href={act.url} key={ind}>
              <Card className='flex flex-col gap-2 items-center justify-center w-[200px] p-6 aspect-square bg-[#f6f6f6] border-black rounded-lg'>
                {act.icon}
                <span className='text-2xl text-center'>{act.title}</span>
              </Card>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
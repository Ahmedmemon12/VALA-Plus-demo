"use client"

import React, { useState } from 'react';
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
  CheckCircle,
  Bell
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StaffDashboard() {
  const router = useRouter()
  const [notification, setNotification] = useState(false)
  const actions = [
    {
      title: "Attendance",
      url: "/attendance",
      icon: <Users className='w-20 h-20' />
    },
    {
      title: "Health",
      url: "/health",
      icon: <HeartPulse className='w-20 h-20' />
    },
    {
      title: "Nappy",
      url: "/nappy",
      icon: <Baby className='w-20 h-20' />
    },
    {
      title: "Meal Time",
      url: "/meal",
      icon: <UtensilsCrossed className='w-20 h-20' />
    },
    {
      title: "Sleep",
      url: "/sleep",
      icon: <Moon className='w-20 h-20' />
    },
    {
      title: "Play",
      url: "/play",
      icon: <Smile className='w-20 h-20' />
    },
    {
      title: "Moments",
      url: "/moments",
      icon: <Camera className='w-20 h-20' />
    },
    {
      title: "Learning Club",
      url: "/education",
      icon: <BookOpen className='w-20 h-20' />
    },
    {
      title: "Profile Chats",
      url: "/chat-with-parents",
      icon: <MessageCircle className='w-20 h-20' />
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
    <div className='py-4'>
      <div className="flex justify-end pr-4">
        <span onClick={() => { setNotification(!notification) }} className='bg-black text-white p-4 aspect-square rounded-full relative'>
          <Bell />
          <span className='absolute bg-white text-black aspect-square w-5 h-5 flex items-center justify-center rounded-full top-0 left-0'>{notifications.length}</span>
        </span>
      </div>
      <div className="flex justify-center absolute w-full">
        <div className={`px-4 flex flex-col gap-4 duration-300 ${notification ? "" : "opacity-0 w-0 h-0 overflow-hidden"} w-[95%] rounded-xl shadow-xl bg-[#f6f6f6] p-6`}>
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
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 py-4 px-10'>
        {
          actions.map((act, ind) => (
            <Link href={act.url} key={ind}>
              <Card className='flex flex-col gap-2 items-center justify-center p-6 aspect-square bg-[#f6f6f6] border-black rounded-3xl shadow-lg shadow-black/20'>
                <span className="bg-black rounded-full text-white p-6 flex items-center justify-center">{act.icon}</span>
                <span className='text-4xl text-center'>{act.title}</span>
              </Card>
            </Link>
          ))
        }
      </div>
      <div className='w-full flex items-center justify-center py-10 flex-col'>
        <span className='text-gray-600 text-xl'>&copy; 2024 VALA Plus. All rights reserved.</span>
        <span className='text-gray-600 text-sm'>Empowering childcare professionals with innovative solutions.</span>
      </div>
    </div>
  );
}
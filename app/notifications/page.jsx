import React from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertOctagon, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

export default function page() {
    const notifications = [
        {
            type: 'error',
            message: 'Emergency: Fire drill scheduled for 2:00 PM today',
            bgColor: 'bg-gray-100 border-red-500',
            icon: AlertOctagon,
            iconColor: 'text-red-500'
        },
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
        <div className=''>
            <div className='flex justify-end p-4'>
                <Link href={"/activities"}><button className='bg-zinc-900 text-white rounded-md px-4 py-2'>All activities</button></Link>
            </div>
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
        </div>
    )
}

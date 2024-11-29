import React from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertOctagon, CheckCircle, Info } from 'lucide-react';

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
        <div className='py-6'>
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

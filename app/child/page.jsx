"use client"

import { Card } from '@/components/ui/card';
import { MessageCircleMore, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ChildInfoPage = () => {
    const childInfo = {
        profilePic: 'https://via.placeholder.com/120x120',
        fullName: 'Emma Wilkins',
        fatherName: 'John Wilkins',
        motherName: 'Sarah Wilkins',
        fatherPhone: '555-1234',
        motherPhone: '555-5678',
        roomName: 'Kindergarten',
        supervisor: 'Mrs. Johnson',
        reports: [
            'https://via.placeholder.com/200x250',
            'https://via.placeholder.com/200x250'
        ],
        educationRemark: {
            icon: '⭐',
            description: 'Excellent academic performance'
        },
        behaviourRemark: {
            icon: '😀',
            description: 'Good behavior in class'
        },
        healthStatus: 'Healthy with no issues',
        vaccinationStatus: 'Up to date on vaccinations',
        lastCheckup: 'Last check-up on 12th November 2024, healthy',
        growthMilestones: 'Height and weight are on target',
        allergies: 'None',
        photos: [
            'https://via.placeholder.com/200x200',
            'https://via.placeholder.com/200x200',
            'https://via.placeholder.com/200x200',
            'https://via.placeholder.com/200x200',
            'https://via.placeholder.com/200x200',
            'https://via.placeholder.com/200x200'
        ]
    };

    return (
        <div className="bg-white text-zinc-900 p-8">
            <div className="flex flex-col gap-8">
                <Card className='p-5'>
                    <div className="flex items-center flex-col gap-3 space-x-4 mb-4">
                        <img src={childInfo.profilePic} alt="Profile" className="rounded-full w-20 h-20" />
                        <div>
                            <h1 className="text-2xl font-bold">{childInfo.fullName}</h1>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 justify-center">
                            <Phone />
                            <span>Father: {childInfo.fatherName} - {childInfo.fatherPhone}</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <Phone />
                            <span>Mother: {childInfo.motherName} - {childInfo.motherPhone}</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <span className="font-bold">Room:</span>
                            <span>{childInfo.roomName}</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <span className="font-bold">Under Supervision:</span>
                            <span className="bg-teal-200 rounded-full px-3 py-1">{childInfo.supervisor}</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <button className="bg-zinc-900 flex gap-3 text-white rounded-md px-4 py-2">
                                <MessageCircleMore />
                                <Link href={"/chat/new"}>
                                    Chat with Parent
                                </Link>
                            </button>
                        </div>
                    </div>
                </Card>
                <Card className='p-5'>
                    <h2 className="text-xl font-bold mb-4">Performance</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {childInfo.reports.map((report, index) => (
                            <img key={index} src={report} alt={`Report ${index + 1}`} className="rounded-md" />
                        ))}
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold">{childInfo.educationRemark.icon}</span>
                            <span>{childInfo.educationRemark.description}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold">{childInfo.behaviourRemark.icon}</span>
                            <span>{childInfo.behaviourRemark.description}</span>
                        </div>
                    </div>
                </Card>
                <Card className='p-5'>
                    <h2 className="text-xl font-bold mb-4">Health Report</h2>
                    <div className="space-y-2">
                        <div><span className="font-bold">Health Status:</span> {childInfo.healthStatus}</div>
                        <div><span className="font-bold">Vaccination Status:</span> {childInfo.vaccinationStatus}</div>
                        <div><span className="font-bold">Last Check-up:</span> {childInfo.lastCheckup}</div>
                        <div><span className="font-bold">Growth Milestones:</span> {childInfo.growthMilestones}</div>
                        <div><span className="font-bold">Allergies:</span> {childInfo.allergies}</div>
                    </div>
                </Card>
                <Card className='p-5'>
                    <h2 className="text-xl font-bold mb-4">Moments</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {childInfo.photos.map((photo, index) => (
                            <img key={index} src={photo} alt={`Photo ${index + 1}`} className="rounded-md border-2 border-slate-blue" />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ChildInfoPage;

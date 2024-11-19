"use client"

import Link from 'next/link'
import React from 'react'

export default function page() {
    const incidents = [
        {
            date: '2023-05-01',
            type: 'Workplace Injury',
            details: 'Employee slipped on wet floor and sustained minor injuries.'
        },
        {
            date: '2023-04-15',
            type: 'Equipment Malfunction',
            details: 'Machinery breakdown caused production delays.'
        },
        {
            date: '2023-03-30',
            type: 'Fire Alarm',
            details: 'False alarm triggered due to system error.'
        }
    ]
    return (
        <div className="mt-4 mb-20 p-5">
            <div className='flex w-full gap-2 items-center mb-4'>
                <div className="border rounded-md px-3 w-[80%] py-2 flex gap-2">
                    <input
                        type="text"
                        placeholder="Search incidents"
                        className="bg-transparent w-full focus:outline-none"
                    />
                </div>
                <Link href={"/incident/report"}><button className='bg-zinc-900 p-2 rounded-sm text-white px-5'>Report</button></Link>
            </div>
            {incidents.map((incident, index) => (
                <div
                    key={index}
                    className="bg-[#F0EFEF] rounded-md p-4 mb-2 cursor-pointer hover:bg-[#E6E6E6] transition-colors"
                >
                    <h3 className="text-[#333333] font-bold">{incident.date} - {incident.type}</h3>
                    <p className="text-[#333333]">{incident.details}</p>
                </div>
            ))}
        </div>
    )
}

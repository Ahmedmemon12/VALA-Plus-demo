"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const AttendancePage = () => {
    const [children, setChildren] = useState([
        { 'id': 1, 'name': 'Ava', 'url': 'baby', 'age': '0-1' },
        { 'id': 2, 'name': 'Liam', 'url': 'baby', 'age': '1-2' },
        { 'id': 3, 'name': 'Emma', 'url': 'baby', 'age': '2-3' },
        { 'id': 4, 'name': 'Noah', 'url': 'baby', 'age': '3-4' },
        { 'id': 5, 'name': 'Sophia', 'url': 'baby', 'age': '4-5' },
        { 'id': 6, 'name': 'Oliver', 'url': 'baby', 'age': '0-1' },
        { 'id': 7, 'name': 'Isabella', 'url': 'baby', 'age': '1-2' },
        { 'id': 8, 'name': 'Elijah', 'url': 'baby', 'age': '2-3' },
        { 'id': 9, 'name': 'Charlotte', 'url': 'baby', 'age': '3-4' },
        { 'id': 10, 'name': 'James', 'url': 'baby', 'age': '4-5' },
        { 'id': 11, 'name': 'Amelia', 'url': 'baby', 'age': '0-1' },
        { 'id': 12, 'name': 'William', 'url': 'baby', 'age': '1-2' },
        { 'id': 13, 'name': 'Mia', 'url': 'baby', 'age': '2-3' },
        { 'id': 14, 'name': 'Lucas', 'url': 'baby', 'age': '3-4' },
        { 'id': 15, 'name': 'Harper', 'url': 'baby', 'age': '4-5' },
        { 'id': 16, 'name': 'Ethan', 'url': 'baby', 'age': '0-1' },
        { 'id': 17, 'name': 'Avery', 'url': 'baby', 'age': '1-2' },
        { 'id': 18, 'name': 'Mason', 'url': 'baby', 'age': '2-3' },
        { 'id': 19, 'name': 'Ella', 'url': 'baby', 'age': '3-4' },
        { 'id': 20, 'name': 'Henry', 'url': 'baby', 'age': '4-5' }
    ]);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-center mb-6 flex flex-col justify-start px-10"><span className="text-xs text-red-600 text-start">{"Wattle Tree's"}</span><span>Kindergarten Children</span></h1>
            <div className="flex justify-center mb-3"><input type="text" className="border-black border w-[80%] p-2 rounded-l-lg" placeholder="Search incidents" /><button className="w-16 rounded-r-lg flex items-center justify-center bg-zinc-900 text-white"><Search /></button></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {children.map((child) => (
                    <Link
                        key={child.id}
                        href={`/room/children/${child.url}`}
                        className="block group"
                    >
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative">
                                <img
                                    src={`https://www.shutterstock.com/image-photo/adorable-baby-boy-about-one-260nw-1823848421.jpg`}
                                    alt={child.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-0 w-full left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 text-center text-sm font-semibold">
                                    {child.name}
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-gray-600 text-sm">{child.age} years</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AttendancePage;

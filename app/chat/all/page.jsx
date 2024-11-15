"use client"

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const ChatListPage = () => {
    const chats = [
        { name: 'AI', lastMessage: 'Here is your daily report. Everything is going great, the children are doing well and the teachers are happy.', lastMessageTime: '12:30 PM', url:"/ai" },
        { name: 'Administrator', lastMessage: 'Please review the center’s new policies, as we have made some updates to the guidelines for safety measures...', lastMessageTime: '11:50 AM', url:"/admin" },
        { name: 'Emma\'s parents', lastMessage: 'Emma was very happy today! She had a lot of fun playing with the blocks and interacting with the other kids...', lastMessageTime: '11:00 AM', url:"/new" },
    ];

    return (
        <div className="bg-white text-zinc-900 p-8">
            <h1 className="text-2xl font-bold mb-4">Chats</h1>
            <div className="space-y-4">
                {chats.map((chat, index) => (
                    <Card key={index} className="p-4 hover:bg-zinc-100 cursor-pointer">
                        <Link href={`/chat/${chat.url}`} className='flex justify-between'>
                            <div className="flex justify-between flex-col">
                                <span className="font-semibold">{chat.name}</span>
                                <span className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[250px]">{chat.lastMessage}...</span>
                            </div>
                            <div className="text-xs text-gray-400">{chat.lastMessageTime}</div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ChatListPage;

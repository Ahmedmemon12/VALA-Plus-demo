"use client";

import { Paperclip, Mic, ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
    const router = useRouter();
    const [childName, setChildName] = useState("Emma")
    const searchParams = useSearchParams();
    useEffect(() => {
        const child = searchParams.get("child")
        if (child) {
            const formattedName = child.charAt(0).toUpperCase() + child.slice(1).toLowerCase()
            setChildName(formattedName)
        }
    }, [searchParams])
    const [messages, setMessages] = useState([
        { sender: `${childName}'s parent`, text: "Hello! How can I assist you today?", type: "incoming" },
        { sender: "You", text: "Can you provide me with today's report?", type: "outgoing" },
        { sender: `${childName}'s parent`, text: "Certainly! Here is a summary of today's activities.", type: "incoming" },
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [isText, setIsText] = useState(false)

    useEffect(() => {
        if (newMessage != "") {
            setIsText(false)
        }
        else {
            setIsText(true)
        }
    }, [newMessage])

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { sender: "You", text: newMessage, type: "outgoing" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="flex flex-col h-[80vh] bg-white text-zinc-900">
            {/* Header */}
            <div className="text-zinc-900 bg-slate-200 p-4 font-bold flex gap-4">
                <Link href={"/chat/all"}><ChevronLeft /></Link>
                {`${childName}'s parent`}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.type === "incoming" ? "justify-start" : "justify-end"
                            }`}
                    >
                        <div
                            className={`max-w-[200px] p-3 rounded-lg ${message.type === "incoming"
                                ? "bg-zinc-100 text-zinc-900"
                                : "bg-zinc-900 text-white"
                                }`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="border-t p-4 flex items-center space-x-3">
                {/* Attachments */}
                <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200">
                    <Paperclip className="text-zinc-600" size={20} />
                </button>

                {/* Text Input */}
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                {!isText
                    ?
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                    >
                        Send
                    </button>
                    :
                    <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200">
                        <Mic className="text-zinc-600" size={20} />
                    </button>
                }

            </div>
        </div >
    );
};

export default ChatPage;

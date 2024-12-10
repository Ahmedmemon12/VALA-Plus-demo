"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MoveLeft, Calendar, Camera, Star, AlertCircle } from "lucide-react";

export default function KidsClub() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const childName = searchParams.get("child") || "All Kids";

  const activities = [
    { title: "Arts & Crafts", time: "10:00 AM", description: "Create DIY crafts." },
    { title: "Storytelling", time: "11:30 AM", description: "Explore classic tales." },
    { title: "Outdoor Games", time: "1:00 PM", description: "Fun activities outside." },
    { title: "Music & Dance", time: "3:00 PM", description: "Dance and sing along." },
  ];

  const momentsGallery = [
    { id: 1, description: "Painting session", imageUrl: "/images/kids-painting.jpg" },
    { id: 2, description: "Group storytelling", imageUrl: "/images/storytelling.jpg" },
  ];

  const rewards = [
    { name: "Emma", badge: "Creative Superstar" },
    { name: "Liam", badge: "Team Player" },
  ];

  const announcements = [
    { id: 1, title: "Upcoming Picnic", details: "Don't forget your picnic basket for Friday!" },
    { id: 2, title: "Costume Day", details: "Wear your favorite costumes next Monday!" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex gap-4 items-center">
        <button onClick={() => router.back()} className="bg-[#f6f6f6] p-2 rounded-md">
          <MoveLeft />
        </button>
        <h1 className="text-2xl font-semibold">{`${childName}'s Kids Club`}</h1>
      </div>

      {/* Overview Section */}
      <div className="bg-gray-100 p-4 rounded-lg my-4">
        <h2 className="text-xl font-semibold mb-2">Welcome to the Kids Club</h2>
        <p className="text-sm text-gray-700">
          Discover exciting activities, explore creativity, and make lasting memories.
        </p>
      </div>

      {/* Activity Planner */}
      <section className="my-6">
        <h2 className="text-xl font-semibold mb-4">Activity Planner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg border hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold">{activity.title}</h3>
              <p className="text-sm text-gray-600">Time: {activity.time}</p>
              <p className="text-sm text-gray-700 mt-2">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="my-6">
        <h2 className="text-xl font-semibold mb-4">Moments Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {momentsGallery.map((moment) => (
            <div key={moment.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-sm p-4">
              <img src="https://via.placeholder.com/200x200" alt={moment.description} className="w-full h-32 rounded-lg object-cover" />
              <p className="p-2 text-sm text-gray-800">{moment.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section className="my-6">
        <h2 className="text-xl font-semibold mb-4">Rewards & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward, index) => (
            <div key={index} className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold">{reward.name}</h3>
              <p className="text-sm text-gray-800">Badge: {reward.badge}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="my-6">
        <h2 className="text-xl font-semibold mb-4">Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold">{announcement.title}</h3>
              <p className="text-sm text-gray-700">{announcement.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

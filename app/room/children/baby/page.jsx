"use client";
import { useState } from "react";
import { FoodTrackingComponent } from "@/components/blocks/foodTracker";
import { SunscreenApplicationForm } from "@/components/blocks/SunscreenApplicationForm";
import { NappyChangeForm } from "@/components/blocks/NappyChangeForm";
import { SleepCheckManager } from "@/components/blocks/SleepCheckForm";
import { AttendanceTrackingComponent } from "@/components/blocks/AttendanceTracking"; // Add this import
import { Card } from "@/components/ui/card";
import { Baby, Clock, Moon, Sun, UtensilsCrossed } from "lucide-react";

export default function SmBabyPage() {
  const [childData, setChildData] = useState({
    foodData: {},
    nappyData: { status: "", diaperCream: false, quantity: "" },
    sunscreenTime: "",
    sleepData: { start: "", end: "" },
  });
  const [tab, setTab] = useState("attendance");

  const handleFoodChange = (meal, field, value) => {
    setChildData((prevData) => ({
      ...prevData,
      foodData: {
        ...prevData.foodData,
        [meal]: {
          ...prevData.foodData[meal],
          [field]: value,
        },
      },
    }));
  };

  const handleNappyChange = (field, value) => {
    setChildData((prevData) => ({
      ...prevData,
      nappyData: {
        ...prevData.nappyData,
        [field]: value,
      },
    }));
  };

  const handleSunscreenChange = (value) => {
    setChildData((prevData) => ({
      ...prevData,
      sunscreenTime: value,
    }));
  };

  const handleSleepChange = (field, value) => {
    setChildData((prevData) => ({
      ...prevData,
      sleepData: {
        ...prevData.sleepData,
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-4 flex flex-col gap-3">
      {/* Title Card */}
      <Card className="p-2 text-lg">
        <h1 className="font-black">{"Emma's Activities"}</h1>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b-2 overflow-x-scroll w-[90vw]">
        <button
          className={`p-2 text-xs flex items-center gap-1 ${tab === "attendance" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("attendance")}
        >
          <Clock /> Attendance
        </button>
        <button
          className={`p-2 text-xs flex items-center gap-1 ${tab === "food" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("food")}
        >
          <UtensilsCrossed /> Food
        </button>
        <button
          className={`p-2 text-xs flex items-center gap-1 ${tab === "sunscreen" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("sunscreen")}
        >
          <Sun /> Sunscreen
        </button>
        <button
          className={`p-2 text-xs flex items-center gap-1 ${tab === "nappy" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("nappy")}
        >
          <Baby /> Nappy
        </button>
        <button
          className={`p-2 text-xs flex items-center gap-1 ${tab === "sleep" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("sleep")}
        >
          <Moon /> Sleep
        </button>
      </div>

      {/* Activity Logs Card */}
      <Card className="py-2">
        {tab === "food" && (
          <div className="p-2">
            <span className="font-bold">Food Information</span>
            <div>
              {Object.keys(childData.foodData).length === 0
                ? "No food information logged yet."
                : Object.entries(childData.foodData).map(([meal, data], index) => (
                  <div key={index}>
                    {meal}: {data.amount || "None"}
                  </div>
                ))}
            </div>
          </div>
        )}
        {tab === "sunscreen" && (
          <div className="p-2">
            <span className="font-bold">Sunscreen Application</span>
            <div>
              {childData.sunscreenTime
                ? `Sunscreen applied at ${childData.sunscreenTime}`
                : "No sunscreen application logged yet."}
            </div>
          </div>
        )}
        {tab === "attendance" && <AttendanceTrackingComponent />}
      </Card>

      {/* Tab Content */}
      <div className="p-4">
        {tab === "food" && (
          <FoodTrackingComponent
            foodData={childData.foodData}
            onFoodChange={handleFoodChange}
          />
        )}

        {tab === "sunscreen" && (
          <SunscreenApplicationForm
            sunscreenTime={childData.sunscreenTime}
            onTimeChange={handleSunscreenChange}
          />
        )}

        {tab === "nappy" && (
          <NappyChangeForm
            nappyData={childData.nappyData}
            onChange={handleNappyChange}
          />
        )}

        {tab === "sleep" && (
          <SleepCheckManager
            sleepData={childData.sleepData}
            onSleepChange={handleSleepChange}
          />
        )}
      </div>
    </div>
  );
}

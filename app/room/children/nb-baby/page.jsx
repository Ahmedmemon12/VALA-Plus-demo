"use client";
import { useState } from "react";
import { FoodTrackingComponent } from "../../../../components/blocks/foodTracker";
import { NappyChangeForm } from "../../../../components/blocks/NappyChangeForm";
import { SunscreenApplicationForm } from "../../../../components/blocks/SunscreenApplicationForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function NbBabyPage() {
  const [childData, setChildData] = useState({
    foodData: {},
    nappyData: { status: "", diaperCream: false, quantity: "" },
    sunscreenTime: "",
  });
  const [tab, setTab] = useState("food");

  // Handle updates to food data
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

  // Handle updates to nappy data
  const handleNappyChange = (field, value) => {
    setChildData((prevData) => ({
      ...prevData,
      nappyData: {
        ...prevData.nappyData,
        [field]: value,
      },
    }));
  };

  // Handle updates to sunscreen application time
  const handleSunscreenChange = (value) => {
    setChildData((prevData) => ({
      ...prevData,
      sunscreenTime: value,
    }));
  };

  return (
    <div className="p-4 flex flex-col gap-3">
      <Card className="p-4 text-white bg-zinc-900">
        <h1 className="font-black">Emma activities</h1>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b-2">
        <button
          className={`p-2 ${tab === "food" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("food")}
        >
          Food
        </button>
        <button
          className={`p-2 ${tab === "sunscreen" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("sunscreen")}
        >
          Sunscreen
        </button>
        <button
          className={`p-2 ${tab === "nappy" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          onClick={() => setTab("nappy")}
        >
          Nappy Tracker
        </button>
      </div>

      {/* Activity Logs */}
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
        {tab === "nappy" && (
          <div className="p-2">
            <span className="font-bold">Nappy Tracker</span>
            <div>
              Status: {childData.nappyData.status || "Not logged"}
              <br />
              Diaper Cream: {childData.nappyData.diaperCream ? "Yes" : "No"}
              <br />
              Quantity: {childData.nappyData.quantity || "Not logged"}
            </div>
          </div>
        )}
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
      </div>
    </div>
  );
}

"use client"
import { useState, useEffect } from 'react';
import { FoodTrackingComponent } from '../../../../components/blocks/foodTracker';
import { NappyChangeForm } from '../../../../components/blocks/NappyChangeForm';
import { SunscreenApplicationForm } from '../../../../components/blocks/SunscreenApplicationForm';

export default function NbBabyPage() {
  const [childData, setChildData] = useState({
    foodData: {},
    nappyData: { status: '', diaperCream: false, quantity: '' },
    sunscreenTime: '',
  });

  useEffect(() => {
    // Fetch data for nb-baby (if needed)
  }, []);

  const handleFoodChange = (meal, field, value) => {
    // Handle food data update
  };

  const handleNappyChange = (field, value) => {
    // Handle nappy data update
  };

  const handleSunscreenChange = (value) => {
    // Handle sunscreen time change
  };

  return (
    <div className="p-4">
      <h1>Track Activities for 0-1 Year Old</h1>

      <NappyChangeForm nappyData={childData.nappyData} onChange={handleNappyChange} />
      <SunscreenApplicationForm sunscreenTime={childData.sunscreenTime} onTimeChange={handleSunscreenChange} />
      <FoodTrackingComponent foodData={childData.foodData} onFoodChange={handleFoodChange} />
    </div>
  );
}

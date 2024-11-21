"use client"

import { useState, useEffect } from 'react';
import { FoodTrackingComponent } from '../../../../components/blocks/foodTracker';
import { NappyChangeForm } from '../../../../components/blocks/NappyChangeForm';
import { SunscreenApplicationForm } from '../../../../components/blocks/SunscreenApplicationForm';
import { SleepCheckForm } from '../../../../components/blocks/SleepCheckForm';

export default function XlBabyPage() {
  const [childData, setChildData] = useState({
    foodData: {},
    nappyData: { status: '', diaperCream: false, quantity: '' },
    sunscreenTime: '',
    sleepCheckData: { time: '', interval: '' },
  });

  useEffect(() => {
    // Fetch data for xl-baby (if needed)
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

  const handleSleepCheckChange = (field, value) => {
    // Handle sleep check data update
  };

  return (
    <div className="p-4">
      <h1>Track Activities for 4-5 Year Old</h1>

      <NappyChangeForm nappyData={childData.nappyData} onChange={handleNappyChange} />
      <SunscreenApplicationForm sunscreenTime={childData.sunscreenTime} onTimeChange={handleSunscreenChange} />
      <SleepCheckForm sleepCheckData={childData.sleepCheckData} onSleepCheck={handleSleepCheckChange} />
      <FoodTrackingComponent foodData={childData.foodData} onFoodChange={handleFoodChange} />
    </div>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FoodTrackingComponent } from "@/components/blocks/foodTracker";
import { SunscreenApplicationForm } from "@/components/blocks/SunscreenApplicationForm";
import { NappyChangeForm } from "@/components/blocks/NappyChangeForm";
import { SleepCheckManager } from "@/components/blocks/SleepCheckForm";
import { AttendanceTrackingComponent } from "@/components/blocks/AttendanceTracking";
import { Card } from "@/components/ui/card";
import { Activity, ArrowUpDown, Baby, ChevronDown, ChevronUp, Clock, Moon, NotepadText, Sun, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function SmBabyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedModal, setExpandedModal] = useState(false)
  const [selectModal, setSelectModal] = useState(false)
  const [childName, setChildName] = useState("Emma")
  const [tab, setTab] = useState("activities");
  const children = ['Ava',
    'Liam',
    'Emma',
    'Noah',
    'Sophia',
    'Jack',
    'Oliver',
    'Isabella',
    'Elijah',
    'Charlotte',
    'James',
    'Amelia',
    'William',
    'Mia',
    'Lucas',
    'Harper',
    'Ethan',
    'Avery',
    'Mason',
    'Ella',
    'Henry'
  ]
  const dates = [
    '2024-11-25',
    '2024-11-24',
    '2024-11-23',
    '2024-11-22',
    '2024-11-21'
  ]

  const [childData, setChildData] = useState({
    attendance: {},
    foodData: {},
    nappyData: { status: "", diaperCream: false },
    sunscreenTime: "",
    sleepData: { start: "", end: "" },
  });

  const handleSunscreenChange = (value) => {
    setChildData((prevData) => ({
      ...prevData,
      sunscreenTime: value,
    }));
  };
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
  const handleNappyChange = (updatedEntries) => {
    const lastEntry = updatedEntries[updatedEntries.length - 1]; // Get the latest nappy entry
    setChildData((prevData) => ({
      ...prevData,
      nappyData: lastEntry, // Update nappyData with the latest entry
    }));
  };
  const handleAttendanceChange = (attendance) => {
    setChildData((prevData) => ({
      ...prevData,
      attendance: {
        ...prevData.attendance,
        ...attendance, // Update only the attendance data
      },
    }));
  };
  useEffect(() => {
    const activity = searchParams.get("activity"); // Get 'activity' query parameter
    if (["attendance", "food", "sunscreen", "nappy", "sleep"].includes(activity)) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
    const mode = searchParams.get("mode")
    if (["activities", "logs"].includes(mode)) {
      setTab(mode)
    }
    const childParam = searchParams.get("child"); // Rename to avoid conflict
    if (children.map(c => c.toLowerCase()).includes(childParam)) {
      const index = children.findIndex(c => c.toLowerCase() === childParam);
      setChildName(children[index]);
    }

  }, [searchParams]);

  const handleCloseModal = (e) => {
    if (e.target.id === "modal-overlay") {
      router.push(`/room/children/baby`); // Reset query parameters
    }
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

  const renderModalContent = () => {
    const activity = searchParams.get("activity"); // Get the current activity
    switch (activity) {
      case "attendance":
        return (
          <AttendanceTrackingComponent
            onAttendanceChange={handleAttendanceChange}
          />);
      case "food":
        return (
          <FoodTrackingComponent
            foodData={childData.foodData}
            onFoodChange={handleFoodChange}
          />
        );
      case "sunscreen":
        return (
          <SunscreenApplicationForm
            sunscreenTime={childData.sunscreenTime}
            onTimeChange={handleSunscreenChange}
          />
        );
      case "nappy":
        return (
          <NappyChangeForm onChange={handleNappyChange} />
        );
      case "sleep":
        return (
          <SleepCheckManager
            sleepData={childData.sleepData}
            onSleepChange={handleSleepChange}
          />
        );
      default:
        return null;
    }
  };
  const handleSelect = (value) => {
    setChildName(value)
    setSelectModal(!selectModal)
  }

  return (
    <div className="p-2 flex flex-col gap-3">
      {/* Title Card */}
      <Card className="p-2 text-lg flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-between px-2">
          <h1 className="text-lg font-bold">
            {`${childName}'s activities`}
          </h1>
          <button className="bg-zinc-900 text-white rounded-lg text-xs flex gap-2 items-center p-2" onClick={() => setSelectModal(!selectModal)}><ArrowUpDown />Switch Children</button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 border-b-2 overflow-x-scroll w-[90vw]">
          <button
            className={`p-2 text-xs flex items-center gap-1 ${tab === "activities" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
            onClick={() => {
              setTab("activities")
              router.push("?mode=activities")
            }}
          >
            <Activity /> Activities
          </button>
          <button
            className={`p-2 text-xs flex items-center gap-1 ${tab === "logs" ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
            onClick={() => {
              setTab("logs")
              router.push("?mode=logs")
            }
            }
          >
            <NotepadText /> Logs
          </button>
        </div>
        {tab == "logs"
          ?
          <Card className={`bg-blue-100 rounded-lg shadow-md duration-500`}>
            <div className="space-y-4 p-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Attendance:</h3>
                {childData.attendance.checkInTime ? (
                  <p className="text-sm">
                    <span className="font-semibold">Checked In:</span> {childData.attendance.checkInTime}
                  </p>
                ) : (
                  <p className="text-gray-600">No check-in data logged yet</p>
                )}
                {childData.attendance.checkOutTime ? (
                  <p className="text-sm">
                    <span className="font-semibold">Checked Out:</span> {childData.attendance.checkOutTime}
                  </p>
                ) : (
                  <p className="text-gray-600">No check-out data logged yet</p>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Food:</h3>
                {Object.keys(childData.foodData).length > 0 ? (
                  <ul className="list-inside pl-4">
                    {Object.entries(childData.foodData).map(([meal, details]) => (
                      <li key={meal} className="mb-2">
                        <span className="font-medium">{meal}:</span>
                        <div className="pl-4">
                          {Object.entries(details).map(([field, value]) => (
                            <p key={field} className="text-sm">
                              <span className="font-semibold">{field}:</span> {value}
                            </p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No data logged yet</p>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Nappy:</h3>
                {childData.nappyData.status ? (
                  <p className="text-sm">
                    <span className="font-semibold">Status:</span> {childData.nappyData.status},
                    <span className="font-semibold"> Diaper Cream:</span> {childData.nappyData.diaperCream ? "Yes" : "No"}
                  </p>
                ) : (
                  <p className="text-gray-600">No data logged yet</p>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Sunscreen Time:</h3>
                <p className="text-sm">
                  {childData.sunscreenTime || "No data logged yet"}
                </p>
              </div>


              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Sleep:</h3>
                {childData.sleepData.start || childData.sleepData.end ? (
                  <p className="text-sm">
                    <span className="font-semibold">Start:</span> {childData.sleepData.start || "N/A"},
                    <span className="font-semibold"> End:</span> {childData.sleepData.end || "N/A"}
                  </p>
                ) : (
                  <p className="text-gray-600">No data logged yet</p>
                )}
              </div>

            </div>
          </Card>
          :
          <div className="grid grid-cols-2 w-full gap-6">
            <Link href={`?activity=attendance`}>
              <Card className="w-full flex justify-center items-center flex-col aspect-square gap-4 text-xl font-bold bg-zinc-400/50">
                <Clock className="w-12 h-12" /> Attendance
              </Card>
            </Link>
            <Link href={`?activity=food`}>
              <Card className="w-full flex justify-center items-center flex-col aspect-square gap-4 text-xl font-bold bg-zinc-400/50">
                <UtensilsCrossed className="w-12 h-12" /> Food
              </Card>
            </Link>
            <Link href={`?activity=sunscreen`}>
              <Card className="w-full flex justify-center items-center flex-col aspect-square gap-4 text-xl font-bold bg-zinc-400/50">
                <Sun className="w-12 h-12" /> Sunscreen
              </Card>
            </Link>
            <Link href={`?activity=nappy`}>
              <Card className="w-full flex justify-center items-center flex-col aspect-square gap-4 text-xl font-bold bg-zinc-400/50">
                <Baby className="w-12 h-12" /> Nappy
              </Card>
            </Link>
            <Link href={`?activity=sleep`}>
              <Card className="w-full flex justify-center items-center flex-col aspect-square gap-4 text-xl font-bold bg-zinc-400/50">
                <Moon className="w-12 h-12" /> Sleep
              </Card>
            </Link>
          </div>
        }
      </Card>

      {selectModal
        ?
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/50 flex justify-start items-start z-50 px-4 pt-24"
          onClick={() => setSelectModal(!selectModal)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <select
              // ref={selectRef} // Attach ref to the select element
              id="childSelect"
              value={childName}
              className="w-full px-4 py-2 border rounded-md"
              onChange={(e) => handleSelect(e.target.value)} // Handle selection change if necessary
            >
              {children.map((child) => (
                <option key={child} value={child}>
                  {child}
                </option>
              ))}
            </select>
          </div>
        </div>
        :
        <></>
      }

      {modalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
}

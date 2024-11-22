import { useState } from "react";
import { Pencil, X } from "lucide-react";

export function NappyChangeForm({ onChange }) {
  const [nappyEntries, setNappyEntries] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("");
  const [diaperApplied, setDiaperApplied] = useState(false);

  const handleAddEntry = () => {
    if (!currentStatus) return alert("Please select a nappy status.");
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newEntry = { time: currentTime, status: currentStatus, cream: diaperApplied };
    setNappyEntries([...nappyEntries, newEntry]);
    setCurrentStatus(""); // Reset after adding
    setDiaperApplied(false); // Reset diaper cream checkbox
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = [...nappyEntries];
    updatedEntries.splice(index, 1);
    setNappyEntries(updatedEntries);
  };

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-4">
        {["Wet", "Soiled", "Both"].map((status) => (
          <button
            key={status}
            onClick={() => setCurrentStatus(status)}
            className={`px-4 py-2 border rounded ${
              currentStatus === status ? "bg-zinc-900 text-white" : "bg-gray-100"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={diaperApplied}
          onChange={(e) => setDiaperApplied(e.target.checked)}
          id="diaperCream"
        />
        <label htmlFor="diaperCream" className="cursor-pointer">
          Apply Diaper Cream
        </label>
      </div>

      <button
        onClick={handleAddEntry}
        className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-900"
      >
        Apply Diaper
      </button>

      {/* Display Entries */}
      <div className="mt-4">
        {nappyEntries.length > 0 && (
          <div className="space-y-2">
            {nappyEntries.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded bg-gray-100"
              >
                <div className="flex gap-2">
                  <span className="font-bold">{entry.time}</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      entry.status === "Wet"
                        ? "bg-blue-100 text-blue-800"
                        : entry.status === "Soiled"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {entry.status}
                  </span>
                  {entry.cream && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      Cream
                    </span>
                  )}
                </div>
                <button onClick={() => handleDeleteEntry(index)}>
                  <X className="w-5 h-5 text-red-500 hover:text-red-800" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

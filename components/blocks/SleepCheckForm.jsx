import React, { useState } from "react";

export function SleepCheckManager() {
  const [sleepSessions, setSleepSessions] = useState([]);

  // Start a new sleep session
  const handleStartSleeping = () => {
    const newSession = {
      id: Date.now(),
      startTime: new Date().toLocaleTimeString(),
      endTime: null,
      actions: [],
    };
    setSleepSessions((prev) => [...prev, newSession]);
  };

  // Handle action for Check Breathing or Concern
  const handleAction = (sessionId, actionType) => {
    setSleepSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              actions: session.actions.some(
                (action) => action.type === actionType
              )
                ? session.actions.map((action) =>
                    action.type === actionType
                      ? { ...action, time: new Date().toLocaleTimeString() }
                      : action
                  )
                : [
                    ...session.actions,
                    {
                      type: actionType,
                      time: new Date().toLocaleTimeString(),
                    },
                  ],
            }
          : session
      )
    );
  };

  // Handle Wake action to end the session
  const handleWake = (sessionId) => {
    setSleepSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, endTime: new Date().toLocaleTimeString() }
          : session
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-16 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Sleep Check Manager</h1>

      {/* Start Sleep Button */}
      <button
        onClick={handleStartSleeping}
        className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 py-2 rounded-lg shadow mb-4"
      >
        Start Sleeping
      </button>

      {/* Render Sleep Sessions */}
      {sleepSessions.map((session) => (
        <div
          key={session.id}
          className="bg-white p-4 rounded-lg shadow mb-4 border"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">Sleep Session</h2>
              <p className="text-sm text-gray-600">Started: {session.startTime}</p>
              {session.endTime && (
                <p className="text-sm text-gray-600">Ended: {session.endTime}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          {!session.endTime && (
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => handleAction(session.id, "check")}
                className="bg-green-500 hover:bg-green-600 text-white px-2 text-xs py-2 rounded-lg shadow"
              >
                Check
              </button>
              <button
                onClick={() => handleAction(session.id, "concern")}
                className="bg-red-500 hover:bg-red-600 text-white px-2 text-xs py-2 rounded-lg shadow"
              >
                Concern
              </button>
              <button
                onClick={() => handleWake(session.id)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 text-xs py-2 rounded-lg shadow"
              >
                Wake
              </button>
            </div>
          )}

          {/* Display Logs */}
          <div className="mt-4">
            {session.actions.map((action, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-lg ${
                  action.type === "check"
                    ? "bg-zinc-300"
                    : action.type === "concern"
                    ? "bg-zinc-400"
                    : ""
                }`}
              >
                <p className="text-sm text-gray-700">
                  {action.type === "check" ? "Check Breathing" : "Concern"} -{" "}
                  {action.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

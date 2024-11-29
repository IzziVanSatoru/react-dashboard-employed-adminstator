import React, { useState, useEffect } from "react";
import Home from "./k-home";
import Button from "./Button";

export default function Karyawandashboard() {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      })
      .replace(/\./g, ":")
  );

  const [entries, setEntries] = useState([
    { id: 1, type: "Presensi Masuk", color: "bg-green-500", time },
    { id: 2, type: "Presensi Keluar", color: "bg-purple-500", time },
  ]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString("ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23",
          })
          .replace(/\./g, ":")
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const removeEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-br from-cyan-200 via-cyan-400 to-cyan-600 p-10">
      <Home />
      <div className="mt-32 ml-32 flex flex-col items-center w-full">
        <h1 className="font-bold text-4xl text-gray-800 mb-10">Home</h1>
        <div className="flex flex-row gap-20 w-full max-w-5xl justify-center">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`${entry.color}/30 backdrop-blur-md w-80 h-64 p-6 rounded-lg flex flex-col items-center justify-center border border-cyan-200 shadow-xl transform transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h1 className="font-bold text-white mb-3 text-2xl">{entry.type}</h1>
              <p className="text-white text-xl mb-4">{time}</p>
              <Button
                onClick={() => removeEntry(entry.id)}
                className="bg-cyan-600 px-6 py-2 text-white font-medium rounded-lg shadow-md hover:bg-cyan-700 transition-all"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

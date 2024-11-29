import React, { useState, useEffect } from "react";
import Home from "./a-home";

function Dashboard() {
  const now = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [clock, setClock] = useState(new Date().toTimeString().split(" ")[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date().toTimeString().split(" ")[0]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = now.toLocaleDateString("US", dateOptions);

  return (
    <div className="flex flex-row min-h-screen bg-white p-8">
      <Home />
      <div className="mt-20 ml-20 flex flex-col items-center w-full">
        <div className="w-full max-w-5xl bg-white/20 backdrop-blur-lg p-10 rounded-lg shadow-2xl border border-cyan-200">
          <h1 className="font-bold text-4xl mb-6 text-center text-gray-800">
            Hello, Admin!
          </h1>
          <p className="font-bold text-2xl text-center mb-2">{clock}</p>
          <p className="text-lg font-thin text-center mb-10">{date}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center justify-center w-56 h-56 border border-cyan-200 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 shadow-lg rounded-lg transition-all transform hover:-translate-y-2">
              <h1 className="font-bold text-xl text-gray-900 mb-2">Jumlah Karyawan</h1>
              <p className="font-medium text-lg text-gray-800">4</p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 h-56 border border-cyan-200 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 shadow-lg rounded-lg transition-all transform hover:-translate-y-2">
              <h1 className="font-bold text-xl text-gray-900 mb-2">Hadir</h1>
              <p className="font-medium text-lg text-gray-800">3</p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 h-56 border border-cyan-200 bg-gradient-to-br from-green-300 via-green-400 to-green-500 shadow-lg rounded-lg transition-all transform hover:-translate-y-2">
              <h1 className="font-bold text-xl text-gray-900 mb-2">Alpa</h1>
              <p className="font-medium text-lg text-gray-800">0</p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 h-56 border border-cyan-200 bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 shadow-lg rounded-lg transition-all transform hover:-translate-y-2">
              <h1 className="font-bold text-xl text-gray-900 mb-2">Cuti/Izin/Sakit</h1>
              <p className="font-medium text-lg text-gray-800">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import Home from "./Homekaryawan";
import Button from "./Button";

export default function Karyawandashboard() {
  const now = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [clock, setClock] = useState(new Date().toTimeString().split(" ")[0]);
  const [isPresensiMasuk, setIsPresensiMasuk] = useState(false);
  const [presensiMasukTime, setPresensiMasukTime] = useState(null);
  const [presensiKeluarTime, setPresensiKeluarTime] = useState(null);
  const [isPresensiKeluar, setIsPresensiKeluar] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date().toTimeString().split(" ")[0]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = now.toLocaleDateString("US", dateOptions);

  const handlePresensiMasuk = () => {
    if (!isPresensiKeluar) {
      setIsPresensiMasuk(true);
      setPresensiMasukTime({ date, time: clock });
      console.log("Presensi masuk completed");
    } else {
      alert("Anda sudah presensi keluar, silahkan menunggu besok.");
    }
  };

  const handlePresensiKeluar = () => {
    if (isPresensiMasuk) {
      setIsPresensiMasuk(false);
      setPresensiMasukTime(null);
      setIsPresensiKeluar(true);
      setPresensiKeluarTime({ date, time: clock });
      console.log("Presensi keluar completed");
    } else {
      console.log("You need to presensi masuk first");
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <h1 className="font-bold text-3xl">Home</h1>
          <div className="flex flex-row mt-20 w-[1200px] justify-center">
            <div className="bg-[#22C55E] w-80 mr-20 h-64 p-4 rounded-lg flex flex-col items-center justify-center border-border border-4 shadow-light">
              <h1 className="font-bold text-white mb-2 text-xl">
                Presensi Masuk
              </h1>
              {presensiMasukTime && (
                <p className="text-white font-bold">
                  Kamu sudah presensi pada:
                </p>
              )}
              <p className="text-white">
                {presensiMasukTime ? presensiMasukTime.date : date}
              </p>
              <p className="text-white">
                {presensiMasukTime ? presensiMasukTime.time : clock}
              </p>
              {!isPresensiMasuk && !isPresensiKeluar ? (
                <>
                  <p className="text-white mb-2">Kamu belum presensi masuk</p>
                  <Button onClick={handlePresensiMasuk}>Masuk</Button>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="bg-[#A855F7] w-80 h-64 p-4 rounded-lg flex flex-col items-center justify-center border-border border-4 shadow-light">
              <h1 className="font-bold text-white mb-2 text-xl">
                Presensi Keluar
              </h1>

              {isPresensiMasuk ? (
                <>
                  <p className="text-white">{date}</p>
                  <p className="text-white">{clock}</p>
                  <Button onClick={handlePresensiKeluar}>Keluar</Button>
                </>
              ) : (
                <>
                  {presensiKeluarTime ? (
                    <>
                      <p className="text-white">
                        Kamu sudah presensi keluar pada:
                      </p>
                      <p className="text-white">{presensiKeluarTime.date}</p>
                      <p className="text-white">{presensiKeluarTime.time}</p>
                    </>
                  ) : (
                    <p className="text-white">Belum bisa presensi keluar</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

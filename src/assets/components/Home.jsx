import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  const handleDashBoard = () => {
    navigate("/admindashboard");
  };
  const handleDatakaryawan = () => {
    navigate("/datakaryawan");
  };
  const handleKetidakhadiran = () => {
    navigate("/ketidakhadiran");
  };

  const isDashboardActive = location.pathname === "/admindashboard";
  const isDatakaryawanActive = location.pathname === "/datakaryawan";
  const isKetidakhadiranActive = location.pathname === "/ketidakhadiran";

  return (
    <>
      <div className="border-border flex flex-col border-4 ml-4 bg-main w-[20%] h-[900px] mt-7 justify-between shadow-light ">
        <div className="pt-16 flex justify-center flex-col">
          <Button
            onClick={handleDashBoard}
            className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl ml-10 border-border w-60 p-4 ${
              isDashboardActive ? "bg-mainAccent" : "bg-bg text-text"
            }`}
          >
            Dashboard
          </Button>
          <Button
            onClick={handleDatakaryawan}
            className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl border-border ml-10 p-4 w-60 ${
              isDatakaryawanActive ? "bg-mainAccent" : "bg-bg text-text"
            }`}
          >
            Data Karyawan
          </Button>
          <Button
            onClick={handleKetidakhadiran}
            className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl border-border ml-10 p-4 w-60 ${
              isKetidakhadiranActive ? "bg-mainAccent" : "bg-bg text-text"
            }`}
          >
            Ketidak Hadiran
          </Button>
        </div>
        <div className=" flex text-lg ml-20 mb-10 cursor-pointer">
          <img src="user.png" alt="" width="25" className="mr-2" />
          <p>Admin</p>
        </div>
      </div>
    </>
  );
}

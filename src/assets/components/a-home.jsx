import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="border-4 border-blue-200 flex flex-col ml-4 bg-white w-[20%] h-[900px] mt-7 justify-between shadow-lg rounded-lg">
      <div className="pt-16 flex justify-center flex-col">
        <Button
          onClick={() => handleNavigate("/admindashboard")}
          className={`mb-10 text-center rounded-lg shadow-lg font-bold text-xl ml-10 border-2 border-blue-200 w-60 p-4 ${
            isActive("/admindashboard") ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700"
          }`}
        >
          Dashboard
        </Button>
        <Button
          onClick={() => handleNavigate("/datakaryawan")}
          className={`mb-10 text-center rounded-lg shadow-lg font-bold text-xl ml-10 border-2 border-blue-200 w-60 p-4 ${
            isActive("/datakaryawan") ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700"
          }`}
        >
          Data Karyawan
        </Button>
        <Button
          onClick={() => handleNavigate("/ketidakhadiran")}
          className={`mb-10 text-center rounded-lg shadow-lg font-bold text-xl ml-10 border-2 border-blue-200 w-60 p-4 ${
            isActive("/ketidakhadiran") ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700"
          }`}
        >
          Ketidak Hadiran
        </Button>
      </div>
      <div className="flex text-lg ml-20 mb-10 cursor-pointer text-blue-700">
        <img src="user.png" alt="User Icon" width="25" className="mr-2" />
        <p>admin</p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Home from "./a-home";

export default function Ketidakhadiran() {
  const [status, setStatus] = useState("Pending");

  const handleApprove = () => {
    setStatus("Approved");
  };

  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <div>
            <h1 className="font-heading text-3xl mb-10 text-center">
              Ketidak Hadiran
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

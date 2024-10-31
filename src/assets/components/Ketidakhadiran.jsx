import React, { useState } from "react";
import Home from "./Home";

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
          <div className="overflow-x-auto">
            <table className="min-w-full border-2 border-darkBorder shadow-light">
              <thead>
                <tr className="bg-mainAccent">
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Nomor
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Nama
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Keterangan
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Deskripsi
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    File
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Status
                  </th>
                  <th className="px-4 py-3 font-heading border-2 border-darkBorder shadow-light text-darkText">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-main cursor-pointer transition-all">
                  <td className="px-4 py-3 border-2 border-darkBorder text-center bg-bg shadow-light">
                    1
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    01-10-2024
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    Fiky
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    Sakit
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    Sakit Demam
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    <a
                      href="#"
                      className="text-blue-500 underline hover:no-underline"
                    >
                      Download
                    </a>
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    {status}
                  </td>
                  <td className="px-4 py-3 border-2 border-darkBorder bg-bg shadow-light">
                    {status === "Pending" ? (
                      <button
                        onClick={handleApprove}
                        className="bg-green-500 text-darkText border-2 border-darkBorder px-3 py-1 rounded-base font-heading shadow-light hover:bg-green-600"
                      >
                        Approve
                      </button>
                    ) : (
                      <span className="text-gray-500 font-base">Approved</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

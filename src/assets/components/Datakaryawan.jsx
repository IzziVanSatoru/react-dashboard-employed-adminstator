import React, { useState } from "react";
import Home from "./a-home";
import Button from "./Button";

export default function initialData() {
  const initialData = [
    {
      id: 1,
      name: "Ferry Kurniawan",
      position: "Front End Dev",
      salary: 5_000_000,
    },
    { id: 2, name: "Fiky", position: "Back End Dev", salary: 4_000_000 },
    { id: 3, name: "Dina Aprillia", position: "Manager", salary: 10_000_000 },
    { id: 4, name: "Giselia Jelia", position: "Analyst", salary: 4_500_000 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
    salary: "",
  });
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({
    name: "",
    position: "",
    salary: "",
  });

  const handleTambahKaryawan = () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newEmployeeData = {
      ...newEmployee,
      id: newId,
      salary: parseFloat(newEmployee.salary),
    };
    setData([...data, newEmployeeData]);
    setNewEmployee({ id: "", name: "", position: "", salary: "" });
    setShowAddForm(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredData = initialData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.position.toLowerCase().includes(term.toLowerCase()) ||
        item.id.toString().includes(term) ||
        item.salary.toString().includes(term)
    );
    setData(filteredData);
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditingId(id);
    setEditFields({
      name: itemToEdit.name,
      position: itemToEdit.position,
      salary: itemToEdit.salary.toString(),
    });
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item.id === editingId
        ? { ...item, ...editFields, salary: parseFloat(editFields.salary) }
        : item
    );
    setData(updatedData);
    setEditingId(null);
    setEditFields({ name: "", position: "", salary: "" });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <div>
            <h1 className="font-heading text-3xl mb-10">Data Karyawan</h1>
            <Button
              onClick={handleTambahKaryawan}
              className="p-5 bg-mainAccent text-lg text-darkText border-2 border-darkBorder shadow-dark font-heading text-center w-[200px] rounded-base"
            >
              Tambah Karyawan
            </Button>
          </div>
          <div className="pt-10">
            <input
              type="text"
              placeholder="Search by ID, Name, Position, or Salary..."
              value={searchTerm}
              onChange={handleSearch}
              className="border-2 border-darkBorder bg-bg text-text p-2 mb-4 shadow-light rounded-base w-full"
            />
            <table className="min-w-full border-2 border-darkBorder">
              <thead>
                <tr>
                  <th className="border-2 border-darkBorder bg-mainAccent text-darkText font-heading p-4 shadow-light">
                    ID
                  </th>
                  <th className="border-2 border-darkBorder bg-mainAccent text-darkText font-heading p-4 shadow-light">
                    Name
                  </th>
                  <th className="border-2 border-darkBorder bg-mainAccent text-darkText font-heading p-4 shadow-light">
                    Position
                  </th>
                  <th className="border-2 border-darkBorder bg-mainAccent text-darkText font-heading p-4 shadow-light">
                    Salary
                  </th>
                  <th className="border-2 border-darkBorder bg-mainAccent text-darkText font-heading p-4 shadow-light">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-main transition-all">
                    <td className="border-2 border-darkBorder text-center p-4 shadow-light bg-bg">
                      {item.id}
                    </td>
                    <td className="border-2 border-darkBorder text-center p-4 shadow-light bg-bg">
                      {editingId === item.id ? (
                        <input
                          type="text"
                          value={editFields.name}
                          onChange={(e) =>
                            setEditFields({
                              ...editFields,
                              name: e.target.value,
                            })
                          }
                          className="border-2 border-darkBorder p-1 shadow-light w-full rounded-base"
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td className="border-2 border-darkBorder text-center p-4 shadow-light bg-bg">
                      {editingId === item.id ? (
                        <input
                          type="text"
                          value={editFields.position}
                          onChange={(e) =>
                            setEditFields({
                              ...editFields,
                              position: e.target.value,
                            })
                          }
                          className="border-2 border-darkBorder p-1 shadow-light w-full rounded-base"
                        />
                      ) : (
                        item.position
                      )}
                    </td>
                    <td className="border-2 border-darkBorder text-center p-4 shadow-light bg-bg">
                      {editingId === item.id ? (
                        <input
                          type="number"
                          value={editFields.salary}
                          onChange={(e) =>
                            setEditFields({
                              ...editFields,
                              salary: e.target.value,
                            })
                          }
                          className="border-2 border-darkBorder p-1 shadow-light w-full rounded-base"
                        />
                      ) : (
                        `Rp. ${item.salary.toLocaleString()}`
                      )}
                    </td>
                    <td className="border-2 border-darkBorder text-center p-4 shadow-light bg-bg">
                      {editingId === item.id ? (
                        <button
                          onClick={handleSave}
                          className="bg-green-500 text-darkText border-2 border-darkBorder px-3 py-1 rounded-base font-heading shadow-light mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="bg-blue-500 text-darkText border-2 border-darkBorder px-3 py-1 rounded-base font-heading shadow-light mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-darkText border-2 border-darkBorder px-3 py-1 rounded-base font-heading shadow-light"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

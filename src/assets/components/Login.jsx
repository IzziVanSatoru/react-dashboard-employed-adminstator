import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Login() {
  const employee = {
    email: "testing@gmail.com",
    password: "testing",
    username: "test",
  };

  const [selectedRole, setSelectedRole] = useState("employee");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    selectedRole === "employee"
      ? navigate("/karyawanhome")
      : navigate("/admindashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 via-cyan-400 to-cyan-600 p-6">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg p-10 rounded-lg shadow-2xl border border-cyan-200">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
          Login
        </h2>
        <div className="flex mb-8 justify-center space-x-8">
          <Button
            onClick={() => setSelectedRole("employee")}
            className={`px-7 py-3 rounded-md transition-colors ${
              selectedRole === "employee"
                ? "text-white bg-cyan-500 shadow-lg"
                : "text-gray-700 bg-transparent"
            }`}
          >
            Employee
          </Button>
          <Button
            onClick={() => setSelectedRole("admin")}
            className={`px-7 py-3 rounded-md transition-colors ${
              selectedRole === "admin"
                ? "text-white bg-cyan-500 shadow-lg"
                : "text-gray-700 bg-transparent"
            }`}
          >
            Admin
          </Button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full p-4 text-lg font-medium text-white bg-cyan-600 rounded-md shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

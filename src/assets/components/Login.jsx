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
    <div className="min-h-screen flex items-center justify-center bg-bg text-text p-6">
      <div className="w-full max-w-md bg-main p-8 rounded-base shadow-light border border-border">
        <h2 className="text-2xl font-heading mb-4">Login</h2>
        <div className="flex mb-5 justify-center space-x-8">
          <Button
            onClick={() => {
              setSelectedRole("employee");
            }}
            className={`px-7 py-3 ${
              selectedRole === "employee"
                ? "text-white bg-mainAccent px-10 py-6 font-bold"
                : ""
            }`}
          >
            Employee
          </Button>
          <Button
            onClick={() => {
              setSelectedRole("admin");
            }}
            className={`px-7 py-3 ${
              selectedRole === "admin"
                ? "text-white bg-mainAccent px-10 py-6 font-bold"
                : ""
            }`}
          >
            Admin
          </Button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-base mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-base mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full p-3 text-xl font-heading text-white bg-mainAccent shadow-light border border-border rounded-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-transform"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

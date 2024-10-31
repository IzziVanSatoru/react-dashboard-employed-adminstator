import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const defaultUsers = [
      {
        email: "karyawan1@example.com",
        password: "password1",
        role: "karyawan",
        username: "karyawan1",
      },
      {
        email: "karyawan2@example.com",
        password: "password2",
        role: "karyawan",
        username: "karyawan2",
      },
      {
        email: "karyawan3@example.com",
        password: "password3",
        role: "karyawan",
        username: "karyawan3",
      },
      { email: "hrd@example.com", password: "hrdpassword", role: "hrd" },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers)); // Only set default users once
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      user.role === "karyawan"
        ? navigate("/karyawanhome")
        : navigate("/admindashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text p-6">
      <div className="w-full max-w-md bg-main p-8 rounded-base shadow-light border border-border">
        <h2 className="text-2xl font-heading mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-base mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-base mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full p-3 text-xl font-heading bg-mainAccent text-white shadow-light border border-border rounded-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-transform"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

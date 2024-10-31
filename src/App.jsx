import Login from "./assets/components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Datakaryawan from "./assets/components/Datakaryawan";
import Dashboard from "./assets/components/Dashboard";
import Ketidakhadiran from "./assets/components/Ketidakhadiran";
import Karyawandashboard from "./assets/components/Karyawandashboard";
import Rekap from "./assets/components/Rekappresensi";
import Ketidakhadirankaryawan from "./assets/components/Ketidakhadirankaryawan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admindashboard" element={<Dashboard />} />
          <Route path="/datakaryawan" element={<Datakaryawan />} />
          <Route path="/ketidakhadiran" element={<Ketidakhadiran />} />
          <Route path="/karyawanhome" element={<Karyawandashboard />} />
          <Route path="/rekap-presensi" element={<Rekap />} />
          <Route path="/ketidak-hadiran" element={<Ketidakhadirankaryawan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

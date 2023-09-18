import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../../context/userContext";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <UserContextProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {location.pathname !== "/" && <Navbar />}
    </UserContextProvider>
  );
}

export default App;

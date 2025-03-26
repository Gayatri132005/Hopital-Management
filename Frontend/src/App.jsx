import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Context } from "./main"; // ✅ Corrected Import
import "./App.css";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/patient/me`, { withCredentials: true });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, [isAuthenticated, setIsAuthenticated, setUser]); // ✅ Fixed dependencies

  return (
    <Router>
      <Navbar /> {/* ✅ Navbar inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;

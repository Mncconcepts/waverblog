import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation, Outlet } from "react-router-dom";
import "./index.css";
import Navitems from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Navbar/Footer";
import SignUp from "./Components/Navbar/SignUp";
import Login from "./Components/Navbar/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const handleLogin = (profile) => {
    setUser(profile); 
  };

  const isSignupPage = location.pathname === "/";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
        {/* Define routes for the application */}
        <Route path="/" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>

      {/* Render Navbar, Footer, and other components only if not on the signup page */}
      {!isSignupPage && (
        <>
          <Navbar user={user} />
          <div className="main-container">
            <div className="content">
              <Outlet />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom"; // use HashRouter
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

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
        <Route path="/" element={<Signup onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>

      {/* Render Navitems, Footer, and other components only if not on the signup page */}
      {!isSignupPage && (
        <>
          <Navitems user={user} />
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
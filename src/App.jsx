import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
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
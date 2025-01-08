import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navitems />
      <div className="min-vh-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Outlet />
      </div>
      <Footer />

    </>
  );
}

export default App;
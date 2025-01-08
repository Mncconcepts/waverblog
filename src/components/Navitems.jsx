import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the menu when an item is clicked
  const handleMenuClose = () => {
    setMenuToggle(false);
  };

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      <div className='header-buttom'>
        <div className='container'>
          <div className='header-wrapper'>
            <div>
              <h2 className='mt-2'>
                WAVER <span className='text-primary'>TM</span>
              </h2>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li onClick={handleMenuClose}><Link to="/home">Home</Link></li>
                  <li onClick={handleMenuClose}><Link to="/blog">Blog</Link></li>
                  <li onClick={handleMenuClose}><Link to="/about">About</Link></li>
                  <li onClick={handleMenuClose}><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <Link to="/sign-up" className="lab-btn ms-3 d-none d-md-block text-white">Join Us</Link>

              {/* Menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social toggler */}
              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;

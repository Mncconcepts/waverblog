import React, { useState } from 'react';
import { Link, Links } from 'react-router-dom';


const title = "WAVER BLOG"
const desc = "YOUR ONE STOP BLOG PAGE"


const Banner = () => {

  return <div className='banner-section style-3'>
    <div className='container'>
      <h1 data-aos='fade-right' className='text-black'>{title}</h1>
      <h1 data-aos='fade-right' className='text-black'>JOIN US TODAY</h1>
      <div data-aos='fade-left' className=''>
        <small className='text-center text-black pt-3 '>{desc}, PROVIDES YOU WITH LATEST INFORMATION IN THE <br /> 
        WEB DEVELOPMENT AND DESIGN INDUSTRY CLICK ON THE GETTING STARTED TO SEE MORE TREND</small>
          <div data-aos='fade-right' className=''>
          <Link to="/blog" type='submit' className='lab-btn text-white text-center mt-3'>Get Started</Link>
          <Link to="/blog" type='submit' className='lab-btn text-white text-center mt-3 ms-3'>Our Blog</Link>
          </div>

      </div>
    </div>
  </div>

};

export default Banner;
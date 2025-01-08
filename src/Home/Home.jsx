import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import Register from './Register';
import FAQSection from '../components/FAQSection';




const Home = () => {
  return (
    <div>
      <Banner/>
      <Register/>
      <HomeCategory/>
      <FAQSection />
    </div>
  );
};

export default Home;
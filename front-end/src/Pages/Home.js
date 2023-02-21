// import "./Home.css"; 
import React from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from '../Components/js/SubNav';
import DirGrid from '../Components/js/HomeComponents/DirGrid';

const Home = () => {
  return (
    <>
    <div className="text-center justify-content-md-center home-image" >
      <SubNav/>
    </div>
    <HomeLayout />
    <DirGrid />
    </>
  );
};

export default Home;

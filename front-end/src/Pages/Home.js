import React from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from "../Components/js/HomeComponents/SubNav";

const Home = () => {
  return (
    <>
    <SubNav />
      <div className="home">
        <h1> This is Home Page </h1>
        <HomeLayout />
      </div>
    </>
  );
};

export default Home;

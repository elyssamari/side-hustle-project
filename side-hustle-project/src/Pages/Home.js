import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home">
        <h1> This is Home Page </h1>
      </div>

      <Outlet /> {/*This is so nested routes/pages can be displayed*/}
    </>
  );
};

export default Home;

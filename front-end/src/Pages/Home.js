import React from 'react';
import {Container} from 'react-bootstrap';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from "../Components/js/HomeComponents/SubNav";
import DirGrid from '../Components/js/HomeComponents/DirGrid';

const Home = () => {
  return (
    <>
      <SubNav />
      <Container className="text-center justify-content-md-center" >
        <img src="banner.jpg" alt="homebanner"></img> {/* height="674" width="1360"  */}
      </Container>
      <HomeLayout />
      <SubNav />
      <div className="home">
        <h1> This is Home Page </h1>
        <HomeLayout />
      </div>
      <DirGrid />
    </>
  );
};

export default Home;

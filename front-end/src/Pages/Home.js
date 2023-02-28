import "./Home.css"; 
import React from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from '../Components/js/SubNav';
import DirGrid from '../Components/js/HomeComponents/DirGrid';
import {Container} from 'react-bootstrap';


const Home = () => {
  return (
    <>
      <SubNav />
      <Container className="text-center justify-content-md-center" >
        <img className="banner-image" src="banner.jpg" alt="homebanner" height="674" width="1360"></img>
      </Container>
      <HomeLayout />
      <DirGrid />
    </>
  );
};

export default Home;

import "./Home.css";
import React from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from '../Components/js/SubNav';
import DirGrid from '../Components/js/HomeComponents/DirGrid';
import Footer from '../Components/js/Footer';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <SubNav />
      <Container className="text-center justify-content-md-center" >
        <img className="banner-image" src="bearcrew3.png" alt="homebanner" height="674" width="1360"></img>
      </Container>
      <HomeLayout />
      <DirGrid />
      <Footer/>
    </>
  );
};

export default Home;

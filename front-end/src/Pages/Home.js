import "./Home.css";
import React, { useRef } from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from '../Components/js/SubNav';
import DirGrid from '../Components/js/HomeComponents/DirGrid';
import Footer from '../Components/js/Footer';
import { Container } from 'react-bootstrap';

const Home = () => {

  const mariet = useRef(null);
  const hano = useRef(null);
  const yaron = useRef(null);
  
  return (
    <>
      <SubNav
        mariet={ mariet }
        hano={ hano }
        yaron={ yaron }
      />
      <Container className="text-center justify-content-md-center" >
        <img className="banner-image" src={process.env.PUBLIC_URL + "/bearcrew3.png"} alt="homebanner" height="674" width="1360"></img>
      </Container>
      <HomeLayout />
      <DirGrid
        mariet={ mariet }
        hano={ hano }
        yaron={ yaron }
      />
      <Footer/>
    </>
  );
};

export default Home;

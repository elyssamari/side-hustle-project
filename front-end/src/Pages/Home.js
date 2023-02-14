import React from 'react';
import HomeLayout from '../Components/js/HomeComponents/HomeLayout';
import SubNav from "../Components/js/HomeComponents/SubNav";
import {Container} from 'react-bootstrap';


const Home = () => {
  return (
    <>
    <SubNav />
    <Container className="text-center justify-content-md-center" >
      <img src="banner.jpg" alt="homebanner"></img> {/* height="674" width="1360"  */}
    </Container>
    <HomeLayout />

    </>
  );
};

export default Home;

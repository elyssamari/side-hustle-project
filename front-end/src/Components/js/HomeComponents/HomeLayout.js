import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import "../../css/HomeLayout.css";

const HomeLayout = () => {
    return (
        <>
            <Navbar className="justify-content-md-center" id="about-line"></Navbar>
            <div className="text-center about-title">about </div>
            <Container className="justify-content-md-center">
                <p id="about-summary"> Hi, we are MHY! We are a group of friends consisting of Mariet, Hano, and Yaron who made this website. If you want to know our process, click here.
                    Find more about us by visiting our pages below! </p>
                <br></br>
            </Container>
        </>
    )
}

export default HomeLayout;
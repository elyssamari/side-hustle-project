import "../css/SubNav.css";
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SubNav = (props) => {

    const scrollToSection = (eleRef) => {
        window.scrollTo({
            top: eleRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" sticky="top" className="flexWrap subnav subnav-position me-auto opacity-75">
                    <Container className="justify-content-md-center collapse navbar-collapse">
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => scrollToSection(props.home)}>HOME</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => scrollToSection(props.mariet)}>MARIET</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => scrollToSection(props.hano)}>HANO</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => scrollToSection(props.yaron)}>YARON</Button>
                    </Container>
            </Navbar>
        </>
    )
}

export default SubNav;
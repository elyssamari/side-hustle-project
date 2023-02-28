import "../css/SubNav.css";
import React from 'react';
import {Container, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SubNav = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" expand="true" sticky="top" className="subnav subnav-position me-auto opacity-75">
                    <Container className="justify-content-md-center">
                        <Button className="responsive" variant="outline-dark" size="lg" onClick={() => navigate('/')}>HOME</Button>
                        <Button className="responsive" variant="outline-dark" size="lg" onClick={() => navigate('/mariet')}>MARIET</Button>
                        <Button className="responsive" variant="outline-dark" size="lg" onClick={() => navigate('/hano')}>HANO</Button>
                        <Button className="responsive" variant="outline-dark" size="lg" onClick={() => navigate('/yaron')}>YARON</Button>
                    </Container>
            </Navbar>
        </>
    )
}

export default SubNav;
import "../css/SubNav.css";
import React from 'react';
import {Navbar, Container, Button} from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

const SubNav = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" sticky="top" className="flexWrap subnav subnav-position me-auto opacity-75">
                    <Container className="justify-content-md-center collapse navbar-collapse">
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => navigate('/')}>HOME</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => navigate('/mariet')}>MARIET</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => navigate('/hano')}>HANO</Button>
                        <Button className="responsive" variant="outline-dark" size="md" onClick={() => navigate('/yaron')}>YARON</Button>
                    </Container>
            </Navbar>
        </>
    )
}

export default SubNav;
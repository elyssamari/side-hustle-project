import React from 'react';
import { Row, Col, Container, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SubNav = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" sticky="top" expand="true" className="flexWrap" > {/*className="opacity-75"*/} 
                    <Container className="justify-content-md-center">
                        <Row>
                            <Col md="auto" className="justify-content-md-center">
                                <Button variant="outline-dark" size="lg" onClick={() => navigate('/')}>HOME</Button>
                            </Col>
                            <Col md="auto" className="justify-content-md-center">
                                <Button variant="outline-dark" size="lg" onClick={() => navigate('/mariet')}>MARIET</Button>
                            </Col>
                            <Col md="auto" className="justify-content-md-center">
                                <Button variant="outline-dark" size="lg" onClick={() => navigate('/hano')}>HANO</Button>
                            </Col>
                            <Col>
                                <Button variant="outline-dark" size="lg" onClick={() => navigate('/yaron')}>YARON</Button>
                            </Col>
                        </Row>
                    </Container>
            </Navbar>
        </>
    )
}

export default SubNav;
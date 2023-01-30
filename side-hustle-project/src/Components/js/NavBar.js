import "../css/NavBar.css";
import React, { useState } from "react";
import { Nav, Navbar, Offcanvas, Container, OffcanvasBody } from 'react-bootstrap';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    
    return (
        <>
            <Navbar sticky="top" expand={show}>
                <Container fluid>
                    <Navbar.Brand href="/">mhypals</Navbar.Brand> {/* need to decide if the brand will redirect to home page */}
                    <Navbar.Toggle onClick={toggleShow}>
                    <Offcanvas show={show} onHide={handleClose} scroll="true" backdrop="true" placement="end">
                        <Offcanvas.Header> {/* closeButton does not seem to work */}
                            <Offcanvas.Title>mhypals</Offcanvas.Title>
                        </Offcanvas.Header>
                        <OffcanvasBody>
                            <Nav className="ms-auto my-2 my-lg-0">
                                <Nav.Link id="item" href="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link id="item" href="/mariet">
                                    Mariet
                                </Nav.Link>
                                <Nav.Link id="item" href="/hano">
                                    Hano
                                </Nav.Link>
                                <Nav.Link id="item" href="/yaron">
                                    Yaron
                                </Nav.Link>
                                <Nav.Link id="item" href="/process">
                                    Process
                                </Nav.Link>
                            </Nav>
                        </OffcanvasBody>
                    </Offcanvas>
                    </Navbar.Toggle>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
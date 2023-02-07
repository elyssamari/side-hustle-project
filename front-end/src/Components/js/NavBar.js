import "../css/NavBar.css";
import React, { useState, useEffect } from "react";
import { Nav, Navbar, Offcanvas, Container, OffcanvasBody } from 'react-bootstrap';

const NavBar = () => {

    const [navColor, setNavColor] = useState("white");

    useEffect(() => {
        if (window.location.href.indexOf("mariet") > -1) {
            setNavColor("#c7ddf8");
        } else if (window.location.href.indexOf("yaron") > -1) {
            setNavColor("#b5eed7");
        } else if (window.location.href.indexOf("hano") > -1) {
            setNavColor("#ebdbff");
        } else {
            setNavColor("white");
        }
    }, []);
    
    return (
        <>
            {[false].map((expand) => (
            <Navbar key={expand} sticky="top" expand={expand}
                style={{backgroundColor: navColor }} >
                <Container fluid>
                    <Navbar.Brand href="/">mhypals</Navbar.Brand> {/* need to decide if the brand will redirect to home page */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                    <Navbar.Offcanvas placement="end" id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        style={{backgroundColor: navColor }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>mhypals</Offcanvas.Title>
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
                    </Navbar.Offcanvas>
                    </Navbar.Toggle>
                </Container>
            </Navbar>
            ))}
        </>
    )
}

export default NavBar;
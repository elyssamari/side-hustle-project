import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

const SubNav = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="true">
                {/*temporarily set as dark to differentiate btwn regular navbar*/}
                <Container id="subnav-btn-container">
                    <Nav id="subnav">
                        <Button>button?</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default SubNav;
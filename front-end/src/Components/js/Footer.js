import "../css/Footer.css";
import React from 'react';
import { Navbar} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Navbar className="justify-content-md-center flexWrap me-auto" id="footer">
            </Navbar>
            <div className="text-center footer-name">MHYPals</div>
            <div className="text-center">© MHYPals. All Rights Reserved.</div>


        </>
    )
}

export default Footer;
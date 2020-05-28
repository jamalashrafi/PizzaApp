import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className="navbar__brand">
                    <Link to="/" >Pizza App</Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar__collapse">
                    <Nav className="mr-auto navbar__collapse__nav">
                        <Nav.Item className="navbar__collapse__nav__item">
                            <Link to="/">Home</Link></Nav.Item>
                        <Nav.Item className="navbar__collapse__nav__item">
                            <Link to="/menu">Menu</Link></Nav.Item> 
                        <Nav.Item className="navbar__collapse__nav__item">
                            <Link to="/storelocator" >Store Locator</Link></Nav.Item>
                        <Nav.Item className="navbar__collapse__nav__item">
                            <Link to="/aboutus" >AboutUs</Link></Nav.Item>
						<Nav.Item className="navbar__collapse__nav__item">
                            <Link to="/contact" >ContactUs</Link></Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;

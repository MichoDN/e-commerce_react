import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
    const isLogged = useSelector(state => state.isLogged)
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleShow = () => {
        if (isLogged) setShow(true)
        else navigate('./login')
    }
    return (
        <Navbar className='header background2' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='myTitle unselectable'><b>e-commerce</b></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link to="/store" as={Link} className="unselectable storeLabel">Store</Nav.Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end rightHeaderPart">
                        <Nav.Link to="/purchases" as={Link} className="unselectable">Purchases</Nav.Link>

                        <Navbar.Text>
                            {isLogged ? (
                                <>Signed in as: <a href="/#/login">{localStorage.getItem("userName")}</a></>
                            ) : (
                                <a href="/#/login">Login</a>
                            )}
                        </Navbar.Text>

                        <Nav.Link onClick={handleShow} className="unselectable">Cart</Nav.Link>
                        <Cart show={show} handleClose={handleClose} />
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
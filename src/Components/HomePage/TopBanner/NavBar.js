import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/staffIT.png';
import './NavBar.css';
import { UserContext } from '../../../App';

const NabBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Container>
            <Navbar bg="***" expand="lg" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo w-25" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="navBar-link">Home</Link>
                        <Link to="/customer/serviceBooking" className="navBar-link">Get Our Services</Link>
                        <Link to="/admin/orderList" className="navBar-link">Admin</Link>
                        <Link to="#" className="navBar-link">Contact Us</Link> 
                        <Link to="#"><span style={{color:"paleVioletRed"}}>{loggedInUser.displayName}</span></Link>
                        {
                            loggedInUser.email ?
                                <Button className="navBar-button" onClick={() =>{
                                    setLoggedInUser({});
                                    sessionStorage.removeItem('token')
                                } }>Logout</Button>
                                :
                                <Link to="/login">
                                    <Button className="navBar-button">Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

export default NabBar;
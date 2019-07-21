import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from "../../assets/logo-placeholder.png";

const Header: React.FC = () => {
    return (
        <Navbar bg="dark">
            <Navbar.Brand href="#" >
                <img src={logo} alt="Logo" height="30" />
            </Navbar.Brand>
        </Navbar>
    );
};
export default Header;

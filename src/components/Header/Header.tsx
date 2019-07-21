import React from "react";
import logo from "../../assets/logo-placeholder.png";
const Header: React.FC = () => {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <h3>Logo</h3>
        </div>
    );
};
export default Header;

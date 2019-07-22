import React from "react";
import Header from "../components/Header/Header";

// Basic Layout
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};
export default Layout;

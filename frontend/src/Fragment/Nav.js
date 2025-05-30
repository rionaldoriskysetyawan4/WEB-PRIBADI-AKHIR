import React from "react";
import '../Style/main.css'; // ✅ relatif satu folder ke atas

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="logo-header">RIONALDO</div>
            <ul className="nav-list">
                <li>Home</li>
                <li>PortFolio</li>
                <li>Skills</li>
                <li>Blog</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Nav;
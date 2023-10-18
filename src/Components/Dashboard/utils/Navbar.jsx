import React from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'; // Using the FaSearch icon from React Icons
import './navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Dashboard</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className="search-button">
                    <FaSearch />
                </button>
            </div>
            <div className="sign-out">
                <button className="sign-out-button">
                    <FaSignOutAlt />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

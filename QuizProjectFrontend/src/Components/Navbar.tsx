import React from 'react';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <a href="/" className="site-title">TerraTrivia</a>
            <ul>
                <li>
                    <a href="/">?</a>
                </li>
                <li>
                    <a href="/">Streak</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
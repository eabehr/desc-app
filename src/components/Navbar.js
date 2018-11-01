import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <Link to="/" className="brand-logo">
                    DESC In Kind Portal
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/signup">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

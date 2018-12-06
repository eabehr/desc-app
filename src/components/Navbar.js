import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <span className="desc-logo">
                    <img src="https://www.desc.org/wp-content/themes/desc/img/logo-desc.png"
                        height="60"
                        width="60"/>
                </span>
                <Link to="/" className="brand-logo">
                    DESC In Kind Portal
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/create">Create Request</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inbox">View Requests</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

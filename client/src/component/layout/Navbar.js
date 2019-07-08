import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.gif'
import css from '../css/Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav className="blue darken-1">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo"><img src={logo} alt="logo" className="logo"/></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="login">Login/Register</a></li>
                            <li><a href="/">Search</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
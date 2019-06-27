import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.gif'
import css from '../css/Navbar.css';

const NavStyle = {
    color: "black",
    fontSize: "bold",
}

class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={NavStyle}>
                <nav className="blue darken-1">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo"><img src={logo} alt="logo" className="logo"/></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
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
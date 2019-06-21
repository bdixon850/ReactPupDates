import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "../css/Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav className="orange darken-4">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="login">Login/Register</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
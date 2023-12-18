import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
            <NavLink to="/about" activeClassName="is-active">About</NavLink>
        </div>
    )
}

export default Header;
import React from "react";
import {NavLink, Link} from "react-router-dom";

const NavList = ({ label, link, isActive }) => {
    return (
        <li>
            <NavLink
                to={link}
                className={`text-xl hover:text-bg2 transition-colors duration-200 ${
                    isActive ? "text-button-primary font-semibold md:border-b-2 border-bg2 pb-1" : "text-black"
                }`}
            >
                {label}
            </NavLink>
        </li>
    );
};

export default NavList;
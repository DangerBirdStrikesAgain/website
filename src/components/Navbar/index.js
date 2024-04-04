import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
            <Nav>
                <NavMenu>
                    <NavLink to="/" style={({ isActive }) => {
 return isActive ? { color: "blue" } : {};
 }}>
                        Home
                    </NavLink>
                    <NavLink to="/security" style={({ isActive }) => {
 return isActive ? { color: "blue" } : {};
 }}>
                        Security Course
                    </NavLink>
                    <NavLink to="/projects" style={({ isActive }) => {
 return isActive ? { color: "blue" } : {};
 }}>
                        Projects
                    </NavLink>
                </NavMenu>
            </Nav>
    );
};
 
export default Navbar;
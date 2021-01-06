import React from "react";
import classes from "./Navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <header className={classes.Navbar}>
            <DarkModeToggle />
        </header>
    );
};

export default NavBar;

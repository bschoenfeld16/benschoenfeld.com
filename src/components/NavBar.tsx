import React from "react";
import classes from "./Navbar.module.css";
import DarkModeToggle from "./DarkModeToggle";
import ActiveLink from "./ActiveLink";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <header className={classes.Navbar}>
            <ActiveLink activeClassName={classes.active} href="/">
                <a className={classes.NavbarLink}>home</a>
            </ActiveLink>
            <ActiveLink activeClassName={classes.active} href="/projects">
                <a className={classes.NavbarLink}>projects</a>
            </ActiveLink>
            <DarkModeToggle />
        </header>
    );
};

export default NavBar;

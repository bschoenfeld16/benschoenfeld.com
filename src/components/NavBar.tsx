import React from "react";
import NextLink from "next/link";
import classes from "./Navbar.module.css";
import DarkModeToggle from "./DarkModeToggle";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <>
            <div className={`${classes.Navbar} ${classes.Blur}`} />
            <header className={classes.Navbar}>
                <NextLink href="/">
                    <a className={classes.NavbarLink}>home</a>
                </NextLink>
                <NextLink href="/">
                    <a className={classes.NavbarLink}>projects</a>
                </NextLink>
                <DarkModeToggle />
            </header>
        </>
    );
};

export default NavBar;

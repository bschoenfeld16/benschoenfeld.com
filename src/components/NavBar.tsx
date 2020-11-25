import React from "react";
import NextLink from "next/link";
import classes from "./Navbar.module.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <header className={classes.Navbar}>
            <NextLink href="/">
                <div className={classes.NavbarLink}>
                    <a>home</a>
                </div>
            </NextLink>
            <NextLink href="/projects">
                <div className={classes.NavbarLink}>
                    <a>projects</a>
                </div>
            </NextLink>
        </header>
    );
};

export default NavBar;

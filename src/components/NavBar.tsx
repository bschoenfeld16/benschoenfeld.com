import React from "react";
import NextLink from "next/link";
import classes from "./navbar.module.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <div className={classes.Navbar}>
            <NextLink href="/">
                <a>
                    <h1>Ben Schoenfeld</h1>
                </a>
            </NextLink>
        </div>
    );
};

export default NavBar;

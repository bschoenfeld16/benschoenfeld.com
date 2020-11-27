import React from "react";
import classes from "./Navbar.module.css";
import DarkModeToggle from "./DarkModeToggle";
import ActiveLink from "./ActiveLink";
import { signIn, signOut } from "next-auth/client";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <header className={classes.Navbar}>
            <button onClick={() => signIn()}>
                <a>Log in</a>
            </button>
            <button onClick={() => signOut()}>
                <a>Log out</a>
            </button>
            <ActiveLink activeClassName={classes.NavbarLinkActive} href="/">
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

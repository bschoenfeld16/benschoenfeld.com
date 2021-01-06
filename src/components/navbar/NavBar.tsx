import React from "react";
import classes from "./Navbar.module.css";
import dynamic from "next/dynamic";

const DarkModeToggle = dynamic(
    () => import("../darkmodetoggle/DarkModeToggle"),
    {
        ssr: false,
    }
);

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <header className={classes.Navbar}>
            <DarkModeToggle />
        </header>
    );
};

export default NavBar;

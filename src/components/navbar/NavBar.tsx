import React from "react";
import classes from "./Navbar.module.css";
import dynamic from "next/dynamic";
import { BiLinkExternal } from "react-icons/bi";

const DarkModeToggle = dynamic(
    () => import("../darkmodetoggle/DarkModeToggle"),
    {
        ssr: false,
    }
);

const NavBar: React.FC = ({}) => {
    return (
        <header className={classes.Navbar}>
            <DarkModeToggle />
            <div>
                <a
                    className={classes.Resume}
                    href={"/resume.pdf"}
                    target="_blank">
                    resume
                    <BiLinkExternal />
                </a>
            </div>
        </header>
    );
};

export default NavBar;

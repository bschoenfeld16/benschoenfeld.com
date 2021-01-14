import React from "react";
import classes from "./Navbar.module.css";
import dynamic from "next/dynamic";
import { BiLinkExternal } from "react-icons/bi";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

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
            <div className={classes.Links}>
                <a
                    className={classes.ExternalProfiles}
                    href="https://github.com/bschoenfeld16">
                    <RiGithubFill size="2rem" />
                </a>
                <a
                    className={classes.ExternalProfiles}
                    href="https://www.linkedin.com/in/bschoenf">
                    <RiLinkedinBoxFill size="2rem" />
                </a>
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

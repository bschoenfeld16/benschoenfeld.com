import React from "react";
import { Heading, Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import classes from "./navbar.module.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <div className={classes.Navbar}>
            <NextLink href="/abd">
                <Link>
                    <Heading>Ben Schoenfeld</Heading>
                </Link>
            </NextLink>
            <DarkModeSwitch />
        </div>
    );
};

export default NavBar;

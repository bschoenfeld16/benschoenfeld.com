import React from "react";
import NavBar from "./NavBar";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className={classes.Main}>{children}</main>
        </>
    );
};

export default Layout;

import React from "react";
import classes from "./Layout.module.css";
import Head from "next/head";
import NavBar from "../components/navbar/NavBar";

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "bens" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <NavBar />
            <main className={classes.Main}>{children}</main>
        </>
    );
};

export default Layout;

import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Bio from "../components/Bio";

const Index: React.FC = () => (
    <Layout>
        <Head>
            <title>bens</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Bio />
    </Layout>
);

export default Index;

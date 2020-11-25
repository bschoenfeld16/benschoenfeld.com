import React from "react";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Projects from "../components/Projects/Projects";

const Index: React.FC = () => {
    return (
        <Layout title="bens - home">
            <Bio />
            <Projects />
        </Layout>
    );
};

export default Index;

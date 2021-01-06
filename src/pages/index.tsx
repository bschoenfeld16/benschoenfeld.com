import React from "react";
import Layout from "../layout/Layout";
import Bio from "../components/bio/Bio";
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

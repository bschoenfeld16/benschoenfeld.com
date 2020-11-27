import React from "react";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Projects from "../components/Projects/Projects";
import { useSession } from "next-auth/client";

const Index: React.FC = () => {
    const [session] = useSession();
    return (
        <Layout title="bens - home">
            <Bio />
            <Projects />
            {session
                ? `you are signed in as ${session.user.name}`
                : "you are not signed in"}
        </Layout>
    );
};

export default Index;

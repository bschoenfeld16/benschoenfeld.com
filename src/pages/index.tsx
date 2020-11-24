import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const Index: React.FC = () => (
    <Layout>
        <div>
            <Image
                alt="Ben Schoenfeld"
                src="/images/IMG_0019.jpeg"
                width="128"
                height="128"
            />
            Back end dev aspiring to learn some CSS
        </div>
    </Layout>
);

export default Index;

import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import Layout from "../components/Layout";
import { Image } from "@chakra-ui/core";

const Index: React.FC = () => (
    <Box>
        <Layout>
            <Flex p={4}>
                <Image
                    borderRadius="full"
                    alt="Ben Schoenfeld"
                    src="/images/IMG_0019.jpeg"
                    boxSize="150px"
                />
                Back end dev aspiring to learn some CSS
            </Flex>
        </Layout>
    </Box>
);

export default Index;

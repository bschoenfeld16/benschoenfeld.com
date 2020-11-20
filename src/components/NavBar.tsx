import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4} minW={215}>
            <Flex flex={1} justify="space-between" align="center">
                <NextLink href="/">
                    <Link>
                        <Heading>Ben Schoenfeld</Heading>
                    </Link>
                </NextLink>
                <DarkModeSwitch />
            </Flex>
        </Flex>
    );
};

export default NavBar;

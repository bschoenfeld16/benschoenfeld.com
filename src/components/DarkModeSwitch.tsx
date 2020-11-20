import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <>
            <IconButton
                aria-label="Dark Mode"
                position="fixed"
                top="1rem"
                right="1rem"
                variant="ghost"
                icon={
                    isDark ? (
                        <SunIcon boxSize="24px" color="grey" />
                    ) : (
                        <MoonIcon boxSize="24px" color="grey" />
                    )
                }
                onClick={toggleColorMode}
            />
        </>
    );
};

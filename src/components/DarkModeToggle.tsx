import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle: React.FC = () => {
    const darkMode = useDarkMode(false);

    return (
        <div>
            <button type="button" onClick={darkMode.disable}>
                Light Mode
            </button>
            <button type="button" onClick={darkMode.toggle}>
                toggle
            </button>
            <button type="button" onClick={darkMode.enable}>
                DarkMode
            </button>
        </div>
    );
};

export default DarkModeToggle;

import React from "react";
import useDarkMode, { DarkMode } from "use-dark-mode";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import classes from "./DarkModeToggle.module.css";
import { IconType } from "react-icons";

const DarkModeToggle: React.FC = () => {
  const darkMode: DarkMode = useDarkMode(false);
  const Icon: IconType = darkMode.value ? RiSunLine : RiMoonFill;
  const titleMessage: string = darkMode.value
    ? "Use Light Theme"
    : "Use Dark Theme";

  return (
    <div
      title={titleMessage}
      className={classes.Toggle}
      onClick={darkMode.toggle}>
      <Icon size="1.5rem" />
    </div>
  );
};

export default DarkModeToggle;

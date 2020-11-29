import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import classes from "./Projects.module.css";

const Projects: React.FC = ({}) => (
    <div>
        <h1>projects</h1>
        <a
            className={classes.Projects}
            target="_blank"
            href="https://lireddit-web.benschoenfeld.com">
            LiReddit
            <BiLinkExternal />
        </a>
    </div>
);

export default Projects;

import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import classes from "./Projects.module.css";

const Projects: React.FC = ({}) => (
    <div>
        <h1>Projects</h1>
        <div className={classes.Project}>
            <a target="_blank" href="https://lireddit-web.benschoenfeld.com">
                LiReddit
                <BiLinkExternal />
            </a>
            <div>a simple reddit clone</div>
        </div>
    </div>
);

export default Projects;

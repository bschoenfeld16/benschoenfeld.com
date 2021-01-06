import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import classes from "./Projects.module.css";

const Projects: React.FC = ({}) => (
    <div className={classes.Container}>
        <h1>Projects</h1>
        <div className={classes.Project}>
            <a target="_blank" href="https://lireddit-web.benschoenfeld.com">
                LiReddit
                <BiLinkExternal />
            </a>
            <div>
                A simple Reddit clone created with Next.js, TypeScript, Node.js,
                GraphQL, and Postgres.
            </div>
        </div>
    </div>
);

export default Projects;

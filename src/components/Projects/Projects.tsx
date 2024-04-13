import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import classes from "./Projects.module.css";

const Projects: React.FC = ({}) => (
  <div className={classes.Container}>
    <h1>Projects</h1>
    <div className={classes.Project}>
      <a target="_blank" href="https://opes-dev.benschoenfeld.com">
        Opes
        <BiLinkExternal />
      </a>
      <div>
        A current work in progress PWA to help make financial decisions. Created
        with Next.js, TypeScript, GraphQL, and Postgres.
      </div>
      {/*<a*/}
      {/*    className={classes.Repo}*/}
      {/*    href="https://github.com/bschoenfeld16/opes">*/}
      {/*    <RiGithubFill size="2rem" />*/}
      {/*</a>*/}
    </div>
    <div className={classes.Project}>
      <a target="_blank" href="https://lireddit-web.benschoenfeld.com">
        LiReddit
        <BiLinkExternal />
      </a>
      <div>
        A simple Reddit clone created with Next.js, TypeScript, Node.js,
        GraphQL, and Postgres.
      </div>
      {/*<a className={classes.Repo} href="https://github.com/bschoenfeld16">*/}
      {/*    <RiGithubFill size="2rem" />*/}
      {/*</a>*/}
    </div>
  </div>
);

export default Projects;

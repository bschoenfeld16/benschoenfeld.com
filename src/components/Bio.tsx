import React from "react";
import Image from "next/image";
import classes from "./Bio.module.css";

const Bio: React.FC = ({}) => (
    <div className={classes.Bio}>
        <Image
            className={classes.Image}
            alt="Ben Schoenfeld"
            src="/images/IMG_0019.jpeg"
            width="128"
            height="128"
        />
        <div className={classes.Info}>
            Hi, I'm Ben. I'm a Software Engineer in the Minneapolis, MN area. I
            mostly work on backend infrastructure in c++ and Java. I'm currently
            interested in learning Next.js with GraphQL backend API's to develop
            full stack web applications.
        </div>
    </div>
);

export default Bio;

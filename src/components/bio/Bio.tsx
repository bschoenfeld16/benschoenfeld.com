import React from "react";
import Image from "next/image";
import classes from "./Bio.module.css";

const Bio: React.FC = ({}) => (
    <>
        <Image
            className={classes.Image}
            alt="Ben Schoenfeld"
            src="/images/IMG_0019.jpeg"
            width="150"
            height="150"
        />
        <div>
            <h1>About Me</h1>
            <div>
                Hi, I'm Ben. I'm a software engineer in the Minneapolis, MN
                area. Professionally, I primarily work on backend
                infrastructure/API's in C++ and Java. In my free time I'm
                currently learning Next.js and TypeScript with GraphQL backend
                API's to develop full stack web applications.
            </div>
        </div>
    </>
);

export default Bio;

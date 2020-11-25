import React from "react";
import Image from "next/image";
import classes from "./bio.module.css";

const Bio: React.FC = ({}) => (
    <div className={classes.Bio}>
        <Image
            className={classes.Image}
            alt="Ben Schoenfeld"
            src="/images/IMG_0019.jpeg"
            width="128"
            height="128"
        />
        Back end dev aspiring to learn some CSS
    </div>
);

export default Bio;

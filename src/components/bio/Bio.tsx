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
        Hi, I'm Ben. I'm a software engineer living between Minneapolis, MN and
        Breckenridge, CO. I primarily work on backend infrastructure/API's but
        am a strong full stack developer as well. In my free time I'm currently
        learning Next.js and TypeScript with GraphQL backend API's to develop
        full stack web applications. I've also reently started diving into React
        Native with Expo Router to develop mobile apps.
      </div>
    </div>
  </>
);

export default Bio;

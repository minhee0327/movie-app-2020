import React from "react";
import "../css/About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “I made this movie-app with React!! <br /> It's my first clone project
        and I'm proud of my self ♡!!!”
      </span>
      <span>― Minhee 0327</span>
    </div>
  );
}

export default About;

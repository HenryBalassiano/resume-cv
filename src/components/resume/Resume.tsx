import {useState} from "react";
import "../../styles/Resume.css";

function Resume({experience}: any) {
  return (
    <div className="resume">
      {experience.map((index: any, v: number) => (
        <div key={v}>
          {index.company}
          {index.position}
        </div>
      ))}
    </div>
  );
}

export default Resume;

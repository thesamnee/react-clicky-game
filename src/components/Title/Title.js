import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="titleDiv">
      <p>{props.message}</p>
      <span className="score">Current Score: {props.score} || Top Score: {props.topscore}</span>
    </div>
  );
}

export default Title;
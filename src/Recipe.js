import "./App.css";
import React from "react";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <h1>{props.data.label}</h1>
      <h4>Calories : {props.data.calories}</h4>
      <img src={props.data.image} alt={props.data.label}></img>
    </div>
  );
};

export default Recipe;

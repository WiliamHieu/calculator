import React from "react";
import "./button.css";

/*Checking boolean of params are numbers, . or = */
const isOperator = (value) => {
  return !isNaN(value) || value === "." || value === "=";
};

export const Button = (props) => (
  <div
    /* If props.children are operator return null, or not return "operator"
for changing color depend on class name 
*/
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

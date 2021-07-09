import React from "react";
import "./button.css";

// const isOperator = (operator) => {
//   return !isNaN(operator) || operator === "." || operator === "=";
// };

const Button = (props) => {
  return (
    <div
    // className={`button-wrapper ${
    //   isOperator(props.children) ? null : "operator"
    // }`}
    >
      {props.children}
    </div>
  );
};

export default Button;

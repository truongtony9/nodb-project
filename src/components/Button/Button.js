import React, { Component } from "react";

const Button = props => {
  return <button onClick={props.clickButton}>{props.children}</button>;
};

export default Button;

import React, { Component } from "react";

const Input = props => {
  return (
    <input
      onChange={event => props.inputFunction(event.target.value)}
      type="text"
      placeholder="edit top text here..."
    />
  );
};

export default Input;

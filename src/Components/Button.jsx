import React from "react";

const Button = ({ disabled, handleClick, text }) => {
  return (
    <button
      className={`button-style border ${
        disabled ? "cursor-not-allowed bg-none" : "cursor-pointer"
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

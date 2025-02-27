import React from "react";

const ButtonComponent = (props) => {
  return (
    <button
      onClick={props.onClick}
      id="AddButton"
      className="text-white font-bold py-2 px-4 rounded"
      style={{
        background: "linear-gradient(90deg, #00bfff, #004cff)",
        transition: "0.3s",
        cursor: "pointer",
        fontSize: "1.2rem",
      }}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;

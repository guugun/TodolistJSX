import React from "react";

const InputComponent = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder="⏰ ↪︎ Please enter your Todo List"
      className="p-2 text-black rounded-md mx-2"
      style={{
        fontSize: "1.2rem",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        width: "50%",
      }}
    />
  );
};

export default InputComponent;

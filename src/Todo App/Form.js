import React from "react";

const Form = ({ userInput, setUserInput, todos, setTodos }) => {
  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const btnHandler = () => {
    if (userInput !== "") {
      setTodos([
        ...todos,
        { value: userInput, id: Math.floor(Math.random() * 1000) },
      ]);
      setUserInput("");
    } else {
      alert("Please add something, click add button!");
    }
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      btnHandler();
    }
  };

  return (
    <>
      <div className="main">
        <input
          type="text"
          onKeyDown={keyHandler}
          onChange={inputHandler}
          value={userInput}
        />
        <button onClick={btnHandler}>+</button>
      </div>
    </>
  );
};

export default Form;

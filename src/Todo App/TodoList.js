import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
import "./style.css";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="container">
        <Form
          userInput={userInput}
          todos={todos}
          setTodos={setTodos}
          setUserInput={setUserInput}
        />
        <Todos todos={todos} setUserInput={setUserInput} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoList;

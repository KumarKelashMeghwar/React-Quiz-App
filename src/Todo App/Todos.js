import React from "react";
import List from "./List";

const Todos = ({ todos, setTodos, setUserInput }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <List
            setUserInput={setUserInput}
            todos={todos}
            setTodos={setTodos}
            text={todo.value}
            id={todo.id}
            key={todo.id}
          />
        );
      })}
    </>
  );
};

export default Todos;

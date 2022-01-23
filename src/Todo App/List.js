import React from "react";
import "./list.css";

const List = ({ text, todos, setTodos, id, setUserInput }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((value) => value.id !== id));
  };

  const editHandler = () => {
    setUserInput(text);
    deleteHandler();
  };

  return (
    <>
      <ul className="list">
        <li>{text}</li>
        <div className="buttons">
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={editHandler}>Edit</button>
        </div>
      </ul>
    </>
  );
};

export default List;

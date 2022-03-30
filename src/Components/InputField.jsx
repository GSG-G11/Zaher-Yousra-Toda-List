import { Component } from "react";

const InputField = (props) => {
  const { todos, textTodo, handleInput, HandleAddTodo } = props;
  return (
    <form>
      <div className="input-task">
        <input
          onChange={handleInput}
          value={textTodo}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit" onClick={HandleAddTodo}>
          <i className="fas fa-plus-square"></i> Add
        </button>
      </div>
    </form>
  );
};

export default InputField;

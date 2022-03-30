import React from 'react';

function SelectTodo(props) {
  const { todoType, inputHandler } = props;

  return (
    <>
      <div className="select">
        <select
          name="todoType"
          onChange={inputHandler}
          value={todoType}
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  );
}

export default SelectTodo;

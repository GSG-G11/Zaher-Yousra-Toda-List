const InputField = (props) => {
  const { todoTxt, inputHandler, addTodoHandler } = props;
  return (
    <div className="input-task">
      <input
        name="todoTxt"
        onChange={inputHandler}
        value={todoTxt}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={addTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
  );
};

export default InputField;

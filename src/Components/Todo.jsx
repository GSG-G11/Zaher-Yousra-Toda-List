const Todo = (props) => {
  const {
    todoItem: { value, completed, editable, id },
    deleteTodoHandler,EditHandler,
  } = props;

  return (
    <>
      <div className={completed ? 'todo completed' : 'todo'}>
        <li className="todo-item" contentEditable={editable}>
          {value}
        </li>
        <button className="edit-btn" onClick={() =>EditHandler(id)}>
          <i className="far fa-edit"></i>
        </button>
        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={() => deleteTodoHandler(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;

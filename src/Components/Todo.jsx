const Todo = (props) => {
  const {
    todoItem: { value, completed, editable, id },
    deleteTodoHandler,
    doneTogglerHandler,
    enableEditHandler,
    updateTodoHandler,
  } = props;

  return (
    <>
      <div className={completed ? 'todo completed' : 'todo'}>
        <li
          className="todo-item"
          contentEditable={editable}
          suppressContentEditableWarning={true}
          onKeyPress={(e) => updateTodoHandler(e, id)}
        >
          {value}
        </li>
        <button className="edit-btn" onClick={() => enableEditHandler(id)}>
          <i className="far fa-edit"></i>
        </button>
        <button className="complete-btn" onClick={() => doneTogglerHandler(id)}>
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

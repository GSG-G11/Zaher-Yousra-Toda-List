const Todo = (props) => {
  const {
    todoItem: { value, completed },
  } = props;

  return (
    <>
      <div className={completed ? 'todo completed' : 'todo'}>
        <li className="todo-item">{value}</li>
        <button className="edit-btn">
          <i className="far fa-edit"></i>
        </button>
        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;

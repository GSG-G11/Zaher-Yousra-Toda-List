import Todo from './Todo';

const TodosWrapper = (props) => {
  const {
    filteredTodos,
    deleteTodoHandler,
    doneTogglerHandler,
    enableEditHandler,
    updateTodoHandler,
  } = props;

  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todoItem) => {
            return (
              <Todo
                key={todoItem.id}
                todoItem={todoItem}
                deleteTodoHandler={deleteTodoHandler}
                doneTogglerHandler={doneTogglerHandler}
                enableEditHandler={enableEditHandler}
                updateTodoHandler={updateTodoHandler}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodosWrapper;

import Todo from './Todo';

const TodosWrapper = (props) => {
  const { filteredTodos, deleteTodoHandler, EditHandler } = props;

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
                
                EditHandler = {EditHandler}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodosWrapper;

import Todo from './Todo';

const TodosWrapper = (props) => {
  const { filteredTodos } = props;

  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todoItem) => {
            return <Todo key={todoItem.id} todoItem={todoItem} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodosWrapper;

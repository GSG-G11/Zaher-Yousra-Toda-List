import { Component } from 'react';
import { nanoid } from 'nanoid';
import InputField from './Components/InputField';
import SelectTodo from './Components/SelectTodo';
import TodosWrapper from './Components/TodosWrapper';
import './App.css';

class App extends Component {
  state = {
    todoTxt: '',
    todoType: 'all',
    prevTodoType: 'all',
    prevTodosLength: 0,
    todos: [],
    filteredTodos: [],
  };

  inputHandler = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value });
  };

  addTodoHandler = (e) => {
    e.preventDefault();
    const { todoTxt } = this.state;
    const txt = todoTxt.trim();

    if (txt !== '') {
      this.setState((prevState) => {
        return {
          todos: [
            ...prevState.todos,
            { value: txt, completed: false, id: nanoid(20) },
          ],
          todoTxt: '',
        };
      });
    }
  };

  componentDidUpdate = () => {
    const { todoType, prevTodoType, todos, prevTodosLength } = this.state;

    if (prevTodosLength !== todos.length || prevTodoType !== todoType) {
      let newTodos = [];

      switch (todoType) {
        case 'all':
          newTodos = [...todos];
          break;
        case 'completed':
          newTodos = todos.filter((todo) => todo.completed);
          break;
        default:
          newTodos = todos.filter((todo) => !todo.completed);
      }

      this.setState({
        filteredTodos: newTodos,
        prevTodosLength: todos.length,
        prevTodoType: todoType,
      });
    }
  };

  render() {
    const { todoTxt, todoType, filteredTodos } = this.state;

    return (
      <>
        <h1>TODO LIST</h1>
        <form>
          <InputField
            todoTxt={todoTxt}
            inputHandler={this.inputHandler}
            addTodoHandler={this.addTodoHandler}
          />
          <SelectTodo inputHandler={this.inputHandler} todoType={todoType} />
        </form>
        <TodosWrapper filteredTodos={filteredTodos} />
      </>
    );
  }
}

export default App;

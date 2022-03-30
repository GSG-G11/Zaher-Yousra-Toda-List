import { Component } from 'react';
import { nanoid } from 'nanoid';
import _ from 'lodash';
import InputField from './Components/InputField';
import SelectTodo from './Components/SelectTodo';
import TodosWrapper from './Components/TodosWrapper';
import './App.css';

class App extends Component {
  state = {
    todoTxt: '',
    todoType: 'all',
    prevTodoType: 'all',
    prevTodos: 0,
    todos: [],
    filteredTodos: [],
  };

  inputHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  addTodoHandler = (e) => {
    e.preventDefault();
    const { todoTxt } = this.state;
    const txt = todoTxt.trim();

    if (txt !== '') {
      this.setState((prevState) => {
        return {
          todos: [
            ...prevState.todos,
            { value: txt, completed: false, editable: false, id: nanoid(20) },
          ],
          todoTxt: '',
        };
      });
    }
  };

  deleteTodoHandler = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  doneTogglerHandler = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  enableEditHandler = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, editable: true } : todo
      ),
    }));
  };

  updateTodoHandler = ({ target: { textContent }, key }, todoId) => {
    console.log(key);
    if (key === 'Enter') {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === todoId
            ? { ...todo, value: textContent, editable: false }
            : todo
        ),
      }));
    }
  };

  componentDidUpdate = () => {
    const { todoType, prevTodoType, todos, prevTodos } = this.state;

    if (!_.isEqual(prevTodos, todos) || prevTodoType !== todoType) {
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
        prevTodos: todos,
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
        <TodosWrapper
          filteredTodos={filteredTodos}
          deleteTodoHandler={this.deleteTodoHandler}
          doneTogglerHandler={this.doneTogglerHandler}
          enableEditHandler={this.enableEditHandler}
          updateTodoHandler={this.updateTodoHandler}
        />
      </>
    );
  }
}

export default App;

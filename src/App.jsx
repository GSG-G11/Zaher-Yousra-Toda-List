import { nanoid } from "nanoid";
import { Component } from "react";
import InputField from "./Components/InputField";

class App extends Component {
  state = {
    todos: [],
    textTodo: "",
  };

  handleInput = (e) => {
    this.setState({ textTodo: e.target.value });
  };

  HandleAddTodo = (e) => {
    e.preventDefault();
    const text = this.state.textTodo;
    if (text !== "") {
      console.log(this.state.todos);
      const newTodos = [
        ...this.state.todos,
        { text: text, completed: false, id: nanoid(20) },
      ];
      console.log(newTodos);
      this.setState({
        todos: newTodos,
        textTodo: "",
      });
    }
  };

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <InputField
          todos={this.state.todos}
          textTodo={this.state.textTodo}
          handleInput={this.handleInput}
          HandleAddTodo={this.HandleAddTodo}
        />
      </>
    );
  }
}

export default App;

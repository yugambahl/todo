import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos", JSON.stringify("todos")));
      setTodos(localTodo);
    };
    return (
      <div className="App">
        <header>
          <h1>Yugam's Todo List</h1>
        </header>
        <Form todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    );
  };

  export default App;

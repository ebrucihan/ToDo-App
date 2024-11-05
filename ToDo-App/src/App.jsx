import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Taste JavaScript", done: true },
    { id: 2, text: "Code furiously", done: true },
    { id: 3, text: "Promote Mavo", done: false },
    { id: 4, text: "Give talks", done: false },
    { id: 5, text: "Write tutorials", done: true },
    { id: 6, text: "Have a life!", done: false },
  ]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div className="todoapp">
      <TodoHeader addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
      <TodoFooter
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;

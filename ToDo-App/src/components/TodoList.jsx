import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

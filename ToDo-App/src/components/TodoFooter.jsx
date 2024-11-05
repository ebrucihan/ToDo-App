import React from "react";

const TodoFooter = ({ todos, filter, setFilter, clearCompleted }) => {
  const itemsLeft = todos.filter((todo) => !todo.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </span>
      <ul className="filters">
        <li>
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;

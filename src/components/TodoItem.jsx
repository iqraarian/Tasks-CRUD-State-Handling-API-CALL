import React from "react";
const TodoItem=({ todo, onDelete, onToggle }) =>{
  return(
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>
      <button 
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
import { useState, useEffect } from 'react';
import { todoAPI } from '../api/api';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
const Todos = () =>{
  const [todos, setTodos]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(() =>{
    const fetchTodos=async () =>{
      try{
        const { data }=await todoAPI.getAll();
        setTodos(data);
      } finally{
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);
  const handleAdd=async (title) =>{
    const { data }=await todoAPI.create({
      title,
      completed: false,
      userId: 1
    });
    setTodos([...todos, data]);
  };
  const handleToggle=(id) =>{
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};
  const handleDelete=async (id) =>{
    await todoAPI.delete(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };
  if(loading) return <div>Loading...</div>;
  return(
    <div className="todos-page">
      <h2>Todo List</h2>
      <TodoForm onAdd={handleAdd} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todos;
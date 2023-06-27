import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
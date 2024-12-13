import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
const LSKEY = "todos";


const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem(LSKEY);
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem(LSKEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app-container">
            <Header />
            <TodoForm addTodo={addTodo} />
            <h2>Todos</h2>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
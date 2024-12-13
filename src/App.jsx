import React, {useState, useEffect} from 'react';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

const LSKEY = "todos";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem(LSKEY);
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const addTodo = (text) => {
        const newTodo = {id: Date.now(), text, status: "pending"};
        setTodos([...todos, newTodo]);
    };

    useEffect(() => {
        localStorage.setItem(LSKEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        status: todo.status === "completed" ? "in-progress" : "completed",
                    }
                    : todo
            )
        );
    };

    const updateStatus = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {...todo, status: todo.status === "pending" ? "in-progress" : "completed"}
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app-container">
            <Header/>
            <TodoForm addTodo={addTodo}/>
            <h2>Todos</h2>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                updateStatus={updateStatus} // Passe la fonction ici
            />
        </div>
    );
};

export default App;
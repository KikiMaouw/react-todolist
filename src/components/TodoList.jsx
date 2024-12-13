import React from 'react';
import TodoItem from './TodoItem';
import './css/TodoList.css';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateStatus }) => {
    return (
        <ul className="todo-ul">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`todo-item ${todo.status}`} // Ajouter la classe dynamique pour l'état
                    style={{ marginBottom: "10px" }}
                >
                    <span>{todo.text} ({todo.status})</span>
<div className="button-container">
                    {todo.status === "completed" ? (
                        <button onClick={() => toggleTodo(todo.id)}>Undo</button>
                    ) : (
                        <button onClick={() => updateStatus(todo.id)}>
                            {todo.status === "pending" ? "Start" : "Complete"}
                        </button>
                    )}

                    <button className="button-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
</div>
</li>
            ))}
        </ul>
    );
};

export default TodoList;
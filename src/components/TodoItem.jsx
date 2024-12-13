import React from 'react';
import './css/TodoItem.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    marginLeft: '10px',
                }}
            >
                {todo.text}
            </span>

        </li>
    );
};

export default TodoItem;
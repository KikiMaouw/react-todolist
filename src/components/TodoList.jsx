import React from 'react';
import TodoItem from './TodoItem';
import './css/TodoList.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul className="todo-ul">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
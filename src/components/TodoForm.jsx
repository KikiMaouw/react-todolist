import React, { useState } from 'react';
import './css/TodoForm.css';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                className="form-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a new todo"
            />
            <button className="button-add" type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;

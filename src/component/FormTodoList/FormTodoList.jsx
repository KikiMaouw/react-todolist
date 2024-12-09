import React from "react";
import './FormTodoList.css';

function FormTodoList() {
    return (
        <div className="app">
            <h1>My Todo App</h1>
            <hr className="separator" />
            <div className="input-section">
                <input type="text" placeholder="Type a new todo" className="todo-input" />
                <button className="add-todo-button">Add Todo</button>
            </div>
        </div>
    );
}

export default FormTodoList;
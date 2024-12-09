import React from "react";
import './TodoList.css';

function TodoList() {
    return (
        <div className="todo-list">
            <hr className="separator" />
            <h2>Todos</h2>
            <ul>
                <li>
                    <input type="checkbox" id="todo-1" />
                    <label htmlFor="todo-1">Learn React</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-2" />
                    <label htmlFor="todo-2">Be Awesome!</label>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;
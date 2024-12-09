import React, {useState} from "react";
import './TodoList.css';

export default function TodoList() {
    const initialTodos = ["Learn React", "Be Awesome!"];
    const [todos, setTodos] = useState(initialTodos);

    return (
        <ul>
            {todos.map((todo) => (
                <li>
                    <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
    );
}

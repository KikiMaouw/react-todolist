import React from "react";
import "./App.css";
import TodoList from "./component/TodoList/TodoList.jsx";
import FormTodoList from "./component/FormTodoList/FormTodoList.jsx";

function App() {
    return (
        <>
            <FormTodoList/>
            <TodoList/>
        </>
    );
}

export default App;
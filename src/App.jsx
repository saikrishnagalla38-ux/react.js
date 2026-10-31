
import React, { useState } from 'react';
import "./App.css";

import InputContainer from "./assets/Components/InputContainer";
import TodoContainer from "./assets/Components/TodoContainer";

function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(task) {
        if (task.trim() === "") return;

        setTodos([...todos, {
            id: Date.now(),
            text: task,
            completed: false
        }]);
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    }

    return (
        <main>
            <h1>To Do List</h1>

            <InputContainer addTodo={addTodo} />

            <TodoContainer
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </main>
    );
}

export default App;

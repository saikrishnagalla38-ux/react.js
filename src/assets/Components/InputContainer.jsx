
import React, { useState } from 'react';

function InputContainer({ addTodo }) {

    const [task, setTask] = useState("");

    function handleAdd() {
        addTodo(task);
        setTask("");
    }

    return (
        <div className="input-container">

            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAdd}>+</button>

        </div>
    );
}

export default InputContainer;

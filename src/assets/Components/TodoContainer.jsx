
import React from 'react';

function TodoContainer({ todos, deleteTodo, toggleTodo }) {

    return (
        <div className="container">

            {todos.map(todo => (

                <div className="todo" key={todo.id}>

                    <p style={{
                        textDecoration: todo.completed
                            ? "line-through"
                            : "none"
                    }}>
                        {todo.text}
                    </p>

                    <div className="actions">

                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default TodoContainer;

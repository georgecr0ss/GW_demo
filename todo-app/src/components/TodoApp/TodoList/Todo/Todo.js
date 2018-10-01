import React from 'react';

export default ({ todo, remove, handleDone }) => {

    // Each Todo
    return (
        <li onClick={() => handleDone(todo.id)} className={`${todo.done ? 'done' : ''}`}>
            {todo.text}
            <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                remove(todo.id)
            }}>-</button>
        </li >
    );
};

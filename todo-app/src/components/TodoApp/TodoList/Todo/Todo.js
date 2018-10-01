import React from 'react';

export default ({ todo, remove, handleDone }) => {
    let classNames = [];

    if (todo.isDone) {
        classNames.push('done');
    }

    // Each Todo
    return <li
        onClick={() => handleDone(todo.id)}
        className={classNames.join(' ')} >{todo.text} <button onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            remove(todo.id);
        }}>-</button></li>;
};

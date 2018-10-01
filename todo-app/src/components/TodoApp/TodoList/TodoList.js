import React from 'react';
import Todo from './Todo/Todo';

export default ({ todos, remove, handleDone }) => {
    // Map through the todos
    console.log(todos);

    return (
        <ul>
            {
                todos.map((todo) => {
                    return (<Todo todo={todo} key={todo.id} remove={remove} handleDone={handleDone} />)
                })
            }
        </ul>
    );
};

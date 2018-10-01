import React from 'react';
import Todo from './Todo/Todo';

export default ({ todos, remove, handleDone }) => {
    // Map through the todos
    return (
        <ul>
            {
                todos.map((todo) => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        remove={remove}
                        handleDone={handleDone}
                    />;
                })
            }
        </ul>
    );
};

import React from 'react';

import TodoForm from './TodoForm/TodoForm';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';

export default class TodoApp extends React.Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            todos: []
        }

        this.addTodo = this.addTodo.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    // Add todo handler
    addTodo(val) {
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed

    }

    // Handle remove
    handleDone(id) {
        // Filter all todos except the one to be removed

    }

    render() {

        // Render JSX
        return (
            <div className="todoApp">
                <Title />
                <TodoForm addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    remove={this.handleRemove}
                    handleDone={this.handleDone}
                />
            </div>
        );
    }
}
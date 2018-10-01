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
            todos: [{
                id: Date.now(),
                text: 'Learing React.js',
                isDone: false
            }]
        }

        this.addTodo = this.addTodo.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    // Add todo handler
    addTodo(val) {
        const newArray = [
            ...this.state.todos, ...[{
                id: Date.now(),
                text: val,
                isDone: false
            }]
        ];

        this.setState({
            todos: newArray
        })
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const filteredTodos = this.state.todos.filter((todo) =>
            todo.id !== id
        );

        this.setState({
            todos: filteredTodos
        });
    }

    // Handle remove
    handleDone(id) {
        // Filter all todos except the one to be removed
        const filteredTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {

                return {
                    ...todo,
                    ...{
                        isDone: !todo.isDone
                    }
                }
            }

            return todo;
        });

        this.setState({
            todos: filteredTodos
        });
    }

    render() {
        console.log(this.state);
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
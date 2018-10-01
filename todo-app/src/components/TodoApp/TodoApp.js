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
            data: [{
                text: 'Learn React',
                id: Date.now()
            }]
        }

        this.addTodo = this.addTodo.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = {
            text: val,
            id: Date.now(),
            done: false
        }

        // Update state
        this.setState({ data: [...this.state.data, todo] });
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const updatedState = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo;
        });
        // Update state with filter
        this.setState({ data: updatedState });
    }

    // Handle remove
    handleDone(id) {
        // Filter all todos except the one to be removed
        const updatedState = this.state.data.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo, ...{
                        done: !todo.done
                    }
                };
            }

            return todo
        });
        // Update state with filter
        this.setState({ data: updatedState });
    }

    render() {
        // Render JSX
        console.log(this.state.data);
        return (
            <div className="todoApp">
                <Title />
                <TodoForm addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove}
                    handleDone={this.handleDone}
                />
            </div>
        );
    }
}
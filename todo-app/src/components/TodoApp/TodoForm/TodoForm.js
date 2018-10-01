import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    persistTodo() {

        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={(e) => {

                    this.setState({
                        inputValue: e.target.value
                    });

                }} />
                <button onClick={() => this.persistTodo()}>+</button>
            </div>
        )
    }
}
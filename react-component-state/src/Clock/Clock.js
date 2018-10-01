import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date
        };

        this.updateTime = this.updateTime.bind(this);

    }

    updateTime() {

        this.setState({
            currentTime: new Date
        })
    }

    componentDidMount() {

        this.intervalFun = setInterval(this.updateTime, 1000);
    }

    componentWillMount() {

        clearInterval(this.intervalFun);
    }

    render() {

        return (
            <div>

                {
                    [
                        <h1>{this.state.currentTime.toLocaleTimeString()}</h1>,
                        <h1>{this.state.currentTime.toLocaleDateString()}</h1>
                    ]
                }
                <ul>
                    {
                        [1, 45, 532, 5, 5, 324].map((number, i) => (
                            <li key={i}>{number}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
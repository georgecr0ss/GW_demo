import React from 'react';

export default class Title extends React.Component {

    componentDidMount() {

        console.warn('Title componentDidMount');
    }

    render() {
        return (
            <h1>I was mounted before my parent</h1>
        )
    }
}
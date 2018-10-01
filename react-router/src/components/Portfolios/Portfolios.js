import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

class Portfolios extends React.Component {

    componentDidMount() {

        console.warn('Portfolios componentDidMount');
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}

                <Route path="/holdings" render={() => {
                    console.log(11111);
                    return (
                        <h1>Portfolios holdings page</h1>
                    )
                }} />

            </div>
        )
    }
}

export default withRouter(Portfolios);
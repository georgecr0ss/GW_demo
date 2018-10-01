import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {

    renderLogo() {
        const style = {
            height: 50,
            margin: '15px 40px 0 20px',
            width: '150px'
        };

        return (
            <Link to="/">
                <img alt="Geowealth-Logo"
                    style={style}
                    src='https://geowealth.com/wp-content/themes/geowealth/img/geowealth-logo-white.png'
                />
            </Link>
        );
    }

    renderLinks() {
        const { routes } = this.props;

        return routes.map(({ path, name }, i) => {

            return (
                <NavLink to={path} key={i}> {name} </NavLink>
            );
        });
    }
    render() {

        return (
            <header>
                {this.renderLogo()}
                {this.renderLinks()}
            </header>
        );
    }
}

import React, { Component } from 'react';

import Constructions from './Constructions';

const LoginForm = () => (
    <form action="/signin/twitter" method="post">
        <h1>Please login</h1>
        <button type="submit">Login</button>
    </form>
);

const LogoutComponent = (props) => (
    <div>
        <h2>Welcome, {props.name}</h2>
        <button onClick={props.logout}>Logout</button>
    </div>
);

class Login extends Component {

    constructor(...args) {
        super(...args);
        this.state = {name: null};
    }

    componentDidMount() {
        fetch('/api/session', {credentials: 'include'})
            .then(res => res.json())
            .then(session => {
                if (this.props.updateState) {
                    this.props.updateState(!!session.name);
                }
                this.setState({name: session.name});
            });
    }

    logout = () => {
        console.log("logout");
        fetch('/api/session', {method: 'delete', credentials: 'include'})
            .then(res => {
                this.setState({name: null});
                if (this.props.updateState) {
                    this.props.updateState(false);
                }
            });
    }

    render() {
        const profile = this.state.name ?
            <LogoutComponent name={this.state.name} logout={this.logout}/> :
            <LoginForm />;
        return (
            <div>
                {profile}
            </div>
        )
    }
}

export default Login;
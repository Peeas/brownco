import React, { Component } from 'react';
import classes from './Auth.module.css';
import TextField from '@material-ui/core/TextField';
import AuthContext from '../../context/auth-context';

class Auth extends Component {
    state = {
        loginForm: {
            userName: '',
            password: ''
        }
    }

    static contextType = AuthContext;

    handleChange = (event) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        }
        updatedLoginForm[event.target.name] = event.target.value;
        this.setState({
            loginForm: updatedLoginForm
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: this.state.loginForm.userName,
            password: this.state.loginForm.password
        }
        this.context.login(user);
        this.props.closeDialog();
    }

    render() {
        return (
            <div className={classes.AuthContainer}>
                <div>
                    Admin Login
                </div>
                <form onSubmit={e => this.onSubmit(e)} autoComplete="off">
                    <div>
                        <TextField
                            id="userName"
                            name="userName"
                            label="Username"
                            type="email"
                            value={this.state.loginForm.userName}
                            className={classes.textField}
                            onChange={(event)=> this.handleChange(event)}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={this.state.loginForm.password}
                            className={classes.textField}
                            onChange={(event)=> this.handleChange(event)}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div className={classes.ActionRow}>
                        <button className={classes.CommonButton} type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Auth;
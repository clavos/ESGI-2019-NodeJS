import React from "react";
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';

class LoginFormContainer extends React.Component{
    state = {
        username: "",
        password: "",
        toDashboard: false
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        fetch('http://127.0.0.1:3001/users/login_check', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response)=> response.json())
        .then(data => {localStorage.setItem('token', data.token); this.setState({toDashboard: true});})
        .catch(error=>console.log(error));
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard'/>
        } else {
            return (
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Se connecter
                        </Typography>
                        <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                    </Paper>
                </main>
            );
        }
    }
}

export default LoginFormContainer;
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
        console.log(this.state);
        fetch('http://127.0.0.1:3001//login_check', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response)=> response.json())
        .then(data => {localStorage.setItem('token', data.token); console.log(data); this.setState({toDashboard: true});})
        .catch(error=>console.log(error));
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard'/>
        } else {
            return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        }
    }
}

export default LoginFormContainer;
import React from "react";
import RegisterForm from '../components/RegisterForm';
import { Redirect } from 'react-router-dom';

class RegisterFormContainer extends React.Component{
    state = {
        username: "",
        password: ""
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        console.log(this.state);
        fetch('http://127.0.0.1:3001/user/Register', {
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
            return <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        }
    }
}

export default RegisterFormContainer;
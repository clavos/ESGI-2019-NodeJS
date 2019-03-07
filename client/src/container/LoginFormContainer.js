import React from "react";
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component{
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
        fetch('http://127.0.0.1:3001/users/login_check', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response)=> response.json())
        .then(data => {localStorage.setItem('token', data.token); console.log(data)})
        .catch(error=>console.log(error));
    }

    render(){
        if ( this.props.triggerLoginForms ) {
            return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        } else {
            return null
        }
    }
}

export default LoginFormContainer;
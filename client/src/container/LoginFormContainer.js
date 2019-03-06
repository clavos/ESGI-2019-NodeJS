import React from "react";
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component{
    state = {
        username: "",
        password: ""
    }

    handleChange = (value, field) => {
        console.log(field, value);
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        console.log(this.state);
    }

    render(){
        return <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
}

export default LoginFormContainer;
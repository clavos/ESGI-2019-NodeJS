import React from "react";

class RegisterForm extends React.Component {
    render(){
        return <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.onSubmit();
            return false;
        }}>
            <p>Username</p>
            <input name="username" onChange={(event) => this.props.onChange(event.currentTarget.value, "username")}/>
            <p>Password</p>
            <input name="password" type="password" onChange={(event) => this.props.onChange(event.currentTarget.value, "password")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    }
}

export default RegisterForm;
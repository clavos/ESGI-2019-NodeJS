import React from "react";

class ActorForm extends React.Component {
    render(){
        return <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.onSubmit();
            return false;
        }}>
            <p>First name</p>
            <input name="firstName" onChange={(event) => this.props.onChange(event.currentTarget.value, "firstName")}/>
            <p>Last name</p>
            <input name="lastName" onChange={(event) => this.props.onChange(event.currentTarget.value, "lastName")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    }
}

export default ActorForm;
import React from "react";

class ActorForm extends React.Component {
    render(){
        return <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.onSubmit();
            return false;
        }}>
            <p>First name</p>
            <input name="firstname" onChange={(event) => this.props.onChange(event.currentTarget.value, "firstname")}/>
            <p>Last name</p>
            <input name="lastname" onChange={(event) => this.props.onChange(event.currentTarget.value, "lastname")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    }
}

export default ActorForm;
import React from "react";
import ActorForm from '../components/ActorForm';

class ActorFormContainer extends React.Component{
    state = {
        firstname: "",
        lastname: ""
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        //this.state.id = "5c823c4093fb06001c606d19";
        console.log(this.state);
        fetch('http://127.0.0.1:3001/actors/update/'+this.state.id, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response)=> response.json())
            .then(data => {console.log(data)})
            .catch(error=>console.log(error));
    }

    render(){
        return <ActorForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
}

export default ActorFormContainer;
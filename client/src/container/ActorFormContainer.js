import React from "react";
import ActorForm from '../components/ActorForm';

class ActorFormContainer extends React.Component{
    constructor(props){
        super(props);
    }
    
    state = {
        firstname: "",
        lastname: ""
    }

    handleChange = (value, field) => {
        console.log(value, field);
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        console.log(JSON.stringify(this.state), localStorage.getItem('token'));
        fetch('http://127.0.0.1:3001/actor/add', {
            method: "POST",
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
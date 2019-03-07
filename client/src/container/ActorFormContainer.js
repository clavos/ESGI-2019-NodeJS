import React from "react";
import ActorForm from '../components/ActorForm';

class ActorFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state.method = (this.props.method == 'POST')?'POST':'PUT';
    }
    
    state = {
        firstname: "",
        lastname: "",
        method : ""
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        console.log(this.props.method);
        console.log(JSON.stringify(this.state));
        fetch('http://127.0.0.1:3000/actors/add', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json"
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
import React from "react";
import ActorForm from '../components/ActorForm';
import MainMenuBar from '../components/MainMenuBar';

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
        fetch('http://127.0.0.1:3001/actors/add', {
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
        return (
                <div>
                    <nav>
                        <MainMenuBar/>
                    </nav>
                    <ActorForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                </div>
                );
    }
}

export default ActorFormContainer;
import React from "react";
import MovieForm from '../components/MovieForm';

class MovieFormContainer extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        title: "",
        description: ""
    }

    handleChange = (value, field) => {
        console.log(value, field);
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        fetch('http://127.0.0.1:3001/movies/add', {
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
        return <MovieForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
}

export default MovieFormContainer;
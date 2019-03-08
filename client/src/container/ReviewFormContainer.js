import React from "react";
import ReviewForm from '../components/ReviewForm';

class ReviewFormContainer extends React.Component{
    constructor(props){
        super(props);
    }
    
    state = {
        idMovie: "",
        score: "",
        Comment: ""
    }

    handleChange = (value, field) => {
        console.log(value, field);
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        this.state.idMovie = "5c81025e20a8e819cf88c0a1";
        console.log(JSON.stringify(this.state), localStorage.getItem('token'));
        fetch('http://127.0.0.1:3001/review/add', {
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
        return <ReviewForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
}

export default ReviewFormContainer;
import React from "react";
import ReviewForm from '../components/ReviewForm';

class ReviewFormContainer extends React.Component{
    state = {
        score: "",
        Comment: ""
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleSubmit = ()=>{
        console.log(JSON.stringify(this.state), localStorage.getItem('token'));
        fetch('http://127.0.0.1:3001/reviews/add', {
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
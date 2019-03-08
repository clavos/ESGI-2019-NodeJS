import React from "react";

class MovieDetailsComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            movie: [],
            reviews: []
        };
        fetch('http://127.0.0.1:3001/movies/5c81025e20a8e819cf88c0a1', {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(movie =>
        {
            console.log(movie);
            this.setState({movie: movie, reviews: movie.reviews})
        })
    }
    render(){
        if(this.state.movie){
            return <div >
                <p>{this.state.movie.title}</p>
                {this.state.reviews.map( review => {
                    return <div key={review._id}>
                        <p>{review.score}</p>
                        <p>{review.Comment}</p>
                    </div>
                } )}
            </div>
        }
        else return null;
    }
}

export default MovieDetailsComponent;
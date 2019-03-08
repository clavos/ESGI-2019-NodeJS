import React from 'react';


class Movie extends React.Component {

    constructor() {
        super();
        this.state = {
            idmovie: "5c812bd26b6bfb31f357e766",
            info: []
        };
        this.getMovie(this.state.idmovie);
    }

    getMovie(id) {
        fetch('http://127.0.0.1:3001/movies/'+id)
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({info: data});
        }).catch(error=>console.log(error));
    }
    render(){
        return (
                <div>
                    {this.state.info}
                </div>
            );
    }

}

export default Movie;
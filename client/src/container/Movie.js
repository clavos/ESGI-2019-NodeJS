import React from 'react';


class Movie extends React.Component {

    constructor() {
        super();
        this.state = {
        };

    }


    render(){
        return (
                <div>
                    {this.state.idMovie}
                </div>
            );
    }

}

export default Movie;
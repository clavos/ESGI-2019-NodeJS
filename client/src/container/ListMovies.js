import React from 'react';

import { Redirect } from 'react-router-dom';
import {GridList, GridListTile, GridListTileBar, withStyles} from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        padding: 10,
        width: "90%",
        height: "90%",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}

class ListMovies extends React.Component {


    constructor() {
        super();
        this.state = {
            movies: [],
            toMovie: false
        };

        this.getAllMovies();

    }

    getAllMovies() {
        fetch('http://127.0.0.1:3001/movies')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({movies: data});
            console.log("state", this.state.movies);
        }).catch(error=>console.log(error));
    }

    redirectToMovie = () => {
        this.setState({toMovie: true});
    }

    render(){
        const { classes } =  this.props;
        if (this.state.toMovie === true) {
            return <Redirect to='/dashboard'/>
        } else {
            return (<div>
                <div className={classes.root}>
                    <GridList cols={5} spacing={1} className={classes.gridList}>
                        {this.state.movies.map((movie) => {
                            return (
                                <GridListTile onClick={this.redirectToMovie} key={movie._id} cols={1} rows={4}>
                                    <img src={movie.image} alt={movie.title}/>
                                    <GridListTileBar
                                        title={movie.title}
                                        titlePosition="top"
                                        actionPosition="left"
                                        className={classes.titleBar}
                                    />
                                </GridListTile>
                            )
                        })}
                    </GridList>
                </div>
            </div>)
        }

    }

}

export default withStyles(styles)(ListMovies);
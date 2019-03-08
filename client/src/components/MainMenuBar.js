import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
    },
    logo: {
        flex: 1,
    }
}
class ButtonAppBar extends React.Component {
    render(){
        const { classes } =  this.props;
        return  <div>
        <AppBar position="static" className={classes.root}>
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.logo}>
            Shirizu
            </Typography>
            <div><Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/Register">Register</Button></div>
           
                </Toolbar>
                </AppBar>
                </div>
        }

}

export default withStyles(styles)(ButtonAppBar);
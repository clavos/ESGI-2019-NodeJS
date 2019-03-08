import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ButtonAppBar extends React.Component {
    render(){
        return  <div>
        <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit">
            Shirizu
            </Typography>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/Register">Register</Button>
                </Toolbar>
                </AppBar>
                </div>
        }

}

export default ButtonAppBar;
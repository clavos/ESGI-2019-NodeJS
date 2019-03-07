import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToggleButton'
import ToggleButton from './components/ToggleButton';
import LoginForm from './components/LoginForm';
import LoginFormContainer from './container/LoginFormContainer';
import MainMenuBar from './components/MainMenuBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      triggerLoginForms: false
    }
  }

  triggerLoginForm = () =>{
     var value = (this.state.triggerLoginForms)?false:true;
      this.setState({
          triggerLoginForms: value
      });
  }

  render() {

    return (
      <div className="App">
          <MainMenuBar triggerLoginForm={this.triggerLoginForm}/>
          <LoginFormContainer triggerLoginForms={this.state.triggerLoginForms}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToggleButton'
import ToggleButton from './components/ToggleButton';
import LoginForm from './components/LoginForm';
import LoginFormContainer from './container/LoginFormContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: "dark"
    }
  }
  handleToggle = () => {
    const newTheme = (this.state.theme == 'dark')?'light':'dark';
    this.setState({
      theme: newTheme
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
        </header>
        <ToggleButton theme={this.state.theme} onClick={this.handleToggle}/>
        <LoginFormContainer/>
      </div>
    );
  }
}

export default App;

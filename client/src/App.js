import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToggleButton'
import ToggleButton from './components/ToggleButton';
import LoginForm from './components/LoginForm';
import LoginFormContainer from './container/LoginFormContainer';
import ActorFormContainer from './container/ActorFormContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginFormContainer from "./container/LoginFormContainer";
import MainMenuBar from './components/MainMenuBar';
import Index from './container/Home';
import DashboardA from './container/DashBoard';

function Login() {
    return <LoginFormContainer/>;
}

function Dashboard() {
    return <DashboardA/>;
}

function Home() {
    return <Index/>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <MainMenuBar/>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
            </div>
        </Router>
    );
}

export default AppRouter;
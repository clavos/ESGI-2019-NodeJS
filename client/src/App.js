import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToggleButton'
import ToggleButton from './components/ToggleButton';
import LoginForm from './components/LoginForm';
import LoginFormContainer from './container/LoginFormContainer';
import ActorFormContainer from './container/ActorFormContainer';
import ReviewFormContainer from './container/ReviewFormContainer';
import RegisterFormContainer from './container/RegisterFormContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainMenuBar from './components/MainMenuBar';
import Index from './container/Home';
import DashboardA from './container/DashBoard';
import ListMovies from "./container/ListMovies";

function Login() {
    return <LoginFormContainer/>;
}

function Dashboard() {
    return <DashboardA/>;
}

function Home() {
    return <Index/>;
}

function Movies() {
    return <ListMovies/>;
}

function Actors() {
    return <ActorFormContainer/>;
}

function Reviews() {
    return <ReviewFormContainer/>;
}

function Register() {
    return <RegisterFormContainer/>;
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
                <Route path="/Register" exact component={Register} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/addactors" exact component={Actors} />
                <Route path="/review/add" exact component={Reviews} />

            </div>
        </Router>
    );
}

export default AppRouter;
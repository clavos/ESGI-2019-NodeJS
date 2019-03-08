import React from 'react';
import './App.css';
import './components/ToggleButton'
import LoginFormContainer from './container/LoginFormContainer';
import ActorFormContainer from './container/ActorFormContainer';
import ReviewFormContainer from './container/ReviewFormContainer';
import RegisterFormContainer from './container/RegisterFormContainer';
import ActorUpdate from './container/ActorUpdate';
import MovieFormContainer from './container/MovieFormContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainMenuBar from './components/MainMenuBar';
import Index from './container/Home';
import DashboardA from './container/DashBoard';
import ListMovies from "./container/ListMovies";
import MovieDetailsComponent from './components/MovieDetailsComponent';

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

function AddMovies() {
    return <MovieFormContainer/>;
}

function AddActors() {
    return <ActorFormContainer/>;
}
function Reviews() {
    return <ReviewFormContainer/>;
}

function Register() {
    return <RegisterFormContainer/>;
}

function UpdateActors() {
    return <ActorUpdate/>;
}

function disconnect() {
    localStorage.removeItem("token");
    return <LoginFormContainer/>;
}

function movieDetail(){
    return <MovieDetailsComponent/>;
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
                <Route path="/disconnect" exact component={disconnect} />
                <Route path="/Register" exact component={Register} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/review/add" exact component={Reviews} />
                <Route path="/actor/add" exact component={AddActors} />
                <Route path="/movie/add" exact component={AddMovies} />
                <Route path="/actor/update" exact component={UpdateActors} />
                <Route path="/movieDetail" exact component={movieDetail} />
            </div>
        </Router>
    );
}

export default AppRouter;
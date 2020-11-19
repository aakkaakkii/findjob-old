import React from "react";
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/registration' component={Registration}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

render(<App/>, document.getElementById('app'))

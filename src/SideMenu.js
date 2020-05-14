import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import About from './components/about';
import Image from './components/image';
import Home from './components/home';

class SideMenu extends React.Component{
    render(){
        return(
        <Router>
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Wildan </a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href={'/home'} className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href={'/about'} className="pure-menu-link">About</a></li>
                        <li className="pure-menu-item"><a href={'/image'} className="pure-menu-link">Image</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>
                    WELCOME TO MY WEBSITE
                </h1>
            </div>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/image' component={Image} />
        </Switch>
        </Router>
        );
    }
}

export default SideMenu;
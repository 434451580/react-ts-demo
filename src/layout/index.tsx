import React from 'react';

import { HashRouter as Router, BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import routeConfig from '../router/router'
import Nav from './nav';
import Home from '../pages/home';
import About from '../pages/about'
class Layout extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Nav>
                    <div className="container content">
                        <Switch>
                            {/* <Router routes={routeConfig} /> */}

                            <Route path="/home" component={Home} />
                        </Switch>
                    </div>
                </Nav>
                <Route exact path="/about" component={About} />
            </BrowserRouter>
        );
    }
}

export default Layout;
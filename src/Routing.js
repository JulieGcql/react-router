import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Accueil</NavLink>
                <NavLink to ="/notre-histoire" activeClassName="history"> Notre Histoire</NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}
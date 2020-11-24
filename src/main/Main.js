import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home, About, Diary, CustomerCenter, License } from './pages';

export default function Main() {
    return(
        <Switch>
            <Route path="/about">
                <About />                
            </Route>
            <Route path="/diary">
                <Diary />
            </Route>
            <Route path="/customercenter">
                <CustomerCenter />
            </Route>
            <Route path="/license">
                <License />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}
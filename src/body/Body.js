import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home, About, Diary, CustomerCenter } from './pages';

export default function Body() {
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
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
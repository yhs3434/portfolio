import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home, Board, CustomerCenter } from './pages';

export default function Body() {
    return(
        <Switch>
            <Route path="/board">
                <Board />                
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
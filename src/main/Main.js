import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home, About, Diary, CustomerCenter, License, Tech, Gallery, Detail } from './pages';

export default function Main(props) {
    const {start, setStart} = props;

    return(
        <Switch>
            <Route path="/" exact={true}>
                <Home start={start} setStart={setStart}/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/diary">
                <Diary />
            </Route>
            <Route path="/customercenter">
                <CustomerCenter />
            </Route>
            <Route path="/license">
                <License />
            </Route>
            <Route path="/tech">
                <Tech />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/detail/:table/:id">
                <Detail />
            </Route>
        </Switch>
    )
}
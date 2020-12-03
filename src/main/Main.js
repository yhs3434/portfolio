import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home, About, Diary, CustomerCenter, License, Tech, Gallery, Detail, Admin } from './pages';

export default function Main(props) {
    const {start, setStart} = props;

    return(
        <Switch>
            <Route path="/" exact={true}>
                <Home start={start} setStart={setStart}/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/diary" component={Diary} />
            <Route path="/customercenter" component={CustomerCenter} />
            <Route path="/license" component={License} />
            <Route path="/tech" component={Tech} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/detail/:table/:id" component={Detail} />
        </Switch>
    )
}
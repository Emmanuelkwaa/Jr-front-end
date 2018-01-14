import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Contact from './Contact';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/#about' component={Homepage} />
            <Route exact path='/#video' component={Homepage} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </main>
)

export default Main;
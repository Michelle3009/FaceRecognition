import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Miembros from 'Miembros.js';
import Home from 'Home.js';
//import Aux from 'Home.js';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Miembros" component={Login} />
            {//<Route exact path="/" component={Register} />
            }
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';

/*** Routes Component***/
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} /> {/** Path to Home component**/}
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
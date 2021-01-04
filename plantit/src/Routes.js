import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoutes';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/login" exact component={Login}></Route>
                <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;